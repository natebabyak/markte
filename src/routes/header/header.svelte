<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { mode, toggleMode } from 'mode-watcher';
	import Moon from '@lucide/svelte/icons/moon';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Sun from '@lucide/svelte/icons/sun';
	import Github from '@lucide/svelte/icons/github';
	import Menubar from './menubar.svelte';
	import Command from './command.svelte';
</script>

<header class="flex h-16 items-center justify-between px-2">
	<div class="flex gap-2">
		<img src="/markte.svg" alt="markte" class="h-8 w-8 select-none" />
		<Menubar />
	</div>
	<div class="flex gap-2">
		<Command />
		<Button href="https://github.com/natebabyak/markte" size="icon" variant="outline">
			<Github class="h-5 w-5" />
		</Button>
		<Button onclick={toggleMode} size="icon" variant="outline">
			{#if !mode.current}
				<Skeleton class="h-5 w-5 rounded-full" />
			{:else if mode.current === 'dark'}
				<Moon class="h-5 w-5" />
			{:else}
				<Sun class="h-5 w-5" />
			{/if}
		</Button>
	</div>
</header>
