<script lang="ts">
	import ClipboardCopy from '@lucide/svelte/icons/clipboard-copy';
	import ClipboardPaste from '@lucide/svelte/icons/clipboard-paste';
	import type { Component } from 'svelte';
	import List from '@lucide/svelte/icons/list';
	import ListChecks from '@lucide/svelte/icons/list-checks';
	import ListOrdered from '@lucide/svelte/icons/list-ordered';
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import Redo_2 from '@lucide/svelte/icons/redo-2';
	import Scissors from '@lucide/svelte/icons/scissors';
	import Undo_2 from '@lucide/svelte/icons/undo-2';
</script>

{#snippet item(Icon: Component, text: string, shortcut: string)}
	<Menubar.Item>
		{#if Icon}
			<Icon class="mr-2 h-4 w-4" />
		{/if}
		{text}
		{#if shortcut}
			<Menubar.Shortcut>
				{shortcut}
			</Menubar.Shortcut>
		{/if}
	</Menubar.Item>
{/snippet}

<Menubar.Root>
	<Menubar.Menu>
		<Menubar.Trigger>File</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				New Tab
				<Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Edit</Menubar.Trigger>
		<Menubar.Content>
			{@render item(Undo_2, 'Undo', 'Ctrl+Z')}
			{@render item(Redo_2, 'Redo', 'Ctrl+Y')}
			<Menubar.Separator />
			{@render item(Scissors, 'Cut', 'Ctrl+X')}
			{@render item(ClipboardCopy, 'Copy', 'Ctrl+C')}
			{@render item(ClipboardPaste, 'Paste', 'Ctrl+V')}
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Insert</Menubar.Trigger>
		<Menubar.Content>
			{@render item(List, 'Ordered List', 'Ctrl+Shift+7')}
			{@render item(ListOrdered, 'Unordered List', 'Ctrl+Shift+8')}
			{@render item(ListChecks, 'Task List', 'Ctrl+Shift+9')}
		</Menubar.Content>
	</Menubar.Menu>
	<Menubar.Menu>
		<Menubar.Trigger>Format</Menubar.Trigger>
		<Menubar.Content>
			<Menubar.Item>
				New Tab
				<Menubar.Shortcut>⌘T</Menubar.Shortcut>
			</Menubar.Item>
		</Menubar.Content>
	</Menubar.Menu>
</Menubar.Root>
