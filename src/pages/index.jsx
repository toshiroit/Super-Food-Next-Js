import Head from "next/head";
import Banner from "../common/Components/Banner/Banner";
import ProductTopMenu from "../common/Components/Product/ProductTopMenu";
import ProductIdx from "../common/Components/Product/ProductIdx";
import Trademark from "../common/Components/Trademark/Trademark";
import RouterLink from "../common/constants/RouterLink";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await axios
        .get("https://62f0bc86e2bca93cd23bd902.mockapi.io/api/product/product")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return err;
        });
      setProduct(data);
    };
    fetchProduct();
  }, []);
  return (
    <>
      <Head>
        {" "}
        <title> Trang chủ </title>{" "}
      </Head>
      <div className="bodyIdx">
        <div className="container">
          <Banner />
          <div className="main">
            <div className="main__wp1">
              <ProductTopMenu />
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <ProductIdx products={product} />
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <ProductIdx />
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <ProductIdx />
            </div>
          </div>
          <div className="main">
            <div className="main__wp1">
              <ProductIdx />
            </div>
          </div>
          <Trademark />
        </div>
      </div>
    </>
  );
}
