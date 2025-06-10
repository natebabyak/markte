<script lang="ts">
	import * as Command from '$lib/components/ui/command';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Search from '@lucide/svelte/icons/search';

	let open = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open = !open;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<Button onclick={() => (open = !open)} variant="outline" class="flex justify-between">
	<div class="flex gap-2">
		<Search class="h-4 w-4" />
		<p>Search commands...</p>
	</div>
	<kbd class="flex gap-1 text-xs">
		<p>Ctrl</p>
		<p>K</p>
	</kbd>
</Button>
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
