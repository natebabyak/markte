<script lang="ts">
	import { createView, type View } from './view.svelte';
	import Header from './header/header.svelte';
	import Subheader from './subheader/subheader.svelte';
	import { onMount } from 'svelte';
	import Main from './main/main.svelte';

	let view: View;

	onMount(() => {
		view = createView();
	});
</script>

<div class="flex h-screen w-screen flex-col">
	<Header />
	{#if view}
		<Subheader {view} />
		<Main {view} />
	{/if}
</div>
