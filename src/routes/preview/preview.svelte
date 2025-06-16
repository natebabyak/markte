<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const { text }: { text: string } = $props();

	const preview = $derived(DOMPurify.sanitize(marked(text, { async: false, gfm: true })));
</script>

<ScrollArea class="markdown-body h-full p-4">
	{@html preview}
</ScrollArea>
