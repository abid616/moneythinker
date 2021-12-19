import React, { useEffect, useState } from 'react'
import {CategoryCard} from './card'
import { v1 as uuidv1 } from 'uuid';

export const Posts = ({ title, articles}) => {
    const [latestPosts, setLatestPosts] = useState([])
    const [disaplayPosts, setDisaplayPosts] = useState([])
    const [pagenum, setPagenum] = useState(0);
    const [pagecount, setPagecount] = useState(0);
    const [pagearray, setPagearray] = useState([]);
    
    useEffect(() => {
        setLatestPosts(articles)
        setPagecount(Math.ceil(articles.length / 3))
        let page = [];

        for(var i = 1; i <= pagecount; i++) {
            page.push(i);
        }

        setPagearray(page);
        setDisaplayPosts(articles.slice(0, 3))
    }, [articles, pagecount])

    const pagination = (num) => {
        setPagenum(num)

        let display = latestPosts.slice((num-1)*3, num*3);

        setDisaplayPosts(display)
    }

    return (        
        <div className='mt-8'>
            <div>
                <div className="card-title sm:p-0 px-2 capitalize">{title}</div>
                <div className="md:w-3/5 xs:w-4/5 mx-auto sm:px-10 px-2">
                    {disaplayPosts.map((article) => {
                        return (
                            <CategoryCard article={article} key={`article__${article.slug}`} />
                        );
                    })}
                    <div className="flex items-center space-x-1">
                        <p href="#" className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md cursor-pointer" onClick={() => pagination(pagenum == 1 ? 1 : pagenum - 1 )}>
                            Previous
                        </p>

                        {
                            pagearray.map((item) => (
                                <p href="#" className={`px-4 py-2 text-gray-700 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer ${pagenum == item ? 'bg-blue-400' : 'bg-gray-200'}`} key={item} onClick={() => pagination(item)}>
                                    {item}
                                </p>
                            ))
                        }
                        <p href="#" className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer" onClick={() => pagination(pagenum == pagecount ? pagecount : pagenum + 1)}>
                            Next
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Posts