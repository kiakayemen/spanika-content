import Head from "next/head";
import Header from "./Header"
import { Container } from "@mui/material";

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>آموزش زبان اسپانیایی با اسپنیکا - Spanika.uno</title>
			</Head>
			<Container maxWidth="xl" sx={{
				margin: "0 auto",
				width: "100%",
				padding: "7rem 0"
			}}>
			<Header />
				{children}
			</Container>
		</>
	)
}

// luna1 - wallet
// terra1axqav9zh2e0yte5vmrp4tgsrgdww0hegxmgd03

export default Layout;