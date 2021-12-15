import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"

import {CollectionCards} from "./collectionCards"

import { BsPen } from "react-icons/bs";
import { BsShare } from "react-icons/bs";


export const HeroCard = ({article}) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <div className="p-4 sm:w-1/2 lg:w-1/4">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden border-2 md:p-4 md:rounded">
                    {/* Image article.image.width*/}
                    {/* <Link as={`/article/${article.slug}`} href="/article/[id]"> */}
                    <div>
                        <Images image={article.image}/>
                    </div>

                    {/* discription */}
                    {/* need to use the smartTrim with ... at the end. don't know How to use that */}
                    <div className="">
                        <h2 className="text-xl cursor-pointer font-semibold mb-3 hover:underline hover:text-gray ">{article.title}</h2>
                    </div>
                    {/* </Link> */}
                    {/* Call to action section */}
                    <div class="flex items-center flex-wrap ">
                        {/* <a class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">Read More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a> */}
                        <span
                            class=" cursor-pointer text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <BsPen/>
                            {article.author.name}
                        </span>
                        <span class="cursor-pointer text-gray-400 inline-flex items-center leading-none text-sm">
                            <BsShare/>
                        </span>
                    </div>
                </div>                
            </div>
        </Link>
    )
}

export const CardPreview = ({ name, articles }) => (
    <div className=''>
        <h1 className='font-bold'>{name.toUpperCase()}</h1>
        <div className=''>
            {articles
                // .filter((article, idx) => idx < 4)
                .map(({ id, ...otherArticleProps }) => (
                    <CollectionCards key={id} {...otherArticleProps} />
                ))}
        </div>
    </div>
);