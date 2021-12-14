import React, { useEffect, useState } from 'react'
import {HeroCard} from './cards'
import { v1 as uuidv1 } from 'uuid';

export const Posts = ({ title, articles, categories}) => {
    const [latestPosts, setLatestPosts] = useState([])
    useEffect(() => {
        setLatestPosts(articles.slice(4, 8))
    }, [articles])

    return (        
        <div className='mt-8'>
            <div>
                <div className="card-title sm:p-0 px-2">{title}</div>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 sm:p-0 px-2">
                    {latestPosts.map((article) => {
                        return (
                            <HeroCard article={article} key={`article__${article.slug}`} />
                        );
                    })}
                </div>
            </div>  
        </div>
    )
}

export default Posts