import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import { BsShare } from "react-icons/bs";
import Moment from "react-moment";

export const HeroCard = ({article}) => {
    let published_at = new Date(article.published_at);
    let current = new Date();
    let hour = Math.ceil((current - published_at)/3600000);
    let day = Math.ceil(hour/24);
    let month = Math.ceil(day/30);
    let year = Math.ceil(day/365);

    return (
        <div className="object-cover card border-2 md:p-4 md:rounded h-full">
            {/* Image article.image.width*/}
            <Link as={`/article/${article.slug}`} href="/article/[id]">
                <a>
                    <div>
                        {article.image ? <Images image={article.image} width={400} height={200} /> : null}
                    </div>
                </a>
            </Link>

            {/* discription */}
            <div className="card-body m-auto p-0 sm:p-2 w-full">
                <Link as={`/article/${article.slug}`} href="/article/[id]">
                    <a>
                        <h2 className="text-sm text-left sm:text-lg card-title h-5 sm:h-8 whitespace-nowrap whitespace-normal text-ellipsis overflow-hidden text-center sm:text-left mb-1 sm:mb-2">{article.title}</h2>
                    </a>
                </Link>
                {/*<p className="text-sm h-0 sm:h-16 overflow-hidden">{article.description}</p>*/}
                <div className="flex flex-col sm:flex-row justify-between mt-1 sm:mt-2 items-center">
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

export const AddCard =({})=>{
    return(
        <div>
            <div className="mt-8 inline-flex p-4 items-center w-auto border-2">
                <img className="mx-4" src="/product.png" />
                <img className="mx-4" src="/amazon.png" />
                <p className="mx-4">£200</p>
                <p className="bg-green-600 h-10 mx-4 w-24 py-1 px-2 cursor-pointer border-2 rounded-full">View now</p>
            </div>            
        </div>
    )
}

export const HistoryCard = ({ article})=>{
    return(
        <div className="mt-8 inline-flex justify-between p-4 items-center w-auto border-2">
            <div className="flex flex-col">
                <p className="mr-4 text-2xl font-semibold">{article.title}</p>
                <p className="mr-4 text-1xl font-semibold text-gray-500 mt-4">Written By {article.author.name}<span className="mx-2 text-sm font-semibold text-gray-500"><Moment format="MMM Do YYYY">{article.published_at}</Moment></span></p>
                <div className="flex mt-4">
                    {
                        article.tags.map((item, i) => (
                            <div className="mr-4 inline-flex items-center w-auto border-2 rounded-full" key={i}>
                                <p className="mx-4 px-2"> {item.name} </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            {article.image && <Images image={article.image} width={200} height={200} />}
        </div>
    )
}

export const TagButton =({article})=>{
    return (
        article.tags.map((item, i) => (
            <Link href={`/tag/${item.slug}`} key={i}>
                <a>
                    <div className="mr-4 inline-flex p-2 items-center w-auto border-2">
                        <p className="mx-4 px-2">
                            <div>
                                <span> {item.name} </span>
                            </div>
                        </p>
                    </div>
                </a>
            </Link>
        ))  
    )
}