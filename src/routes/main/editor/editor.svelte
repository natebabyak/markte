<script lang="ts">
	import type { EditorView } from 'codemirror';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { onMount } from 'svelte';

	const { view = $bindable() }: { view: EditorView } = $props();

	onMount(() => {
		const editor = document.getElementById('editor');
		editor?.appendChild(view.dom);
	});
</script>

<ScrollArea class="h-full">
	<div id="editor"></div>
</ScrollArea>
