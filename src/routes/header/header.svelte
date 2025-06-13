<script lang="ts">
	import CommandMenu from './command-menu.svelte';
	import GithubLink from './github-link.svelte';
	import ThemeButton from './theme-button.svelte';
</script>

<header class="flex justify-between border-b p-4">
	<img src="/markte.svg" alt="markte" class="h-8 w-8 select-none" />
	<div class="flex">
		<CommandMenu />
		<GithubLink />
		<ThemeButton />
	</div>
</header>
