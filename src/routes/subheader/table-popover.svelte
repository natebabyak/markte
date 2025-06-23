<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Table_2 from '@lucide/svelte/icons/table-2';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { cn } from '$lib/utils';

	const { insertTable }: { insertTable: (rows: number, cols: number) => void } = $props();

	let isOpen = $state(false);

	let rows = $state(0);
	let cols = $state(0);
</script>

<Popover.Root bind:open={isOpen}>
	<Popover.Trigger>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button size="icon" variant="ghost" class="cursor-pointer">
					<Table_2 class="size-4" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>Insert Table</Tooltip.Content>
		</Tooltip.Root>
	</Popover.Trigger>
	<Popover.Content class="w-fit">
		<div class="flex flex-col gap-2">
			<h4 class="font-medium">Insert {rows}x{cols} Table</h4>
			<div class="flex flex-col gap-1">
				{#each { length: 10 }, col}
					<div class="flex gap-1">
						{#each { length: 10 }, row}
							<Button
								onclick={() => {
									insertTable(rows, cols);
									isOpen = false;
								}}
								onmouseover={() => {
									rows = row + 1;
									cols = col + 1;
								}}
								size="icon"
								variant="outline"
								class={cn(
									'size-4 cursor-pointer rounded-none',
									rows > row && cols > col && '!bg-muted-foreground'
								)}
							></Button>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
