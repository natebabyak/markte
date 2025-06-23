<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import { Button } from '$lib/components/ui/button';
	import type { Component } from 'svelte';
	import Download from '@lucide/svelte/icons/download';
	import Heading_1 from '@lucide/svelte/icons/heading-1';
	import Heading_2 from '@lucide/svelte/icons/heading-2';
	import Heading_3 from '@lucide/svelte/icons/heading-3';
	import Heading_4 from '@lucide/svelte/icons/heading-4';
	import Heading_5 from '@lucide/svelte/icons/heading-5';
	import Heading_6 from '@lucide/svelte/icons/heading-6';
	import Image from '@lucide/svelte/icons/image';
	import Italic from '@lucide/svelte/icons/italic';
	import Link_2 from '@lucide/svelte/icons/link-2';
	import List from '@lucide/svelte/icons/list';
	import ListChecks from '@lucide/svelte/icons/list-checks';
	import ListOrdered from '@lucide/svelte/icons/list-ordered';
	import Pilcrow from '@lucide/svelte/icons/pilcrow';
	import Redo_2 from '@lucide/svelte/icons/redo-2';
	import { Separator } from '$lib/components/ui/separator';
	import Strikethrough from '@lucide/svelte/icons/strikethrough';
	import TablePopover from './table-popover.svelte';
	import ThemePopover from './theme-popover.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import Undo_2 from '@lucide/svelte/icons/undo-2';
	import Upload from '@lucide/svelte/icons/upload';
	import type { View } from '../view.svelte';

	const { view }: { view: View } = $props();
</script>

{#snippet button(Icon: Component, tooltip: string, onclick: () => void)}
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button {onclick} size="icon" variant="ghost" class="cursor-pointer">
				<Icon class="size-4" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{tooltip}
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

{#snippet separator()}
	<div class="block">
		<Separator orientation="vertical" class="mx-2" />
	</div>
{/snippet}

<header class="flex items-center justify-between border-b p-2">
	<div class="flex">
		{@render button(Upload, 'Upload', view.upload)}
		{@render separator()}
		{@render button(Undo_2, 'Undo (Ctrl+Z)', view.undo)}
		{@render button(Redo_2, 'Redo (Ctrl+Y)', view.redo)}
		{@render separator()}
		{@render button(Pilcrow, 'Paragraph (Ctrl+Alt+0)', view.paragraph)}
		{@render button(Heading_1, 'Heading 1 (Ctrl+Alt+1)', view.heading1)}
		{@render button(Heading_2, 'Heading 2 (Ctrl+Alt+2)', view.heading2)}
		{@render button(Heading_3, 'Heading 3 (Ctrl+Alt+3)', view.heading3)}
		{@render button(Heading_4, 'Heading 4 (Ctrl+Alt+4)', view.heading4)}
		{@render button(Heading_5, 'Heading 5 (Ctrl+Alt+5)', view.heading5)}
		{@render button(Heading_6, 'Heading 6 (Ctrl+Alt+6)', view.heading6)}
		{@render separator()}
		{@render button(Bold, 'Bold (Ctrl+B)', view.bold)}
		{@render button(Italic, 'Italic (Ctrl+I)', view.italic)}
		{@render button(Strikethrough, 'Strikethrough (Alt+Shift+5)', view.strikethrough)}
		{@render separator()}
		{@render button(Link_2, 'Insert Link', view.insertLink)}
		{@render button(Image, 'Insert Image', view.insertImage)}
		<TablePopover insertTable={view.insertTable} />
		{@render separator()}
		{@render button(List, 'Ordered List (Ctrl+Shift+7)', view.insertOrderedList)}
		{@render button(ListOrdered, 'Unordered List (Ctrl+Shift+8)', view.insertUnorderedList)}
		{@render button(ListChecks, 'Task List (Ctrl+Shift+9)', view.insertTaskList)}
		{@render separator()}
		{@render button(Download, 'Download', view.download)}
	</div>
	<ThemePopover changeTheme={view.changeTheme} themeId={view.themeId} />
</header>
