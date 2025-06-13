<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';
	import { ScrollArea } from '$lib/components/ui/scroll-area';

	const { markdown }: { markdown: { markdown: string } } = $props();

	const html = $derived(DOMPurify.sanitize(marked(markdown.markdown, { async: false, gfm: true })));
</script>

<ScrollArea>
	{@html html}
</ScrollArea>
