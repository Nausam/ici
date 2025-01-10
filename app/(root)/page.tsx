"use client";

import Dh_Home from "@/components/Dhivehi/Dh_Home";
import Dh_Navbar from "@/components/Dhivehi/Dh_Navbar";
import En_Home from "@/components/English/En_Home";
import En_Navbar from "@/components/English/En_Navbar";
import En_Services from "@/components/English/En_Services";

export default function Home() {
  return (
    <>
      {/* <En_Navbar /> */}
      <Dh_Navbar />
      {/* <En_Home /> */}
      <Dh_Home />
      <En_Services />
    </>
  );
}
