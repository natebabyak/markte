<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import Search from '@lucide/svelte/icons/search';

	let open = $state(false);

	function toggle() {
		open = !open;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<div class="hidden md:block">
	<Button
		onclick={toggle}
		variant="outline"
		class="text-muted-foreground mr-4 cursor-pointer border-none"
	>
		<Search class="size-4" />
		<p class="font-normal">Search commands...</p>
		<kbd class="flex gap-1 text-xs">
			<p class="bg-muted rounded-sm px-1 py-0.5">Ctrl</p>
			<p class="bg-muted rounded-sm px-1 py-0.5">K</p>
		</kbd>
	</Button>
</div>
<div class="block md:hidden">
	<Button onclick={toggle} size="icon" variant="ghost" class="cursor-pointer">
		<Search class="size-4" />
	</Button>
</div>
<Command.Dialog bind:open>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Suggestions">
			<Command.Item>
				<span>Calculator</span>
			</Command.Item>
		</Command.Group>
	</Command.List>
</Command.Dialog>
