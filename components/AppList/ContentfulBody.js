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
            [BLOCKS.HEADING_1]: (node) => {
                const { value } = node.content[0];
                return (
                    <h1 className="font-semibold" style={{ fontSize: "1.5rem", marginBottom: "0", marginTop: "2rem" }}>
                        {value}
                    </h1>
                )
            },
            [BLOCKS.PARAGRAPH]: (node) => {
                const { value } = node.content[0];
                var hyperlink = {}
                for (var key of Object.keys(node.content)) {
                    if (node.content[key].nodeType == "hyperlink") {
                        hyperlink[key] = node.content[key]
                    }
                }
                return (
                    <p style={{ marginTop: "1.5rem", marginBottom: "1.5rem"}}>
                        {value} {Object.keys(hyperlink).map(key => {
                            const { value } = hyperlink[key].content[0];
                            const { uri } = hyperlink[key].data;
                            return (
                                <a key={value} target="_blank" rel="noreferrer noopener" className="text-blue-100" href={uri}>
                                    {value}
                                </a>
                            ) 
                        })}
                    </p>
                )
            },
            [INLINES.HYPERLINK]: (node) => {
                const { uri } = node.data;
                const { value } = node.content[0];
                return (
                    <a target="_blank" rel="noreferrer noopener" className="text-blue-100" href={uri}>
                        {value}
                    </a>
                )
            },
        }
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="px-4 lg:px-0 mt-12 mb-4 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                {documentToReactComponents(content, options)}
                <Link href="/appList/">
                    <a>
                        <button
                            className="mr-5 mt-5 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white-500 uppercase transition bg-blue-200 rounded-full shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
                        >
                            Back
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default BlogBody;