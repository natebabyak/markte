<script lang="ts">
	import Menubar from './menubar.svelte';
	import Select from './select.svelte';
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
	import Badge from '@lucide/svelte/icons/badge';
	import Image from '@lucide/svelte/icons/image';
	import Link_2 from '@lucide/svelte/icons/link-2';
	import List from '@lucide/svelte/icons/list';
	import ListChecks from '@lucide/svelte/icons/list-checks';
	import ListOrdered from '@lucide/svelte/icons/list-ordered';
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
		<Separator orientation="vertical" class="mx-2" />
		{@render button(Undo_2, 'Undo (Ctrl+Z)')}
		{@render button(Redo_2, 'Redo (Ctrl+Y)')}
	</div>
	<Select />
	<div class="hidden md:flex">
		<Separator orientation="vertical" class="mx-2" />
		{@render toggle(Bold, 'Bold (Ctrl+B)')}
		{@render toggle(Italic, 'Italic (Ctrl+I)')}
		{@render toggle(Underline, 'Underline (Ctrl+U)')}
	</div>
	<div class="hidden lg:flex">
		<Separator orientation="vertical" class="mx-2" />
		{@render button(Link_2, 'Link')}
		{@render button(Image, 'Insert image')}
		{@render button(Badge, 'Badge')}
	</div>
</header>
