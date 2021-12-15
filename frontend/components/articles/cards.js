import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"

export const HeroCard = ({article}) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
                <div className="object-cover card border-2 md:p-4 md:rounded h-full">
                    {/* Image article.image.width*/}
                    <div>
                        {article.image ? <Images image={article.image} width={400} height={500} /> : null}
                    </div>

                    {/* discription */}
                    <div className="card-body m-auto">
                        <h2 className="text-md card-title h-14 overflow-hidden">{article.title}</h2>
                        <p className="text-sm h-10 md:h-24 sm:h-16 overflow-hidden">{article.description}</p>
                    </div>
                </div>                
            </a>
        </Link>
    )
}
