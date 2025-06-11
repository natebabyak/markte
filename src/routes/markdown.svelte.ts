import { onMount } from 'svelte';

const KEY = 'markdown';

export function createMarkdown() {
	let markdown: string = $state('');

	onMount(() => {
		markdown = localStorage.getItem(KEY) ?? '';
	});

	return {
		get markdown() {
			return markdown;
		}
	};
}
