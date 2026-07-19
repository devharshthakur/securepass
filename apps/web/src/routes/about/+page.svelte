<script lang="ts">
	import { resolve } from '$app/paths';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex min-h-svh flex-col">
	<header class="flex items-center justify-between px-6 py-4">
		<a href={resolve('/')} class="flex items-center gap-2 font-semibold">
			<ShieldIcon class="size-5" />
			securepass
		</a>
		<nav class="flex items-center gap-2">
			<Button
				variant="ghost"
				size="icon"
				href="https://github.com"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub"
			>
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
					<path
						d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
					/>
				</svg>
			</Button>
		</nav>
	</header>

	<main class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
		<div class="flex flex-col items-center gap-3">
			<ShieldIcon class="size-12 text-primary" />
			<h1 class="text-3xl font-bold tracking-tight sm:text-4xl">About securepass</h1>
		</div>
		<div class="max-w-md text-muted-foreground">
			<p>
				securepass is a simple yet secure password manager. Keep all your logins organised
				and easily accessible — encrypted, always within reach.
			</p>
		</div>
	</main>
</div>
