<script lang="ts">
	import Header from './header/header.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import Subheader from './subheader/subheader.svelte';
	import Editor from './editor/editor.svelte';
	import Preview from './preview/preview.svelte';
	import { createView, type View } from './view.svelte';
	import { onMount } from 'svelte';

	let view: View;

	onMount(() => {
		view = createView();
	});
</script>

<div class="flex h-screen w-screen flex-col">
	<Header />
	<Subheader />
	<Resizable.PaneGroup direction="horizontal">
		<Resizable.Pane>
			{#if view}
				<Editor view={view.view} />
			{/if}
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane>
			{#if view}
				<Preview text={view.text} />
			{/if}
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
