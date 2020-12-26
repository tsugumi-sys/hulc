const Loading = () => (
    <div className="lg:pt-20 gap-6 items-center h-screen w-full bg-black-600 items-center justify-center">
        <div className="mx-auto max-w-screen-sm bg-blue-300 overflow-hidden rounded-xl">
            <div className="flex flex-col md:flex-row">
                <div className="animate-pulse flex-none md:w-56 w-4/5 relative mx-auto">
                    <img src="/assets/happy-new-year.png" />
                </div>
                <div className="flex-auto p-6">
                    <div className="flex flex-wrap">
                    <h1 className="text-white-500 font-bold flex-auto text-xl font-semibold">
                        HAPPY NEW YEAR !!!
                    </h1>
                    
                    <div className="w-full flex-none text-sm font-bold text-white-500 mt-2 text-xl">
                        + 2 <sup className="font-light text-xs">User</sup>
                    </div>
                    </div>
                    <p className="mt-4 text-sm text-white-500">
                      北大ローコード（HULC）は今年の12月12日から活動をスタートしました。
                      ありがたいことに2つの団体、または個人にアプリを使っていただいています。
                      来年もどうぞよろしくお願いいたします。
                      by tsugumi7878
                    </p>
                </div>
            </div>
        </div>
    </div>
);
export default Loading;
