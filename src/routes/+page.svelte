<script lang="ts">
	import { createView } from './view.svelte';
	import Header from './header/header.svelte';
	import Main from './main/main.svelte';
	import Subheader from './subheader/subheader.svelte';

	const view = createView();
</script>

<div class="flex flex-col">
	<Header />
	<Subheader {view} />
	<Main {view} />
</div>
