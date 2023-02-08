const Container = ({children, className}) => {
    return (
        <div className={`bg-[#C9FFCE] px-6 pt-8  py-8 flex-col flex text-[18px] font-['Bree Serif'] h-[77%] text-center ${className}`} >
            {children}
        </div>

    )
}

export default Container;