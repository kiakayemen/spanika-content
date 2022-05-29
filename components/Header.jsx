import styles from '../styles/Header.module.css'
import Link from "next/dist/client/link"
const Header = () => {
  return (
	  <header className={styles.header}>
		  <div className={styles.logo}>
			  <Link href='/'>
				  <img src="asset2.png" alt="logo" width="150px"/>
			  </Link>
		  </div>
		  <div className={styles.menu}>
			  <ul>
				<li>
						<Link href='/about'><a>درباره ما</a></Link>
				</li>
				<li>
						<Link href='/contact'><a>تماس با ما</a></Link>
				</li>
				<li>
						<Link href='/blogs'><a>بلاگ</a></Link>
				</li>
			  </ul>	  
		  </div>
	  </header>
  )
}

export default Header