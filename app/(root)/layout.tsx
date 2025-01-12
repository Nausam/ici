import Dhn_Nav from "@/components/Dhivehi/Dh_Nav";
import Dh_Navbar from "@/components/Dhivehi/Dh_Navbar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full h-screen flex-col" suppressHydrationWarning>
      {/* <Dh_Navbar /> */}
      <Dhn_Nav />
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default Layout;
