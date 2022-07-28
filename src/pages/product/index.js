import Head from "next/head";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>
      <Head> <title> Xem san pham A </title></Head>
      qowrqwirjqiowrjqwoirjqwiorjq Dad
    </div>
  )
}
