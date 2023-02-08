const Content = ({title, children, image}) => {

    return (
        <div className="flex justify-center flex-col mx-auto px-4 py-4 md:w-[100%] md:text-base"> 
                        <img className="w-[30%] h-[350px] mx-auto py-5 md:w-full " src={image} alt="" />
                        <div className="px-10 mx-16 py-8 justify-center border-[3px] bg-[#99ffa3] text-justify md:w-full md:mx-0 md:px-4">
                                <h1 className=" text-center font-bold mb-3">{title}</h1>
                                {children}
                            </div>
                    </div>
    )

}

export default Content;
