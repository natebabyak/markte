import { basicSetup, EditorView } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';
import { createTheme } from './theme.svelte';

export function createView() {
	const KEY = 'text';

	const theme = createTheme();

	let text = $state(localStorage.getItem(KEY) ?? '');

	const view = new EditorView({
		doc: localStorage.getItem(KEY) ?? '',
		extensions: [
			basicSetup,
			EditorView.lineWrapping,
			markdown(),
			theme.theme,
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
		get dom() {
			return view.dom;
		}
	};
}

export type View = ReturnType<typeof createView>;
