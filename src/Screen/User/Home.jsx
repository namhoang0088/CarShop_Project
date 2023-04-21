import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Slide from "../../component/Slide";
import TopProduct from "../../component/Home/TopProduct";
import News from "../../component/Home/News";
export default function Home() {
  return (
    <div className="Body">
    <Header />
    <Slide />
    <TopProduct />
    <News />
    <Footer />
    </div>
  );
}