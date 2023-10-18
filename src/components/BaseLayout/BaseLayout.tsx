import Confing from "../../config/Confing";
import Footer from "../Footer";
import Navbar from "../Navbar";

export type BaseLayoutProps = {
  children: React.ReactNode;
};
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Confing>
        <Navbar />
        {children}
        <Footer />
      </Confing>
    </>
  );
}
