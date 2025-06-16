<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const { text }: { text: string } = $props();

	const html = $derived(DOMPurify.sanitize(marked(text, { async: false, gfm: true })));
</script>

<ScrollArea class="markdown-body">
	{@html html}
</ScrollArea>
