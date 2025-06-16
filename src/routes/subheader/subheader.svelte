<script lang="ts">
	import Menubar from './menubar.svelte';
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
	import LinkButton from './link-button.svelte';
	import ImageButton from './image-button.svelte';
	import TableButton from './table-button.svelte';
	import HeadingSelect from './heading-select.svelte';
</script>

{#snippet button(Icon: Component, tooltipContent: string)}
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button size="icon" variant="ghost">
				<Icon class="size-4" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{tooltipContent}
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

{#snippet toggle(Icon: Component, tooltipContent: string)}
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Toggle>
				<Icon class="size-4" />
			</Toggle>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{tooltipContent}
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

<header class="flex border-b p-2">
	<Menubar />
	<div class="hidden md:flex">
		<Separator orientation="vertical" />
		{@render button(Undo_2, 'Undo (Ctrl+Z)')}
		{@render button(Redo_2, 'Redo (Ctrl+Y)')}
		<Separator orientation="vertical" class="mx-2" />
		<HeadingSelect />
		<Separator orientation="vertical" class="mx-2" />
		{@render toggle(Bold, 'Bold (Ctrl+B)')}
		{@render toggle(Italic, 'Italic (Ctrl+I)')}
		{@render toggle(Underline, 'Underline (Ctrl+U)')}
	</div>
	<div class="hidden lg:flex">
		<Separator orientation="vertical" class="mx-2" />
		<LinkButton />
		<ImageButton />
		<TableButton />
		<Separator orientation="vertical" class="mx-2" />
		{@render button(List, 'Ordered List (Ctrl+Shift+7)')}
		{@render button(ListOrdered, 'Unordered List (Ctrl+Shift+8)')}
		{@render button(ListChecks, 'Task List (Ctrl+Shift+9)')}
	</div>
</header>
