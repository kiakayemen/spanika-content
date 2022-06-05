import Link from "next/dist/client/link"
import styles from "../styles/BlogSidebar.module.css"

const BlogSidebar = () => {


  return (
	  <aside className={styles.container}>
		  <h5 className={styles.heading}>‌بلاگ‌ها</h5>
		  <Link href="/blogs/deleVsSiele"><a className={styles.link}>مقایسه DELE و SIELE آزمون های بین المللی زبان اسپانیایی</a></Link>
		  <br />
		  <Link href="/blogs/deleIntro"><a className={styles.link}>معرفی 	آزمون زبان اسپانیایی DELE</a></Link>
		  <br />
		  <Link href="/blogs/sieleIntro"><a className={styles.link}>معرفی آزمون زبان اسپانیایی SIELE</a></Link>
		  <br />
		  <Link href="/blogs/selfEvaluation"><a className={styles.link}>چگونه سطح زبان اسپانیایی خود را ارزیابی کنیم؟</a></Link>
		  <br />
		  <Link href="/blogs/10ReasonsWhy"><a className={styles.link}>10 دلیل برای یادگیری زبان اسپانیایی</a></Link>
	  </aside>
  )
}

export default BlogSidebar