<script lang="ts">
	import GithubLink from './github-link.svelte';
	import ThemeButton from './theme-button.svelte';
</script>

<header class="flex items-center justify-between border-b p-4">
	<img src="/markte.svg" alt="markte" class="size-8 select-none" />
	<div class="flex">
		<GithubLink />
		<ThemeButton />
	</div>
</header>
