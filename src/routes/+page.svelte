<script lang="ts">
	import Header from './header/header.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import Subheader from './subheader/subheader.svelte';
	import Editor from './editor/editor.svelte';
	import Preview from './preview/preview.svelte';
	import { createMarkdown } from './markdown.svelte';

	const markdown = createMarkdown();
</script>

<div class="flex h-screen w-screen flex-col">
	<Header />
	<Subheader />
	<Resizable.PaneGroup direction="horizontal">
		<Resizable.Pane>
			<Editor />
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane>
			<Preview {markdown} />
		</Resizable.Pane>
	</Resizable.PaneGroup>
</div>
