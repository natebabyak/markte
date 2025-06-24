import { basicSetup } from 'codemirror';
import { Compartment, type Extension } from '@codemirror/state';
import { EditorSelection } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { markdown } from '@codemirror/lang-markdown';
import { mode } from 'mode-watcher';
import { redo, undo } from '@codemirror/commands';

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
import { EditorView } from 'codemirror';

export type Theme = {
	id: string;
	name: string;
	type: 'dark' | 'light';
	value: Extension;
};

export const themes: Theme[] = [
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
];

export function createView() {
	let text = $state(localStorage.getItem('text') ?? '');

	let themeId = $state(
		localStorage.getItem('theme') ?? (mode.current === 'dark' ? 'githubDark' : 'githubLight')
	);

	const themeCompartment = new Compartment();

	const customKeymap = (view: typeof methods) =>
		keymap.of([
			{
				key: 'mod-Alt-0',
				run: () => {
					view.heading(0);
					return true;
				}
			},
			{
				key: 'mod-Alt-1',
				run: () => {
					view.heading(1);
					return true;
				}
			},
			{
				key: 'mod-Alt-2',
				run: () => {
					view.heading(2);
					return true;
				}
			},
			{
				key: 'mod-Alt-3',
				run: () => {
					view.heading(3);
					return true;
				}
			},
			{
				key: 'mod-Alt-4',
				run: () => {
					view.heading(4);
					return true;
				}
			},
			{
				key: 'mod-Alt-5',
				run: () => {
					view.heading(5);
					return true;
				}
			},
			{
				key: 'mod-Alt-6',
				run: () => {
					view.heading(6);
					return true;
				}
			},
			{
				key: 'mod-b',
				run: () => {
					view.bold();
					return true;
				}
			},
			{
				key: 'mod-i',
				run: () => {
					view.italic();
					return true;
				}
			},
			{
				key: 'mod-k',
				run: () => {
					view.insertLink();
					return true;
				}
			},
			{
				key: 'mod-Shift-7',
				run: () => {
					view.insertOrderedList();
					return true;
				}
			},
			{
				key: 'mod-Shift-8',
				run: () => {
					view.insertUnorderedList();
					return true;
				}
			},
			{
				key: 'mod-Shift-9',
				run: () => {
					view.insertTaskList();
					return true;
				}
			},
			{
				key: 'Alt-Shift-5',
				run: () => {
					view.strikethrough();
					return true;
				}
			}
		]);

	const methods = {
		heading(level: number) {
			view.dispatch(
				view.state.changeByRange((range) => {
					const line = view.state.doc.lineAt(range.from);
					const newText =
						'#'.repeat(level) + (level ? ' ' : '') + line.text.replace(/^(#{1,6})?\s*/, '');

					return {
						changes: {
							from: line.from,
							to: line.to,
							insert: newText
						},
						range: EditorSelection.cursor(line.from + newText.length)
					};
				})
			);

			view.focus();
		},
		bold() {
			view.dispatch(
				view.state.changeByRange((range) => {
					if (range.from >= 2 && range.to <= view.state.doc.length - 2) {
						const c = view.state.sliceDoc(range.from - 2, range.to + 2);

						if (
							(c.startsWith('**') && c.endsWith('**')) ||
							(c.startsWith('__') && c.endsWith('__'))
						) {
							return {
								changes: {
									from: range.from - 2,
									to: range.to + 2,
									insert: c.slice(2, c.length - 2)
								},
								range: EditorSelection.range(range.from - 2, range.to - 2)
							};
						}
					}

					return {
						changes: [
							{
								from: range.from,
								insert: '**'
							},
							{
								from: range.to,
								insert: '**'
							}
						],
						range: EditorSelection.range(range.from + 2, range.to + 2)
					};
				})
			);

			view.focus();
		},
		italic() {
			view.dispatch(
				view.state.changeByRange((range) => {
					if (range.from >= 1 && range.to <= view.state.doc.length - 1) {
						const c = view.state.sliceDoc(range.from - 1, range.to + 1);

						if ((c.startsWith('*') && c.endsWith('*')) || (c.startsWith('_') && c.endsWith('_'))) {
							return {
								changes: {
									from: range.from - 1,
									to: range.to + 1,
									insert: c.slice(1, c.length - 1)
								},
								range: EditorSelection.range(range.from - 1, range.to - 1)
							};
						}
					}

					return {
						changes: [
							{
								from: range.from,
								insert: '*'
							},
							{
								from: range.to,
								insert: '*'
							}
						],
						range: EditorSelection.range(range.from + 1, range.to + 1)
					};
				})
			);

			view.focus();
		},
		strikethrough() {
			view.dispatch(
				view.state.changeByRange((range) => {
					if (range.from >= 2 && range.to <= view.state.doc.length - 2) {
						const c = view.state.sliceDoc(range.from - 2, range.to + 2);

						if (c.startsWith('~~') && c.endsWith('~~')) {
							return {
								changes: {
									from: range.from - 2,
									to: range.to + 2,
									insert: c.slice(2, c.length - 2)
								},
								range: EditorSelection.range(range.from - 2, range.to - 2)
							};
						}
					}

					return {
						changes: [
							{
								from: range.from,
								insert: '~~'
							},
							{
								from: range.to,
								insert: '~~'
							}
						],
						range: EditorSelection.range(range.from + 2, range.to + 2)
					};
				})
			);

			view.focus();
		},
		insertLink() {
			view.dispatch(
				view.state.changeByRange((range) => ({
					changes: [
						{
							from: range.from,
							insert: '['
						},
						{
							from: range.to,
							insert: ']()'
						}
					],
					range: EditorSelection.range(range.from + 1, range.to + 1)
				}))
			);

			view.focus();
		},
		insertImage() {
			view.dispatch(
				view.state.changeByRange((range) => ({
					changes: [
						{
							from: range.from,
							insert: '!['
						},
						{
							from: range.to,
							insert: ']()'
						}
					],
					range: EditorSelection.range(range.from + 2, range.to + 2)
				}))
			);

			view.focus();
		},
		insertTable(rows: number, cols: number) {
			let table = '';

			for (let i = 0; i < rows; i++) {
				table += '|';

				for (let j = 0; j < cols; j++) {
					table += '  |';
				}

				table += '\n';

				if (i === 0) {
					table += '|';

					for (let j = 0; j < cols; j++) {
						table += '--|';
					}

					table += '\n';
				}
			}

			view.dispatch(view.state.replaceSelection(table));

			view.focus();
		},
		insertOrderedList() {
			view.dispatch(
				view.state.changeByRange((range) => {
					const line = view.state.doc.lineAt(range.from);

					if (/^\d+\.\s*/.test(line.text)) {
						const newLine = line.text.replace(/^\d+\.\s*/, '');

						return {
							changes: {
								from: line.from,
								to: line.to,
								insert: newLine
							},
							range: EditorSelection.cursor(line.from + newLine.length)
						};
					}

					return {
						changes: {
							from: view.state.doc.lineAt(range.to).from,
							insert: '1. '
						},
						range: EditorSelection.range(range.from + 3, range.to + 3)
					};
				})
			);

			view.focus();
		},
		insertUnorderedList() {
			view.dispatch(
				view.state.changeByRange((range) => {
					const line = view.state.doc.lineAt(range.from);

					if (/^\*\s*/.test(line.text)) {
						const newLine = line.text.replace(/^\*\s*/, '');

						return {
							changes: {
								from: line.from,
								to: line.to,
								insert: newLine
							},
							range: EditorSelection.cursor(line.from + newLine.length)
						};
					}

					return {
						changes: {
							from: view.state.doc.lineAt(range.to).from,
							insert: '* '
						},
						range: EditorSelection.range(range.from + 2, range.to + 2)
					};
				})
			);

			view.focus();
		},
		insertTaskList() {
			view.dispatch(
				view.state.changeByRange((range) => {
					const line = view.state.doc.lineAt(range.from);

					if (/^-\s*\[(\s|x|X)\]\s*/.test(line.text)) {
						const newLine = line.text.replace(/^-\s*\[(\s|x|X)\]\s*/, '');

						return {
							changes: {
								from: line.from,
								to: line.to,
								insert: newLine
							},
							range: EditorSelection.cursor(line.from + newLine.length)
						};
					}

					return {
						changes: {
							from: view.state.doc.lineAt(range.to).from,
							insert: '- [ ] '
						},
						range: EditorSelection.range(range.from + 6, range.to + 6)
					};
				})
			);

			view.focus();
		}
	};

	const view = new EditorView({
		doc: localStorage.getItem('text') ?? '',
		extensions: [
			basicSetup,
			EditorView.lineWrapping,
			markdown(),
			customKeymap(methods),
			themeCompartment.of([
				themes.find((t) => t.id === themeId)!.value,
				EditorView.theme({
					'.cm-content': {
						paddingBottom: 'calc(100vh - 122px - 1.2rem)'
					}
				})
			]),
			EditorView.updateListener.of((update) => {
				if (update.docChanged) {
					text = update.state.doc.toString();

					localStorage.setItem('text', text);
				}
			})
		]
	});

	return {
		get dom() {
			return view.dom;
		},
		get selection() {
			return view.state.selection.main;
		},
		get text() {
			return text;
		},
		get themeId() {
			return themeId;
		},
		get view() {
			return view;
		},
		upload(text: string) {
			view.dispatch({
				changes: {
					from: 0,
					to: view.state.doc.length,
					insert: text
				}
			});

			view.focus();
		},
		undo() {
			undo(view);
			view.focus();
		},
		redo() {
			redo(view);
			view.focus();
		},
		...methods,
		download() {
			const blob = new Blob([text], { type: 'text/markdown' });
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = 'README.md';
			a.click();

			URL.revokeObjectURL(url);
		},
		changeTheme(newThemeId: string) {
			themeId = newThemeId;
			view.dispatch({
				effects: themeCompartment.reconfigure([
					themes.find((t) => t.id === themeId)!.value,
					EditorView.theme({
						'.cm-content': {
							paddingBottom: 'calc(100vh - 122px - 1.2rem)'
						}
					})
				])
			});
			localStorage.setItem('theme', themeId);
		}
	};
}

export type View = ReturnType<typeof createView>;
