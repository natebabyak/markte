<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { mode, toggleMode } from 'mode-watcher';
	import Moon from '@lucide/svelte/icons/moon';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Sun from '@lucide/svelte/icons/sun';
</script>

<Button onclick={toggleMode} size="icon" variant="ghost" class="cursor-pointer">
	{#if !mode.current}
		<Skeleton class="size-4 rounded-full" />
	{:else if mode.current === 'dark'}
		<Moon class="size-4" />
	{:else}
		<Sun class="size-4" />
	{/if}
</Button>
