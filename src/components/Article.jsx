import ReactMarkdown from 'react-markdown'
import hljs from "highlight.js"
import { useEffect } from 'react'
import { Box, Heading, Text } from '@chakra-ui/layout'

const Article = ({ markdown }) => {

	useEffect(() => {
		hljs.highlightAll()
	}, [markdown])

	return (
		<Box as="section"
			m="16"
			w="46vw"
		>
			<ReactMarkdown
				children={markdown}
				components={{
					h1: ({ ...props }) => <Heading as="h1" fontSize="4xl" my="16" {...props} />,
					h2: ({ ...props }) => <Heading as="h2" fontSize="3xl" my="12" {...props} />,
					h3: ({ ...props }) => <Heading as="h3" fontSize="2xl" my="8" {...props} />,
					h4: ({ ...props }) => <Heading as="h4" fontSize="lg" my="4" {...props} />,
					p: ({ ...props }) => <Text my="2" className="my-4" {...props} />,
					code: ({ ...props }) => <code className="bg-neutral-200 px-1 font-mono text-sm" {...props} />,
				}}
			/>
		</Box>
	)
}

export default Article;
