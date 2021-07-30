import React from "react";
import Layout from "../../components/layout";
import {GetServerSideProps} from "next";
import Link from "next/link";
import {routes} from "../../routes";
import styles from './posts.module.css'

type TProps = {
  post: TPost
}

type TPost = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Post(props: TProps) {
  return (
    <Layout>
      <Link href={routes.posts}>
        <a className={styles.back}>Back</a>
      </Link>
      <div className={styles.postWrapper}>
        <div>
          <strong>Post id:{' '}</strong>
          {props.post.id}
        </div>
        <div>
          <strong>Post Title:{' '}</strong>
          {props.post.title}
        </div>
        <div>
          <strong>Post Text:{' '}</strong>
          {props.post.body}
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params?.id}`)
  const post = await response.json()

  return {
    props: {
      post
    }
  }
}