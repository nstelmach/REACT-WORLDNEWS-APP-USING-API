import Footer from "./Footer";
import Header from "./Header";
import SideMenu from "./SideMenu";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <SideMenu />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
