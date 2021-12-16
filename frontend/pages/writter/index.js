import React from 'react'
import {fetchAPI} from '../lib/api'
import Container from '../components/container'
import Seo from '../components/seo'
import {Posts} from '../components/articles/posts'

import Hero from '../components/home/hero'
import Trending from '../components/home/trending'

const Writter = ({ articles, categories, homepage, tags}) => {
  return (
    <Container categories={categories}>
      <Seo seo={homepage.seo}/>
      <Hero articles={articles} />
      <Trending articles={articles} />
      {
        categories.map((item, i) => (
          item.articles.length > 0 ? (<Posts key={i} title={item.name} articles={item.articles}/>) : null
        ))
      }
    </Container>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage, tags] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/tags"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage, tags },
    revalidate: 1,
  };
}

export default Writter;