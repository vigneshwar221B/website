import { FC } from "react";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";

const Layout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
