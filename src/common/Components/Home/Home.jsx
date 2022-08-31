import axios from "axios";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ProductIdx from "../Product/ProductIdx";
import ProductTopMenu from "../Product/ProductTopMenu";
import Trademark from "../Trademark/Trademark";

export default function Home() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await axios
        .get("https://62f0bc86e2bca93cd23bd902.mockapi.io/api/product/product")
        .then((res) => {
          return setProduct(res.data);
        })
        .catch((err) => {
          console.log(err)
          return err.message;
        });

    };
    fetchProduct();
  }, []);
  return (
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
            <ProductIdx products={product} size={6} />
          </div>
        </div>
        <div className="main">
          <div className="main__wp1">
            <ProductIdx products={product} size={6} />
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
  );
}
