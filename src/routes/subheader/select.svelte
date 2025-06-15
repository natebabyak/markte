<script lang="ts">
	import type { Component } from 'svelte';
	import Heading_1 from '@lucide/svelte/icons/heading-1';
	import Heading_2 from '@lucide/svelte/icons/heading-2';
	import Heading_3 from '@lucide/svelte/icons/heading-3';
	import Heading_4 from '@lucide/svelte/icons/heading-4';
	import Heading_5 from '@lucide/svelte/icons/heading-5';
	import Heading_6 from '@lucide/svelte/icons/heading-6';
	import Pilcrow from '@lucide/svelte/icons/pilcrow';
	import * as Select from '$lib/components/ui/select';
	import { Separator } from '$lib/components/ui/separator';
	import * as Tooltip from '$lib/components/ui/tooltip';

	type Heading = {
		Icon: Component;
		label: string;
		value: string;
	};

	const headings: Heading[] = [
		{
			Icon: Pilcrow,
			label: 'Paragraph',
			value: 'p'
		},
		{
			Icon: Heading_1,
			label: 'Heading 1',
			value: 'h1'
		},
		{
			Icon: Heading_2,
			label: 'Heading 2',
			value: 'h2'
		},
		{
			Icon: Heading_3,
			label: 'Heading 3',
			value: 'h3'
		},
		{
			Icon: Heading_4,
			label: 'Heading 4',
			value: 'h4'
		},
		{
			Icon: Heading_5,
			label: 'Heading 5',
			value: 'h5'
		},
		{
			Icon: Heading_6,
			label: 'Heading 6',
			value: 'h6'
		}
	];

	let value: string = $state('');

	const triggerContent = $derived(
		headings.find((h) => h.value === value)?.label ?? 'not implemented yet'
	);
</script>

<div class="hidden md:flex">
	<Separator orientation="vertical" class="mx-2" />
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Select.Root bind:value type="single">
				<Select.Trigger>{triggerContent}</Select.Trigger>
				<Select.Content>
					{#each headings as { Icon, label, value }}
						<Select.Item {value}>
							<Icon class="mr-2 size-4" />
							{label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Headings</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>
