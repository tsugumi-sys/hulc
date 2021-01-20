

const PageHeader = () => {
    return (
        <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 pb-0 mt-20">
            <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
                <div className="flex flex-col w-full">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                        Free Serveices
                    </h3>
                    <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                        北大ローコードが使用した無料サービスです。簡単なサービスの紹介やそのサービスを使って何を作ったか等を紹介します。
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PageHeader;