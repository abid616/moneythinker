import React from 'react'
import Posts from "../../components/articles/posts"
import {fetchAPI} from "../../lib/api"
import Container from '../../components/container'
import Seo from "../../components/seo"
import Images from "../../components/image"
const Category = ({ category, categories }) => {
    console.log(category)
    const seo = {
        metaTitle: category.name,
        metaDescription: `All ${category.name} posts`,
    };

    return (
        <Container categories={categories}>
            <Seo seo={seo} />
            <div className="">
                <div className="">
                    <h1>{category.name}</h1>
                    
                    <Posts articles={category.articles} />
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

    return {
        props: { category, categories },
        revalidate: 1,
    }
}

export default Category; 