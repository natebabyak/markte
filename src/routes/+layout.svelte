<script lang="ts">
	import '../app.css';
	import { mode, ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import darkCss from 'github-markdown-css/github-markdown-dark.css?url';
	import lightCss from 'github-markdown-css/github-markdown-light.css?url';

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
