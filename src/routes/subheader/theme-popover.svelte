<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Check from '@lucide/svelte/icons/check';
	import { cn } from '$lib/utils';
	import * as Command from '$lib/components/ui/command';
	import Palette from '@lucide/svelte/icons/palette';
	import * as Popover from '$lib/components/ui/popover';
	import { type Theme, themes } from '../view.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	const { changeTheme, themeId }: { changeTheme: (newThemeId: string) => void; themeId: string } =
		$props();

	const darkThemes = themes.filter((t) => t.type === 'dark');
	const lightThemes = themes.filter((t) => t.type === 'light');
</script>

{#snippet item(theme: Theme)}
	<Command.Item onclick={() => changeTheme(theme.id)} class="cursor-pointer">
		<Check class={cn('size-4', theme.id !== themeId && 'text-transparent')} />
		{theme.name}
	</Command.Item>
{/snippet}

<Popover.Root>
	<Popover.Trigger>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<Button size="icon" variant="ghost" class="cursor-pointer">
					<Palette class="size-4" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>Change Theme</Tooltip.Content>
		</Tooltip.Root>
	</Popover.Trigger>
	<Popover.Content>
		<Command.Root>
			<Command.Input placeholder="Search theme..." />
			<Command.List class="select-none">
				<Command.Empty>No theme found.</Command.Empty>
				<Command.Group heading="Dark Themes">
					{#each darkThemes as theme}
						{@render item(theme)}
					{/each}
				</Command.Group>
				<Command.Group heading="Light Themes">
					{#each lightThemes as theme}
						{@render item(theme)}
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
