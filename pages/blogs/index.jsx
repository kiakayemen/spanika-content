import Link from 'next/link'
import Head from 'next/head'

import Slide from '@mui/material/Slide'
import styles from '../../styles/blogs.module.css'

const Blogs = () => {
  return (
    <>
      <Head>
        <title>تمامی بلاگ‌ها</title>
      </Head>
      <div className={styles.container}>
        <ul>
          <Slide direction="right" timeout={300} in={true} >
            <li>
              <Link href="/blogs/deleVsSiele"><a>مقایسه DELE و SIELE آزمون های بین المللی زبان اسپانیایی</a></Link>
            </li>
          </Slide>

          <Slide direction="right" timeout={600}in={true}>
            <li>
              <Link href="/blogs/deleIntro"><a>معرفی آزمون زبان اسپانیایی DELE</a></Link>
            </li>
          </Slide>
          <Slide direction="right" timeout={900} in={true}>
            <li>
              <Link href="/blogs/sieleIntro"><a>معرفی آزمون زبان اسپانیایی SIELE</a></Link>
            </li>
          </Slide>
          <Slide direction="right" timeout={1200} in={true}>
            <li>
              <Link href="/blogs/selfEvaluation"><a>چگونه سطح زبان اسپانیایی خود را ارزیابی کنیم؟</a></Link>
            </li>
          </Slide>
          <Slide direction="right" timeout={1500} in={true}>
            <li>
              <Link href="/blogs/10ReasonsWhy"><a>10 دلیل برای یادگیری زبان اسپانیایی</a></Link>
            </li>
          </Slide>
        </ul>
      </div>
    </>
  )
}

export default Blogs