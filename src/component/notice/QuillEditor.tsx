import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { memo, useMemo } from 'react'

type QuillEditorProps = {
  quillRef: string
  htmlContent: string
  setHtmlContent: string
}

const QuillEditor = memo(({ quillRef, htmlContent, setHtmlContent }: any) => {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['underline', 'strike', 'blockquote'],
          [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }, { align: [] }]
        ]
      }
    }),
    []
  )
  return (
    <>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            quillRef.current = element
          }
        }}
        value={htmlContent}
        onChange={setHtmlContent}
        modules={modules}
        theme="snow"
        style={{ height: '500px', marginBottom: '50px' }}
      />
    </>
  )
})

export default QuillEditor
