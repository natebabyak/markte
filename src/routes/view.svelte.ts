import { basicSetup, EditorView } from 'codemirror';
import { createTheme } from './theme.svelte';
import { EditorSelection } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown';
import { redo, undo } from '@codemirror/commands';

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
			theme.compartment,
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
		},
		upload() {},
		undo() {
			undo(view);
		},
		redo() {
			redo(view);
		},
		bold() {
			view.dispatch(
				view.state.changeByRange((range) => ({
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
					range: EditorSelection.range(range.from, range.to + 4)
				}))
			);
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
		},
		insertOrderedList() {
			view.dispatch(
				view.state.changeByRange((range) => ({
					changes: [
						{
							from: view.state.doc.lineAt(range.to).from,
							insert: '1. '
						}
					],
					range: EditorSelection.range(range.from + 2, range.to + 2)
				}))
			);

			view.focus();
		},
		insertUnorderedList() {
			view.dispatch(
				view.state.changeByRange((range) => ({
					changes: [
						{
							from: view.state.doc.lineAt(range.to).from,
							insert: '* '
						}
					],
					range: EditorSelection.range(range.from + 2, range.to + 2)
				}))
			);

			view.focus();
		},
		insertTaskList() {
			view.dispatch(
				view.state.changeByRange((range) => ({
					changes: [
						{
							from: range.from,
							insert: '* '
						}
					],
					range: EditorSelection.range(range.from + 2, range.to + 2)
				}))
			);

			view.focus();
		},
		download() {
			const blob = new Blob([text], { type: 'text/markdown' });
			const url = URL.createObjectURL(blob);

			const a = document.createElement('a');
			a.href = url;
			a.download = 'README.md';
			a.click();

			URL.revokeObjectURL(url);
		}
	};
}

export type View = ReturnType<typeof createView>;
