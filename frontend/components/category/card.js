import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import { BsShare } from "react-icons/bs";
import Moment from "react-moment";
import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

export const CategoryCard = ({article}) => {
    let published_at = new Date(article.published_at);
    let current = new Date();
    let hour = Math.ceil((current - published_at)/3600000);
    let day = Math.ceil(hour/24);
    let month = Math.ceil(day/30);
    let year = Math.ceil(day/365);

    return (
        <div className="object-cover flex flex-row card border-2 md:p-4 md:rounded h-full mb-2">
            {/* Image article.image.width*/}
            <Link as={`/article/${article.slug}`} href="/article/[id]">
                <a>
                    <div>
                        {article.image ? <Images image={article.image} width={300} height={300} /> : null}
                    </div>
                </a>
            </Link>

            {/* discription */}
            <div className="card-body m-auto px-8 w-full">
                <Link as={`/article/${article.slug}`} href="/article/[id]">
                    <a>
                        <h2 className="text-sm text-left sm:text-lg card-title h-5 sm:h-8 whitespace-nowrap whitespace-normal text-ellipsis overflow-hidden text-center sm:text-left mb-1 sm:mb-2">{article.title}</h2>
                    </a>
                </Link>
                <p className="text-sm h-0 sm:h-16 xs:w-full w-6/12 overflow-hidden">{article.description}</p>
                <div className="flex justify-start mt-4 items-center">
                    <p><Moment format="MMMM Do YYYY, h:mm:ss a">{article.published_at}</Moment></p>
                    <span className="mx-2 ml-4"><BsTwitter /></span>
                    <span className="mx-2"><BsFacebook /></span>
                    <span className="mx-2"><BsYoutube /></span>
                </div>
                <div className="flex flex-col sm:flex-row  xs:w-full w-6/12  justify-between mt-1 sm:mt-2 items-center">
                    <Link as={`/writter/${article.author.id}`} href="/writter/[id]">
                        <a>
                            <h2 className="text-xm sm:text-sm font-normal hover:underline ">By {article.author.name}</h2>
                        </a>
                    </Link>

                    <span className="text-xm sm:text-sm sm:mt-0 mt-1 
                    text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200
                    ">{
                        hour < 24 ? `${hour} h ago` : 
                            day < 30 ?  `${day} day ago` :
                                month < 12 ? `${month} month ago`:
                                    `${year} year ago`
                    }</span>

                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <BsShare/>
                    </span>

                </div>
            </div>
        </div>
    )
}