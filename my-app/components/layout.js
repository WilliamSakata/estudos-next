import styles from './layout.module.css'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'William'
export const siteTitle = 'Next.js Sample Website (not that simple)'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <meta
          name="description"
          content="Learn how to build a personal sie using Next.js"
        />
        <meta 
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle}/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img 
              src="/images/profile.jpeg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            ></img>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpeg"
                  classname={`${styles.headerImage} ${utilStyles.borderCircle}`}  
                  alt={name}
                ></img>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={urilsStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}