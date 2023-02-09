import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import { useState } from "react";


const Nav = () => {
    const[show, setShow] = useState(false);
    return (
        <>
        <div className="bg-[#9dffa7] flex justify-between px-11 py-auto font-['Castoro'] h-[30%] md:px-4 md:h-16"> 
            <Link to="/"><img src="/img/logo2.png" alt="" className=" max-h-[90px] max-w-[90px] my-auto md:w-[40px] md:h-[40px]" /></Link>
            <GiHamburgerMenu className="lg:hidden my-auto cursor-pointer" size={25} onClick={() => setShow(!show)} />
            <div className="flex justify-around w-[670px] my-auto font-bold text-lg space-x-4 md:hidden">
                <Link to="/" className="mx-7">Beranda</Link>
                <Link to="/Detail" className="mx-7">Cara Penanganan</Link>
                <Link to="/About" className="mx-7">Tentang Web</Link>
            </div>
        </div>
        {
            show &&
            <div className="flex flex-col top-16 bg-transparent left-0 min-w-full gap-3 py-2">
            <Link to="/" className="text-center border-[#208a2a] border-[2px] w-full py-1">Beranda</Link>
            <Link to="/Detail" className="text-center border-[#208a2a] border-[2px] w-full py-1">Cara Penanganan</Link>
            <Link to="/About" className="text-center border-[#208a2a] border-[2px] w-full py-1">Tentang Web</Link>
        </div>
        }
        </>
    )
}

export default Nav;