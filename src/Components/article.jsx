const Article = ({ data }) => {
    return (
        <div className="flex flex-col w-[403px] h-auto px-5 py-8 gap-8 bg-white rounded-2xl cursor-pointer box-shadow-white">
            <div className="max-w-[365px] max-h-[365px] object-fill">
                <img src={data.data[0].imgUrl} alt="" className="rounded-md" />
            </div>
            <div className="flex flex-col justify-between h-[265px]">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-3xl font-main">{data.data[0].title}</h3>
                    <p className="text-lg ">{data.data[0].description}</p>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="">
                        <img
                            src={data.data[0].users.profile_photo_url}
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col ">
                        <p>by {data.data[0].users.name} </p>
                        <p className="font-bold text-[#4D4D4D80]">{data.readTime}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
