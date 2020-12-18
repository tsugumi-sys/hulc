import { makeStyles } from "@material-ui/core/styles"
import moment from "moment"


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: "3em",
        height: "3em",
        boxShadow: "0px 0px 10px 1px #b2b2b28f",
    },
    root: {
        maxWidth: "800px",
    }
}))

const BlogHeader = ({
    title,
    subTitle,
    authorName,
    authorImage,
    date,
    coverImage
}) => {
    return (
        <div className="max-w-screen-xl mx-auto lg:mt-24 mt-14">
            <main>
                <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10"
                      style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
                    <img src={coverImage} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            {title}
                        </h2>
                        <h4 className="text-2xl text-gray-100 leading-tight">
                            {subTitle}
                        </h4>
                        <div className="flex mt-3">
                            <img src={authorImage} className="h-10 w-10 rounded-full mr-2 object-cover" />
                            <div>
                                <p className="font-semibold text-gray-400 text-sm">{authorName}</p>
                                <p className="font-semibold text-gray-200 text-xs">{moment(date).format("MMMM Do YYYY")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default BlogHeader;