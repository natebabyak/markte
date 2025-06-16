<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import Link_2 from '@lucide/svelte/icons/link-2';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
</script>

<Popover.Root>
	<Popover.Trigger>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button size="icon" variant="ghost">
					<Link_2 class="size-4" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Insert Link</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</Popover.Trigger>
	<Popover.Content>
		<div class="flex flex-col gap-4">
			<div class="flex gap-4">
				<Label for="text">Text</Label>
				<Input id="text" placeholder="Example Domain" />
			</div>
			<div class="flex gap-4">
				<Label for="url">URL</Label>
				<Input id="url" placeholder="https://www.example.com" />
			</div>
			<Button>Submit</Button>
		</div>
	</Popover.Content>
</Popover.Root>
