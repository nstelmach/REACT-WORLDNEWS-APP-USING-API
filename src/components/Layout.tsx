import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className=" min-vh-100">
      <Header />
      <div
        className="d-flex justify-content-center"
        style={{ height: "calc(100vh - 70px - 58px)" }}
      >
        <SideMenu />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
