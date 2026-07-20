<script lang="ts">
	import { resolve } from '$app/paths';
	import ShieldIcon from '@lucide/svelte/icons/shield';
	import GithubIcon from '@iconify-svelte/mdi/github';
	import { Button } from '$lib/components/ui/button';
</script>

<header class="flex items-center justify-between px-6 py-4">
	<a href={resolve('/')} class="flex items-center gap-2 font-semibold">
		<ShieldIcon class="size-5" />
		securepass
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
		<Button variant="ghost" href={resolve('/about')} class="hover:bg-background">About</Button>
	</nav>
</header>
