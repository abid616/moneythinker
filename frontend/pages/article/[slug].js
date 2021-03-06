import React, { useState, useEffect } from 'react';
import Moment from "react-moment";
import MarkdownIt from "markdown-It"
import { fetchAPI } from "../../lib/api";
import Container from "../../components/container";
import Images from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/api";
import { AddCard, HeroCard, HistoryCard, TagButton } from "../../components/articles/cards";
import Link from "next/link"
import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

const Article = ({ article, articles, categories }) => {
  
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  const md = new MarkdownIt();
  const htmlContent = md.render(article.content);

  let morestory = articles.filter(ar => ar.category.id === article.category.id)
  if(morestory.length > 3) {
    morestory = morestory.slice(0, 3)
  }

  // const [related, setRelated] = useState([]);
  // const loadRelated = () => {
  //   fetchAPI(article).then(data => {
  //     if (data.error) {
  //       console.log(data.error);
  //     } else {
  //       setRelated(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   loadRelated();
  // }, []);

  // const showRelatedBlog = () => {
  //   return related.map((blog, i) => (
  //     <div className="col-md-4" key={i}>
  //       <article>
  //         <HeroCard blog={blog} />
  //       </article>
  //     </div>
  //   ));
  // };
console.log(morestory)
  return (
    <Container categories={categories}>
      <Seo seo={seo} />
      <div className="flex flex-col md:flex-row">
        {/*<div className="w-12/12 md:w-3/12">
          
        </div>*/}
        <div className="w-12/12">
          <h1 className="font-extrabold text-4xl">{article.title}</h1>
          <div className="flex justify-start mt-4 items-center">
            <p><Moment format="MMMM Do YYYY, h:mm:ss a">{article.published_at}</Moment></p>
            <span className="mx-2 ml-4"><BsTwitter /></span>
            <span className="mx-2"><BsFacebook /></span>
            <span className="mx-2"><BsYoutube /></span>
          </div>
          <div className="mt-4">
            <div className="flex flex-row items-center">
              <div className="mr-4">
                {article.author.picture && (
                  <Images
                    image={article.author.picture}
                    width={150}
                    height={150}
                    className="rounded-full"
                    style={{
                      position: "static",
                      borderRadius: "50%",
                    }}
                  />
                )}
              </div>
              <div className="ml-4 md:ml-0">
                <p className="font-extrabold">By {article.author.name}</p>
                <div className="flex flex-row items-center">
                  <p className="text-ellipsis overflow-hidden whitespace-nowrap w-40 mr-10">{article.author.discription}</p>
                  <Link as={`/writter/${article.author.id}`} href="/writter/[id]">
                    <a>
                      <div>
                        <p className="bg-green-600 w-16 py-1 px-2 cursor-pointer border-2 rounded-full">Follow</p>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-4">
              <Images image={article.image} width={1700} height={510} />
            </div>
            <p className="mt-4 text-center text-gray-400">{article.description}</p>
          </div>
          <section className="mt-2 font-normal"> 
            <span dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </section>

          <div className="mt-8 inline-flex flex-col">
           {/* <AddCard/> */}
          </div>

          <p className="mt-4 text-2xl">Releated Topics</p>
          <div className="mt-4 inline-flex">
            <TagButton article={article} />
          </div>

          <p className="mt-4 text-2xl">More on this story</p>
          <div className="mt-4 inline-flex flex-col">
            {/* {showRelatedBlog()} */}
            {
              morestory.map((more, i) => <HistoryCard key={i} article={more}/>)
            }
          </div>
        </div>
      </div>
    </Container>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const article = await fetchAPI(`/articles?slug=${params.slug}`)
    const articles = await fetchAPI(`/articles`)
    const categories = await fetchAPI("/categories");

    return {
        props: { article: article[0], categories, articles },
        revalidate: 1,
    };
}

export default Article;
