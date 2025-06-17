import { basicSetup, EditorView } from 'codemirror';
import { createTheme } from './theme.svelte';
import { markdown } from '@codemirror/lang-markdown';

export function createView() {
	const theme = createTheme();

	const KEY = 'text';

	let text = $state(localStorage.getItem(KEY) ?? '');

	const view = new EditorView({
		doc: localStorage.getItem(KEY) ?? '',
		extensions: [
			basicSetup,
			EditorView.lineWrapping,
			markdown(),
			themeCompartment,
			EditorView.updateListener.of((update) => {
				if (update.docChanged) {
					text = update.state.doc.toString();
					localStorage.setItem(KEY, text);
				}
			})
		]
	});

	return {
		get text() {
			return text;
		},
		get view() {
			return view;
		}
	};
}

export type View = ReturnType<typeof createView>;
