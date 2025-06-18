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
	import LinkButton from './link-button.svelte';
	import ImageButton from './image-button.svelte';
	import TableButton from './table-button.svelte';
	import HeadingSelect from './heading-select.svelte';
	import type { View } from '../view.svelte';
	import CodeButton from './code-button.svelte';
	import Upload from '@lucide/svelte/icons/upload';
	import Download from '@lucide/svelte/icons/download';
	import Strikethrough from '@lucide/svelte/icons/strikethrough';
	import BadgeButton from './badge-button.svelte';

	const { view }: { view: View } = $props();
</script>

{#snippet button(Icon: Component, tooltip: string)}
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button size="icon" variant="ghost" class="cursor-pointer">
				<Icon class="size-4" />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			{tooltip}
		</Tooltip.Content>
	</Tooltip.Root>
{/snippet}

{#snippet separator()}
	<div class="mx-2 block">
		<Separator orientation="vertical" />
	</div>
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

<header class="flex items-center border-b p-2">
	{@render button(Upload, 'Upload')}
	<Separator orientation="vertical" class="mx-2" />
	{@render button(Undo_2, 'Undo (Ctrl+Z)')}
	{@render button(Redo_2, 'Redo (Ctrl+Y)')}
	<Separator orientation="vertical" class="mx-2" />
	<HeadingSelect />
	<Separator orientation="vertical" class="mx-2" />
	{@render toggle(Bold, 'Bold (Ctrl+B)')}
	{@render toggle(Italic, 'Italic (Ctrl+I)')}
	{@render toggle(Underline, 'Underline (Ctrl+U)')}
	{@render toggle(Strikethrough, 'Strikethrough (Alt+Shift+5)')}
	<Separator orientation="vertical" class="mx-2" />
	<LinkButton />
	<ImageButton />
	<BadgeButton />
	<TableButton />
	<CodeButton />
	<Separator orientation="vertical" class="mx-2" />
	{@render button(List, 'Insert Ordered List (Ctrl+Shift+7)')}
	{@render button(ListOrdered, 'Insert Unordered List (Ctrl+Shift+8)')}
	{@render button(ListChecks, 'Insert Task List (Ctrl+Shift+9)')}
	<Separator orientation="vertical" class="mx-2" />
	{@render button(Download, 'Download')}
</header>
