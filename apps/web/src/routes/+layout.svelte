<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex min-h-svh flex-col">
	<NavBar />
	{@render children()}
</div>
