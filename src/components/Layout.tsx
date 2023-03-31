import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

const footerHeight = "58px";
const headerHeight = "70px";

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-vh-100">
      <Header />
      <div
        className="d-flex justify-content-center"
        style={{ height: `calc(100vh - ${footerHeight} - ${headerHeight})` }}
      >
        <SideMenu />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
