<script lang="ts">
	import '../app.css';
	import { mode, ModeWatcher } from 'mode-watcher';
	import * as Tooltip from '$lib/components/ui/tooltip';

	let { children } = $props();
	let link: HTMLLinkElement;

	$effect(() => {
		if (link) {
			link.remove();
		}

		link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = `/node_modules/github-markdown-css/github-markdown-${mode.current}.css`;
		document.head.appendChild(link);

		return () => {
			if (link) {
				link.remove();
			}
		};
	});
</script>

<ModeWatcher />
<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>
