import { onMount } from 'svelte';

const KEY = 'markdown';

export function createMarkdown() {
	let markdown: string = $state('');
	let timer: number;

	function debounce(newMarkdown: string) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			localStorage.setItem(newMarkdown, KEY);
		}, 1_000);
	}

	onMount(() => {
		markdown = localStorage.getItem(KEY) ?? '';
	});

	return {
		get markdown() {
			return markdown;
		},
		set markdown(newMarkdown: string) {
			markdown = newMarkdown;
			debounce(newMarkdown);
		}
	};
}
