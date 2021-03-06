import React from 'react'
import {fetchAPI} from '../lib/api'
import Container from '../components/container'
import Seo from '../components/seo'
import {Posts} from '../components/articles/posts'

import Hero from '../components/home/hero'
import Trending from '../components/home/trending'

const Home = ({ articles, categories, homepage, tags, writers}) => {
  return (
    <Container categories={categories}>
      <Seo seo={homepage.seo}/>
      <Hero articles={articles} />
      <Trending articles={articles} />
      {
        categories.filter(ca => ca.name !== 'Consparacy').map((item, i) => (
          item.articles.length > 0 ? (
            <Posts
              key={i}
              title={item.name}
              articles={() => {
                let temp = articles.filter(ar => ar.category.id === item.id)
                if(temp.length > 4) {
                  return temp.slice(0, 4)
                } else {
                  return temp
                }
              }}
              tags={tags}
            />
          ) : null
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
    fetchAPI("/requests"),
    fetchAPI("/homepage"),
    fetchAPI("/writers")
  ]);

  return {
    props: { articles, categories, homepage, tags },
    revalidate: 1,
  };
}

export default Home;