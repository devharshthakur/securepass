<script lang="ts">
	import SearchIcon from '@lucide/svelte/icons/search';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
	<div class="flex flex-col items-center gap-3">
		<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Search passwords</h1>
		<p class="max-w-md text-muted-foreground">Type a label to find your saved entry</p>
	</div>
	<form class="flex w-full max-w-sm items-center gap-2">
		<Input name="query" placeholder="Search by label..." required />
		<Button type="submit">
			<SearchIcon data-icon="inline-start" />
			Search
		</Button>
	</form>
</main>
