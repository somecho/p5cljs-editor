import ReactMarkdown from 'react-markdown'
import hljs from "highlight.js"
import { useEffect } from 'react'

const Article = ({ markdown }) => {

	useEffect(() => {
		hljs.highlightAll()
	}, [])

	return (
		<section className="m-12 w-[40vw]">
			<ReactMarkdown
				children={markdown}
				components={{
					h1: ({ ...props }) => <h1 className="font-bold text-4xl my-8" {...props} />,
					h2: ({ ...props }) => <h1 className="font-bold text-2xl mt-6" {...props} />,
					h3: ({ ...props }) => <h3 className="font-bold text-xl mt-6" {...props} />,
					p: ({ ...props }) => <p className="my-4" {...props} />
				}}
			/>
		</section>
	)
}

export default Article;
