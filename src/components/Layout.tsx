import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="position-relative min-vh-100">
      <Header />
      <div className="d-flex justify-content-center w-100">
        <SideMenu />
        {children}
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
