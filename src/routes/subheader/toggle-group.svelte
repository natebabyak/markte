<script lang="ts">
	import Bold from '@lucide/svelte/icons/bold';
	import type { Component } from 'svelte';
	import Italic from '@lucide/svelte/icons/italic';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import Underline from '@lucide/svelte/icons/underline';
</script>

{#snippet item(value: string, Icon: Component)}
	<ToggleGroup.Item {value}>
		<Icon class="h-4 w-4" />
	</ToggleGroup.Item>
{/snippet}

<ToggleGroup.Root type="multiple" variant="outline">
	{@render item('bold', Bold)}
	{@render item('italic', Italic)}
	{@render item('underline', Underline)}
</ToggleGroup.Root>
