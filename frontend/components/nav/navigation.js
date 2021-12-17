import React,{useState} from 'react';
import Link from "next/link";
import { v1 as uuidv1 } from 'uuid';
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";

export const Navigation = ({categories}) => {
    const [showMenu, setShowMenu] = useState(false)
    const categoryList = () => {
        return(
            <>
                {categories.map((category, i)=>{
                    return(
                        <Link as={`/category/${category.slug}`} key={i} href="/category/[id]">
                            <a key={i.name} className="text-sm md:text-lg uppercase font-bold text-gray-700 px-3 py-2 hover:bg-gray-300 rounded transition-colors duration-300"
                            >
                                {category.name}
                            </a>
                        </Link>
                    )
                })}
            </>
        )
    }

    let menu
    let menuMask

    if(showMenu){
        menu = <div className="fixed bg-white top-14 right-0 w-6/12 h-5/12 z-50 shadow flex flex-col lg:hidden">{categoryList()}</div>

        menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50 lg:hidden" onClick={() => setShowMenu(false)}></div>
    }

    return (
        <nav>
            <div className="hidden lg:block">
                {categoryList()}
            </div>

            {showMenu ? null : <BiMenuAltRight style={{fontSize: '25px'}} className="lg:hidden" onClick={() => setShowMenu(true)} />}
            {showMenu ? <FaTimes style={{fontSize: '25px'}} className="lg:hidden" onClick={() => setShowMenu(false)} /> : null}

            {menuMask}
            {menu}
        </nav>
    )
}
