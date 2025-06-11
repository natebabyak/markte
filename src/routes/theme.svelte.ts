/* thememirror */
import {
	amy,
	ayuLight,
	barf,
	bespin,
	birdsOfParadise,
	boysAndGirls,
	clouds,
	cobalt,
	coolGlow,
	dracula,
	espresso,
	noctisLilac,
	rosePineDawn,
	smoothy,
	solarizedLight,
	tomorrow
} from 'thememirror';

/* @ddietr/codemirror-themes */
import { aura } from '@ddietr/codemirror-themes/aura';
import { materialDark } from '@ddietr/codemirror-themes/material-dark';
import { materialLight } from '@ddietr/codemirror-themes/material-light';
import { githubDark } from '@ddietr/codemirror-themes/github-dark';
import { githubLight } from '@ddietr/codemirror-themes/github-light';
import { solarizedDark } from '@ddietr/codemirror-themes/solarized-dark';
import { tokyoNight } from '@ddietr/codemirror-themes/tokyo-night';
import { tokyoNightDay } from '@ddietr/codemirror-themes/tokyo-night-day';
import { tokyoNightStorm } from '@ddietr/codemirror-themes/tokyo-night-storm';

/* @codemirror/theme-one-dark */
import { oneDark } from '@codemirror/theme-one-dark';

export const themes = [
	{
		id: 'amy',
		name: 'Amy',
		type: 'dark',
		value: amy
	},
	{
		id: 'aura',
		name: 'Aura',
		type: 'dark',
		value: aura
	},
	{
		id: 'ayuLight',
		name: 'Ayu Light',
		type: 'light',
		value: ayuLight
	},
	{
		id: 'barf',
		name: 'Barf',
		type: 'dark',
		value: barf
	},
	{
		id: 'bespin',
		name: 'Bespin',
		type: 'dark',
		value: bespin
	},
	{
		id: 'birdsOfParadise',
		name: 'Birds of Paradise',
		type: 'dark',
		value: birdsOfParadise
	},
	{
		id: 'boysAndGirls',
		name: 'Boys and Girls',
		type: 'dark',
		value: boysAndGirls
	},
	{
		id: 'clouds',
		name: 'Clouds',
		type: 'light',
		value: clouds
	},
	{
		id: 'cobalt',
		name: 'Cobalt',
		type: 'dark',
		value: cobalt
	},
	{
		id: 'coolGlow',
		name: 'Cool Glow',
		type: 'dark',
		value: coolGlow
	},
	{
		id: 'dracula',
		name: 'Dracula',
		type: 'dark',
		value: dracula
	},
	{
		id: 'espresso',
		name: 'Espresso',
		type: 'light',
		value: espresso
	},
	{
		id: 'githubDark',
		name: 'GitHub Dark',
		type: 'dark',
		value: githubDark
	},
	{
		id: 'githubLight',
		name: 'GitHub Light',
		type: 'light',
		value: githubLight
	},
	{
		id: 'materialDark',
		name: 'Material Dark',
		type: 'dark',
		value: materialDark
	},
	{
		id: 'materialLight',
		name: 'Material Light',
		type: 'light',
		value: materialLight
	},
	{
		id: 'noctisLilac',
		name: 'Noctis Lilac',
		type: 'light',
		value: noctisLilac
	},
	{
		id: 'oneDark',
		name: 'One Dark',
		type: 'dark',
		value: oneDark
	},
	{
		id: 'rosePineDawn',
		name: 'Rosé Pine Dawn',
		type: 'light',
		value: rosePineDawn
	},
	{
		id: 'smoothy',
		name: 'Smoothy',
		type: 'light',
		value: smoothy
	},
	{
		id: 'solarizedDark',
		name: 'Solarized Dark',
		type: 'dark',
		value: solarizedDark
	},
	{
		id: 'solarizedLight',
		name: 'Solarized Light',
		type: 'light',
		value: solarizedLight
	},
	{
		id: 'tokyoNight',
		name: 'Tokyo Night',
		type: 'dark',
		value: tokyoNight
	},
	{
		id: 'tokyoNightDay',
		name: 'Tokyo Night Day',
		type: 'light',
		value: tokyoNightDay
	},
	{
		id: 'tokyoNightStorm',
		name: 'Tokyo Night Storm',
		type: 'dark',
		value: tokyoNightStorm
	},
	{
		id: 'tomorrow',
		name: 'Tomorrow',
		type: 'light',
		value: tomorrow
	}
] as const;

export function createTheme() {
	type Theme = (typeof themes)[number]['id'];

	let theme: Theme = $state('githubDark');

	return {
		get theme() {
			return themes.find((t) => t.id === theme);
		},
		set: (newTheme: Theme) => {
			theme = newTheme;
		}
	};
}
