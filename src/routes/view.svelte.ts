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
					// text = update.state.doc.toString();
					debounce(text);
				}
			})
		]
	});

	return {
		get state() {
			return view.state;
		}
	};
}
