<script lang="ts">
	import CommandMenu from './command-menu.svelte';
	import GithubLink from './github-link.svelte';
	import ThemeButton from './theme-button.svelte';
</script>

<header class="flex justify-between px-4 pt-4">
	<img src="/markte.svg" alt="markte" class="size-8 select-none" />
	<div class="flex">
		<CommandMenu />
		<GithubLink />
		<ThemeButton />
	</div>
</header>
