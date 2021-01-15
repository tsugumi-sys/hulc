import Link from "next/link"
import moment from "moment"

export default function Post({
    title,
    subtitle,
    authorName,
    authorImage,
    slug,
    date,
    coverImage,
}) {
    return (
        <Link href={`/techBlog/posts/[slug]`} as={`/techBlog/posts/${slug}`}>
          <a>
            <article className="overflow-hidden rounded-lg shadow-lg hover:shadow-mui">
                <img alt="Placeholder" className="block h-72 w-full object-cover" src={coverImage} />
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-base">
                            {title.length > 15 ? title.substr(0, 14) + "..." : title}
                    </h1>
                    <p className="text-grey-darker text-sm">
                        
                        {moment(date).format("MM/DD/YYYY")}
                    </p>
                </header>
                <p className="w-full px-4 text-left text-sm">{subtitle.length > 23 ? subtitle.substr(0, 22) + "..." : subtitle}</p>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <img alt="Placeholder" className="block rounded-full w-12 h-12 object-cover" src={authorImage} />
                    <p className="ml-2 text-sm">
                        {authorName}
                    </p>
                </footer>

            </article>
          </a>
        </Link>
    )
}