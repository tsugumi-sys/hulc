

const PageHeader = () => {
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 pb-0 mt-24">
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        HULC Tech Blog
                    </h3>
                    <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                        このブログはHULC（北大ローコード）のテックブログです。JavaScriptフレームワーク（Next.js, React.js e.t.c）や
                        Firebase, Vercel, AWSなどのLow-codeサービス、大学研究に使うPythonについての内容です。
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PageHeader;