import React,{useState} from 'react'
import Images from "../image"
import Link from "next/link"
import {smartTrim} from "../../lib/blog"

export const HeroCard = ({article}) => {
    return (
        <Link as={`/article/${article.slug}`} href="/article/[id]">
            <a>
                <div className="object-cover card border-2 md:p-4 md:rounded">
                    {/* Image article.image.width*/}
                    <div>
                        <Images image={article.image} width={400} height={500} />
                    </div>

                    {/* discription */}
                    <div className="card-body">
                        <h2 className="text-md card-title h-14 overflow-hidden">{article.title}</h2>
                        <p className="text-sm h-10 md:h-24 sm:h-16 overflow-hidden">{article.description}</p>
                    </div>
                </div>                
            </a>
        </Link>
    )
}
