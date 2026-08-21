<script lang="ts">
	import { resolve } from '$app/paths';
	import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
	import GithubIcon from '@iconify-svelte/mdi/github';
	import { Button } from '$lib/components/ui/button';
</script>

<header>
	<div class="flex items-center justify-between px-6 py-3">
		<a
			href={resolve('/')}
			class="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
		>
			<span class="flex size-8 items-center justify-center rounded-md bg-muted/50">
				<GalleryVerticalEndIcon class="size-4" aria-hidden="true" />
			</span>
			securepass
		</a>
		<nav class="flex items-center gap-1">
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
			<Button variant="ghost" size="sm" href={resolve('/about')}>About</Button>
		</nav>
	</div>
</header>
