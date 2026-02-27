
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  /** Set to true for pages with dark full-bleed hero sections where nav overlays */
  transparentHeader?: boolean;
}

const Layout = ({ children, transparentHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${transparentHeader ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
