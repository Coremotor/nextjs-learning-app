import Head from 'next/head'
import React from "react";
import Layout from "../../components/layout";
import styles from './posts.module.css'

type TProps = {
  posts: TPost[]
}

type TPost = {
  userId: number
  id: number
  title: string
  body: string
}

const Posts = (props: TProps) => {
  return (
    <>
      <Head>
        <title>Posts from https://jsonplaceholder.typicode.com</title>
      </Head>

      <Layout>
        <h1>Posts</h1>
        <ul>
          {props.posts.map((p: TPost) => (
            <li className={styles.listItem} key={p.id}>
              <h4 className={styles.postTitle}>Post title: {p.title}</h4>
              <span className={styles.postId}>Post id: {p.id}</span>
              <span className={styles.postText}>Post text: {p.body}</span>
            </li>
          ))}
        </ul>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Posts