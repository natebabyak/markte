<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import Menubar from './menubar.svelte';
	import ToggleGroup from './toggle-group.svelte';
</script>

<header class="flex gap-2 border-b p-2">
	<Menubar />
	<Separator orientation="vertical" />
	<ToggleGroup />
</header>
