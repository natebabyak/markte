<script lang="ts">
	import { onMount } from 'svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const { dom }: { dom: HTMLElement } = $props();

	onMount(() => {
		const editor = document.getElementById('editor');
		editor?.appendChild(dom);
	});
</script>

<ScrollArea class="h-full">
	<div id="editor"></div>
</ScrollArea>
