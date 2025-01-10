import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full h-screen flex-col">
      <section className="flex-1">{children}</section>
    </main>
  );
};

export default Layout;
