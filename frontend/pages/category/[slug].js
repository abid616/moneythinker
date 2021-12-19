import React from 'react'
import Posts from "../../components/category/posts"
import {fetchAPI} from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"
import Images from "../../components/image"

const Category = ({ category, categories, articles }) => {
    const seo = {
        metaTitle: category.name,
        metaDescription: `All ${category.name} posts`,
    };

    return (
        <Container categories={categories}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1 className="text-2xl">{category.name}</h1>

                    <Posts articles={articles.filter(ar => ar.category.id === category.id)} />
                </div>
            </div>
        </Container>
    );
};

export async function getStaticPaths() {
    const categories = await fetchAPI("/categories");

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0]
    const categories = await fetchAPI("/categories")
    const articles = await fetchAPI("/articles")

    return {
        props: { category, categories, articles },
        revalidate: 1,
    }
}

export default Category; 