import Header from "./Header/Header";
import LeftBar from "./LeftBar/LeftBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LeftBar />
      {children}
    </>
  );
};

export default Layout;
