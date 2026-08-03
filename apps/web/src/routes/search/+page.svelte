<script lang="ts">
	import SearchIcon from '@lucide/svelte/icons/search';
	import EyeIcon from '@lucide/svelte/icons/eye';
	import EyeOffIcon from '@lucide/svelte/icons/eye-off';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { searchEntries } from './search.remote';

	let label = $state('');
	let submittedLabel = $state<string | null>(null);
	let activeSearch = $state<ReturnType<typeof searchEntries> | null>(null);
	let revealedIds = $state<number[]>([]);

	function isRevealed(id: number): boolean {
		return revealedIds.includes(id);
	}

	function toggleRevealed(id: number) {
		revealedIds = isRevealed(id)
			? revealedIds.filter((revealedId) => revealedId !== id)
			: [...revealedIds, id];
	}

	function handleSearch(event: SubmitEvent) {
		event.preventDefault();

		const nextLabel = label.trim();
		if (!nextLabel) return;

		revealedIds = [];

		if (activeSearch && submittedLabel === nextLabel) {
			void activeSearch.refresh();
			return;
		}

		submittedLabel = nextLabel;
		activeSearch = searchEntries({ label: nextLabel });
	}
</script>

<main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
	<div class="flex flex-col items-center gap-3">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Search passwords</h1>
		<p class="max-w-md text-muted-foreground">Type a label to find your saved entry</p>
	</div>
	<form class="flex w-full max-w-sm items-center gap-2" onsubmit={handleSearch}>
		<Input bind:value={label} name="query" placeholder="Search by label..." required />
		<Button type="submit" disabled={!!activeSearch?.loading}>
			<SearchIcon data-icon="inline-start" />
			Search
		</Button>
	</form>

	{#if activeSearch?.loading}
		<p class="text-sm text-muted-foreground" role="status">Searching...</p>
	{:else if activeSearch?.error}
		<p class="text-sm text-destructive" role="alert">
			{activeSearch.error.message || 'Unable to search passwords'}
		</p>
	{:else if activeSearch?.current}
		{const results = activeSearch.current.results}
		{#if results.length === 0}
			<p class="text-sm text-muted-foreground" role="status">
				No entries found for “{submittedLabel}”.
			</p>
		{:else}
			<div class="flex w-full max-w-sm flex-col gap-3 text-left" aria-live="polite">
				{#each results as result (result.id)}
					<div class="rounded-lg border border-border bg-card p-4 shadow-sm">
						<div class="flex items-start justify-between gap-3">
							<div class="min-w-0">
								<p class="font-medium">{result.label}</p>
								<p class="truncate text-sm text-muted-foreground">
									{result.username}
								</p>
							</div>
							<Button
								variant="ghost"
								size="icon-sm"
								type="button"
								aria-label={isRevealed(result.id)
									? 'Hide password'
									: 'Show password'}
								aria-pressed={isRevealed(result.id)}
								onclick={() => toggleRevealed(result.id)}
							>
								{#if isRevealed(result.id)}
									<EyeOffIcon />
								{:else}
									<EyeIcon />
								{/if}
							</Button>
						</div>
						<p class="mt-3 rounded-md bg-muted px-3 py-2 font-mono text-sm break-all">
							{isRevealed(result.id) ? result.password : '••••••••'}
						</p>
					</div>
				{/each}
			</div>
		{/if}
	{/if}
</main>
