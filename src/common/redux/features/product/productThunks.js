import { createAsyncThunk } from "@reduxjs/toolkit"
import { GET_PRODUCT_BY_NAME } from "../../../constants/ApiLink"
import RequestServices from "../../services/request-services"

export const getProductByName = createAsyncThunk("product/getProductByName", async (name, id) => {
  const responsive = await RequestServices.get(GET_PRODUCT_BY_NAME(name, id))
  return {
    product: responsive.data.product,
    status: responsive.status
  }
})

