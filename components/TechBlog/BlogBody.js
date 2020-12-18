import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import Link from "next/link"


const BlogBody = ({ content }) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => {
                const { url, fileName } = node.data.target.fields.file;
                return (
                    <img
                      src={url}
                      alt={fileName}
                      style={{ height: "auto", width: "100%", margin: "1em 0"}}
                    />
                )
            },
            [INLINES.HYPERLINK]: (node) => {
                const { url } = node.data;
                const { value } = node.content[0];
                return (
                    <a target="_blank" rel="noreferrer noopener" href={url}>
                        {value}
                    </a>
                )
            }
        }
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                {documentToReactComponents(content, options)}
                <Link href="/techBlog/">
                    <button
                        className="mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-green-500 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                    >
                        Back To Top
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default BlogBody;