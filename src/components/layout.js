import * as React from "react"
import Header from "./Header"
import Footer from './Footer';
import { GlobalStyle } from "./styles/GlobalStyles";
import Sidebar from "./Sidebar";
import GoTopButton from "./GoTopButton";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sidebar />
      <SideMenu />
      <GoTopButton />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
