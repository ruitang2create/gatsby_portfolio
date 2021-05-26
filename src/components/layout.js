import * as React from "react"
import Header from "./Header"
import Footer from './Footer';
import { GlobalStyle } from "./styles/GlobalStyles";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
