const Card = ({name, image, link}) => {
    return (
        <a className="w-[20%] h-[22rem] bg-[#79f986] justify-center rounded-xl border-[#b5b5b5] border-[1px] shadow-xl md:w-full" href={`/Detail/${link}`}>
            <div className="flex flex-col gap-4 px-8 py-4" >
                <img className=" w-[90%] h-[15rem] mx-auto rounded-lg" src={image} alt="ini gambar" />
                <h3>{name}</h3>
            </div>
        </a>
    )
}

export default Card;