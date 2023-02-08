const Button = ({title}) => {
    return (
        <div className="p-4 mx-auto mt-3">
            <button className=" bg px-8 py-4 rounded-xl">{title}</button>
        </div>
    )
}

export default Button;