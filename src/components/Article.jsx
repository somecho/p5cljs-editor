import ReactMarkdown from 'react-markdown'

const Article = ({ markdown }) => {
	return (
		<section className="m-12 w-[40vw]">
			<ReactMarkdown
				children={markdown}
				components={{
					h1: ({ ...props }) => <h1 className="font-bold text-4xl my-8" {...props} />,
					h3: ({ ...props }) => <h3 className="font-bold text-xl mt-6" {...props} />,
					p: ({ ...props }) => <p className="my-4" {...props} />
				}}
			/>
		</section>
	)
}

export default Article;
