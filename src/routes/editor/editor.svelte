<script lang="ts">
	import type { EditorView } from 'codemirror';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const { view = $bindable() }: { view: EditorView } = $props();
</script>

<ScrollArea>
	<div id="editor"></div>
</ScrollArea>
