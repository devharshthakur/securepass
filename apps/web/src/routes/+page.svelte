<script lang="ts">
	import { resolve } from '$app/paths';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>securepass — Your secure password manager</title>
	<meta
		name="description"
		content="Keep your passwords encrypted, organised, and always within reach."
	/>
</svelte:head>

<main class="flex flex-1 items-center justify-center px-6 py-16">
	<div class="flex w-full max-w-2xl flex-col items-center gap-10 text-center">
		<div class="flex flex-col items-center gap-5">
			<div class="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
				<ShieldIcon class="size-8 text-primary" />
			</div>
			<div class="flex flex-col items-center gap-3">
				<p class="text-sm font-medium text-primary">Your private password vault</p>
				<h1 class="text-4xl font-bold tracking-tight sm:text-6xl">securepass</h1>
				<p class="max-w-lg text-lg text-muted-foreground">
					Your passwords, encrypted and always within reach.
				</p>
			</div>
		</div>

		<div class="flex flex-col gap-3 sm:flex-row">
			<Button href={resolve('/auth/login')} size="lg">Sign in</Button>
			<Button href={resolve('/about')} variant="outline" size="lg">Learn more</Button>
		</div>
	</div>
</main>
