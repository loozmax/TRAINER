import CodeMirror from '@uiw/react-codemirror'
import { java } from '@codemirror/lang-java'
import { githubLight } from '@uiw/codemirror-theme-github'
import { EditorView } from '@codemirror/view'

// Лёгкая обёртка над CodeMirror 6 с подсветкой Java и светлой темой.
const transparentTheme = EditorView.theme({
  '&': { backgroundColor: 'transparent', height: '100%' },
  '.cm-gutters': { backgroundColor: 'transparent' },
  '.cm-content': { padding: '14px 0' },
  '.cm-activeLine': { backgroundColor: 'rgba(99,102,241,0.07)' },
  '.cm-activeLineGutter': { backgroundColor: 'transparent' }
})

export default function CodeEditor({ value, onChange, readOnly = false }) {
  return (
    <CodeMirror
      value={value}
      onChange={onChange}
      theme={githubLight}
      readOnly={readOnly}
      extensions={[java(), transparentTheme, EditorView.lineWrapping]}
      basicSetup={{
        lineNumbers: true,
        highlightActiveLine: true,
        highlightActiveLineGutter: true,
        bracketMatching: true,
        closeBrackets: true,
        autocompletion: true,
        indentOnInput: true,
        tabSize: 4
      }}
      style={{ height: '100%' }}
    />
  )
}
