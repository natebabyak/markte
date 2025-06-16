import { basicSetup, EditorView } from 'codemirror';
import { markdown } from '@codemirror/lang-markdown';

const KEY = 'text';

export function createView() {
	const text = $state(localStorage.getItem(KEY) ?? '');
	let timer: number;

	function debounce(newText: string) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			localStorage.setItem(newText, KEY);
		}, 1_000);
	}

	const view = new EditorView({
		doc: text,
		extensions: [
			basicSetup,
			EditorView.lineWrapping,
			markdown(),
			EditorView.updateListener.of((update) => {
				if (update.docChanged) {
					debounce(update.state.doc.toString());
				}
			})
		]
	});

	return {
		get text() {
			return view.state.doc.toString();
		},
		get view() {
			return view;
		}
	};
}

export type View = {
	readonly text: string;
	readonly view: EditorView;
};
