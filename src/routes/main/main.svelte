<script lang="ts">
	import * as ContextMenu from '$lib/components/ui/context-menu';
	import Editor from './editor/editor.svelte';
	import Preview from './preview/preview.svelte';
	import * as Resizable from '$lib/components/ui/resizable';
	import type { View } from '../view.svelte';

	const { view }: { view: View } = $props();
</script>

<ContextMenu.Root>
	<ContextMenu.Trigger>
		<main>
			<Resizable.PaneGroup direction="horizontal">
				<Resizable.Pane>
					<Editor view={view.view} />
				</Resizable.Pane>
				<Resizable.Handle withHandle />
				<Resizable.Pane>
					<Preview text={view.text} />
				</Resizable.Pane>
			</Resizable.PaneGroup>
		</main>
	</ContextMenu.Trigger>
	<ContextMenu.Content>
		<ContextMenu.Item>Profile</ContextMenu.Item>
		<ContextMenu.Item>Billing</ContextMenu.Item>
		<ContextMenu.Item>Team</ContextMenu.Item>
		<ContextMenu.Item>Subscription</ContextMenu.Item>
	</ContextMenu.Content>
</ContextMenu.Root>
