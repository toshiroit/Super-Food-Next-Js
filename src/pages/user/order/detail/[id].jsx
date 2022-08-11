import Head from "next/head";
import MenuSlider from "../../../../common/Components/User/MenuSlider/MenuSlider";
import User from "../../../../common/Components/User/User";
import UserOderDetail from "../../../../common/Components/User/UserOrder/UserOrderDetail/UserOderDetail";

export default function OrderDetailIdx() {
  return (
    <>
      <Head>
        <title>Thông tin đơn hàng #2417515</title>
      </Head>
      <User>
        {<MenuSlider />}
        {<UserOderDetail />}
      </User>
    </>
  );
}
