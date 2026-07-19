<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PlusIcon from '@lucide/svelte/icons/plus';
	import SearchIcon from '@lucide/svelte/icons/search';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import GithubIcon from '@iconify-svelte/mdi/github';
	import { resolve } from '$app/paths';
</script>

<div class="flex min-h-svh flex-col">
	<header class="flex items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-2 font-semibold">
			<ShieldIcon class="size-5" />
			<span> securepass </span>
		</a>
		<nav class="flex items-center gap-2">
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com/devharshthakur"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<GithubIcon height="18" class="size-5" />
			</Button>
			<Button variant="ghost" href={resolve('/about')} class="hover:bg-background"
				>About</Button
			>
		</nav>
	</header>

	<main class="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center">
		<div class="flex flex-col items-center gap-3">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">securepass</h1>
			<p class="max-w-md text-muted-foreground">
				Your passwords, encrypted and always within reach.
			</p>
		</div>
		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={resolve('/add')} size="lg">
				<PlusIcon data-icon="inline-start" />
				Add a password
			</Button>
			<Button href={resolve('/search')} variant="outline" size="lg">
				<SearchIcon data-icon="inline-start" />
				Search passwords
			</Button>
		</div>
	</main>
</div>
