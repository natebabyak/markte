<script lang="ts">
	import * as Resizable from '$lib/components/ui/resizable';
	import type { View } from '../view.svelte';
	import Editor from './editor.svelte';
	import Preview from './preview.svelte';

	const { view }: { view: View } = $props();
</script>

<Resizable.PaneGroup direction="horizontal">
	<Resizable.Pane>
		<Editor view={view.view} />
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane>
		<Preview text={view.text} />
	</Resizable.Pane>
</Resizable.PaneGroup>
