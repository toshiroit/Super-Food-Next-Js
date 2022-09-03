import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCode } from "../../redux/features/product/productThunks";
import { selectProductsState } from "../../redux/features/products/productsSelector";
import { fetchProducts } from "../../redux/features/products/productsThunks";
import Banner from "../Banner/Banner";
import ProductIdx from "../Product/ProductIdx";
import ProductTopMenu from "../Product/ProductTopMenu";
import Trademark from "../Trademark/Trademark";

export default function Home() {
  const dispatch = useDispatch()
  //const [product, setProduct] = useState([]);
  const products = useSelector(selectProductsState)
  useEffect(() => {
    dispatch(fetchProducts(1))
    {
      /* 
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
      */
    }

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
            <ProductIdx products={products} size={6} />
          </div>
        </div>
        <div className="main">
          <div className="main__wp1">
            <ProductIdx products={products} size={6} />
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
