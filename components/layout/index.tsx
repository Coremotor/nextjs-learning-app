import React, {FC} from "react";
import Link from "next/link";
import {useRouter} from 'next/router'
import styles from './layout.module.css'
import {routes} from "../../routes";
import cn from 'classnames'

const Layout: FC = ({children}) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>Learn NextJs</span>
        <nav className={styles.nav}>
          <Link href={routes.home}>
            <a className={cn(styles.link, {
              [styles.activeLink]: router.asPath === routes.home,
            })}>12 random photo in Unsplash.com</a>
          </Link>
          <Link href={routes.posts}>
            <a className={cn(styles.link, {
              [styles.activeLink]: router.asPath === routes.posts,
            })}>Posts from https://jsonplaceholder.typicode.com</a>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        Footer
      </footer>
    </div>
  )
}

export default Layout