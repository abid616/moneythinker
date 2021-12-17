import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";

import { fetchAPI } from "../../lib/api";
import Container from "../../components/container";
import Images from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/api";
import History from "./history.js";

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <Container categories={categories}>
      <Seo seo={seo} />
      <div className="flex flex-col md:flex-row">
        <div className="w-12/12 md:w-3/12">
          <div>
            <div className="flex flex-row md:flex-col items-center">
              <div>
                {article.author.picture && (
                  <Images
                    image={article.author.picture}
                    width={300}
                    height={300}
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
                <p>{article.title}</p>
                <p className="bg-green-600 w-16 py-1 px-2 cursor-pointer border-2 rounded-full">Follow</p>
                {/*<p>
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                </p>*/}
              </div>
              {/*<div>
                  <ReactMarkdown source={article.content} escapeHtml={false} />                    
              </div>*/}
            </div>
          </div>
        </div>
        <div className="w-12/12 md:w-9/12">
          <h1 className="font-extrabold text-4xl">{article.title}</h1>

          <div className="flex justify-start mt-4 items-center">
            <p><Moment format="MMMM Do YYYY, h:mm:ss a">{article.published_at}</Moment></p>
            <span className="mx-2 ml-4"><BsTwitter /></span>
            <span className="mx-2"><BsFacebook /></span>
            <span className="mx-2"><BsYoutube /></span>
          </div>

          <div>
            <div className="mt-4">
              <Images image={article.image} width={1080} height={810} />
            </div>
            <p className="mt-4 text-center text-gray-400">{article.description}</p>
          </div>
          <p className="mt-2 font-semibold">{article.content}</p>

          <div className="mt-8 inline-flex flex-col">
            <div className="mt-8 inline-flex p-4 items-center w-auto border-2">
              <img className="mx-4" src="/product.png" />
              <img className="mx-4" src="/amazon.png" />
              <p className="mx-4">£200</p>
              <p className="bg-green-600 h-10 mx-4 w-24 py-1 px-2 cursor-pointer border-2 rounded-full">View now</p>
            </div>
            <div className="mt-8 inline-flex p-4 items-center w-auto border-2">
              <img className="mx-4" src="/product.png" />
              <img className="mx-4" src="/amazon.png" />
              <p className="mx-4">£200</p>
              <p className="bg-green-600 h-10 mx-4 w-24 py-1 px-2 cursor-pointer border-2 rounded-full">View now</p>
            </div>
            <div className="mt-8 inline-flex p-4 items-center w-auto border-2">
              <img className="mx-4" src="/product.png" />
              <img className="mx-4" src="/amazon.png" />
              <p className="mx-4">£200</p>
              <p className="bg-green-600 h-10 mx-4 w-24 py-1 px-2 cursor-pointer border-2 rounded-full">View now</p>
            </div>
          </div>

          <p className="mt-4 text-2xl">Releated Topics</p>
          <div className="mt-4 inline-flex">
            <div className="mr-4 inline-flex p-2 items-center w-auto border-2">
              <p className="mx-4 px-2">Tags</p>
            </div>
            <div className="mr-4 inline-flex p-2 items-center w-auto border-2">
              <p className="mx-4 px-2">Tags</p>
            </div>
            <div className="mr-4 inline-flex p-2 items-center w-auto border-2">
              <p className="mx-4 px-2">Tags</p>
            </div>
          </div>

          <p className="mt-4 text-2xl">More on this story</p>
          <div className="mt-4 inline-flex flex-col">
            <History article={article} />
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
    const articles = await fetchAPI(`/articles?slug=${params.slug}`)
    const categories = await fetchAPI("/categories");

    return {
        props: { article: articles[0], categories },
        revalidate: 1,
    };
}

export default Article;
