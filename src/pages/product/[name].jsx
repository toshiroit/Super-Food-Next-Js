import ProductDetail from "../../common/Components/ProductDetail/ProductDetail";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Slug } from "../../common/modules/Slug/slug";
import Head from "next/head";
export default function ProductDetailId() {
  const [dataProductDetail, SetProductDetail] = useState();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Thông tin sản phẩm</title>
      </Head>
      <ProductDetail />
    </>
  );
}
