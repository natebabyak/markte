<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import type { Component } from 'svelte';
	import Italic from '@lucide/svelte/icons/italic';
	import { Separator } from '$lib/components/ui/separator';
	import { Toggle } from '$lib/components/ui/toggle';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import Underline from '@lucide/svelte/icons/underline';
	import { Button } from '$lib/components/ui/button';
	import Redo_2 from '@lucide/svelte/icons/redo-2';
	import Undo_2 from '@lucide/svelte/icons/undo-2';
	import List from '@lucide/svelte/icons/list';
	import ListChecks from '@lucide/svelte/icons/list-checks';
	import ListOrdered from '@lucide/svelte/icons/list-ordered';
	import HeadingSelect from './heading-select.svelte';
	import type { View } from '../view.svelte';
	import Upload from '@lucide/svelte/icons/upload';
	import Download from '@lucide/svelte/icons/download';
	import Strikethrough from '@lucide/svelte/icons/strikethrough';
	import TablePopover from './table-popover.svelte';
	import ThemePopover from './theme-popover.svelte';
	import Link_2 from '@lucide/svelte/icons/link-2';
	import Image from '@lucide/svelte/icons/image';

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

{#snippet toggle(Icon: Component, tooltip: string)}
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Toggle class="cursor-pointer">
				<Icon class="size-4" />
			</Toggle>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{tooltip}
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

<header class="flex items-center justify-between border-b p-2">
	<div class="flex">
		{@render button(Upload, 'Upload')}
		{@render button(Undo_2, 'Undo (Ctrl+Z)')}
		{@render button(Redo_2, 'Redo (Ctrl+Y)')}
		<HeadingSelect />
		{@render toggle(Bold, 'Bold (Ctrl+B)')}
		{@render toggle(Italic, 'Italic (Ctrl+I)')}
		{@render toggle(Underline, 'Underline (Ctrl+U)')}
		{@render toggle(Strikethrough, 'Strikethrough (Alt+Shift+5)')}
		{@render button(Link_2, 'Insert Link', view.insertLink)}
		{@render button(Image, 'Insert Image')}
		<TablePopover insertTable={view.insertTable} />
		{@render button(List, 'Insert Ordered List (Ctrl+Shift+7)', view.insertOrderedList)}
		{@render button(ListOrdered, 'Insert Unordered List (Ctrl+Shift+8)', view.insertUnorderedList)}
		{@render button(ListChecks, 'Insert Task List (Ctrl+Shift+9)', view.insertTaskList)}
		{@render button(Download, 'Download')}
	</div>
	<ThemePopover />
</header>
