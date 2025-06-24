<script lang="ts">
	import '../app.css';
	import { mode, ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip';

	const darkCss =
		'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-dark.css';
	const lightCss =
		'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-light.css';

	let { children } = $props();
	let link: HTMLLinkElement;

	$effect(() => {
		if (link) link.remove();

		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = mode.current === 'dark' ? darkCss : lightCss;
		document.head.appendChild(link);

		return () => {
			if (link) link.remove();
		};
	});
</script>

<ModeWatcher />
<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>
