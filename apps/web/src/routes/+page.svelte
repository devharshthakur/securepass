<script lang="ts">
	import { resolve } from '$app/paths';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>securepass — Your secure password manager</title>
	<meta
		name="description"
		content="Keep your passwords encrypted, organised, and always within reach."
	/>
</svelte:head>

<main class="flex flex-1 items-center justify-center px-6">
	<div class="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
		<div class="flex flex-col items-center gap-8">
			<div class="flex size-10 items-center justify-center rounded-md border bg-muted/50">
				<GalleryVerticalEndIcon class="size-6" aria-hidden="true" />
			</div>
			<div class="flex flex-col items-center gap-3">
				<p class="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
					Your private password vault
				</p>
				<h1 class="text-5xl font-semibold tracking-tight sm:text-7xl">securepass</h1>
				<p class="max-w-lg text-lg leading-8 text-muted-foreground sm:text-xl">
					Your passwords, encrypted and always within reach.
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={resolve('/auth/login')} size="lg" class="px-6">Login</Button>
			<Button href={resolve('/about')} variant="outline" size="lg">Learn more</Button>
		</div>
	</div>
</main>
