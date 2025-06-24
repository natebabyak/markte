<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import { Button } from '$lib/components/ui/button';
	import { type Component } from 'svelte';
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

	const headingIcons = [Pilcrow, Heading_1, Heading_2, Heading_3, Heading_4, Heading_5, Heading_6];

	let fileInput: HTMLInputElement;

	function triggerFileUpload() {
		fileInput.click();
	}

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];

		if (!file) return;

		const reader = new FileReader();

		reader.onload = (e) => {
			const text = e.target?.result as string;
			view.upload(text);
		};

		reader.readAsText(file);
	}
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
		<input
			accept=".txt,.md"
			type="file"
			class="hidden"
			bind:this={fileInput}
			onchange={handleFileChange}
		/>
		{@render button(Upload, 'Upload', triggerFileUpload)}
		{@render separator()}
		{@render button(Undo_2, 'Undo (Ctrl+Z)', view.undo)}
		{@render button(Redo_2, 'Redo (Ctrl+Y)', view.redo)}
		<div class="hidden md:flex">
			{@render separator()}
			{#each headingIcons as headingIcon, i}
				{@render button(headingIcon, `${i ? `Heading ${i}` : 'Paragraph'} (Ctrl+Alt+${i})`, () =>
					view.heading(i)
				)}
			{/each}
			{@render separator()}
			{@render button(Bold, 'Bold (Ctrl+B)', view.bold)}
			{@render button(Italic, 'Italic (Ctrl+I)', view.italic)}
			{@render button(Strikethrough, 'Strikethrough (Alt+Shift+5)', view.strikethrough)}
		</div>
		<div class="hidden sm:flex">
			{@render separator()}
			{@render button(Link_2, 'Insert Link (Ctrl+K)', view.insertLink)}
			{@render button(Image, 'Insert Image', view.insertImage)}
			<TablePopover insertTable={view.insertTable} />
		</div>
		<div class="hidden lg:flex">
			{@render separator()}
			{@render button(ListOrdered, 'Ordered List (Ctrl+Shift+7)', view.insertOrderedList)}
			{@render button(List, 'Unordered List (Ctrl+Shift+8)', view.insertUnorderedList)}
			{@render button(ListChecks, 'Task List (Ctrl+Shift+9)', view.insertTaskList)}
		</div>

		{@render separator()}
		{@render button(Download, 'Download', view.download)}
	</div>
	<ThemePopover changeTheme={view.changeTheme} themeId={view.themeId} />
</header>
