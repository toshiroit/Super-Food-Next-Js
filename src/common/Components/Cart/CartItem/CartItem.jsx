import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FormatPriceVnd } from "../../../lib/FormatPriceVnd/FormatPriceVnd";
import { onChaneCartProduct } from "../../../redux/features/cart/cartSlice";

export default function CartItem({ dataCartShop }) {
  // Data Product
  const [dataCart, setDataCart] = useState(dataCartShop);
  const [checkAllProductShop, setCheckAllProductShop] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onChaneCartProduct({ products: checkAllProductShop }));
  }, [checkAllProductShop, dispatch]);
  useEffect(() => {
    setDataCart(dataCartShop);
  }, [dataCartShop]);
  //
  // Result Product by Discount
  const priceDiscount = (price, discount) => {
    let discountResult = discount / 100;
    let discountPrice = price * discountResult;
    let resultPrice = price - discountPrice;
    return resultPrice;
  };

  //Result Price Product by Quality
  const priceResultQuality = (price, discount, quality) => {
    return priceDiscount(price, discount) * quality;
  };

  /** Change Quality Product Cart **/
  const onQualityProduct = (codeShop, codeProduct, value) => {
    let newProductCart = null;
    let result = null;
    dataCart.map((item) => {
      if (item.codeShop === codeShop) {
        return (newProductCart = item.productCart);
      }
    });
    newProductCart.map((item) => {
      if (item.code === codeProduct) {
        if (value > 0) return (item.quality = value);
      }
    });
    result = dataCart.map((item) => {
      if (item.codeShop === codeShop) {
        item.productCart = newProductCart;
      }
      return item;
    });
    setDataCart(result);
  };

  /** Checked Product by one Product **/
  const onCheckProduct = (codeShop, codeProduct, isCheck) => {
    if (checkAllProductShop.length > 0) {
      let idxProductShop = checkAllProductShop.findIndex(
        (item) => item.codeShop === codeShop
      );
      if (idxProductShop !== -1) {
        let idxProductCheck = checkAllProductShop[
          idxProductShop
        ].productCheck.findIndex((item) => item.codeProduct === codeProduct);
        if (idxProductCheck !== -1) {
          let newProductCheck = [...checkAllProductShop];
          newProductCheck[idxProductShop].productCheck[
            idxProductCheck
          ].isCheck = isCheck;
          setCheckAllProductShop(newProductCheck);
        } else {
          let newProductCheck = [...checkAllProductShop];
          newProductCheck[idxProductShop].productCheck.push({
            codeProduct,
            isCheck: true,
          });
          setCheckAllProductShop(newProductCheck);
        }
      } else {
        let newProductCart = {
          codeShop,
          isCheckAll: false,
          productCheck: [
            {
              codeProduct,
              isCheck: true,
            },
          ],
        };
        setCheckAllProductShop((checkAllProductShop) => [
          ...checkAllProductShop,
          newProductCart,
        ]);
      }
    } else {
      let newProductCart = {
        codeShop,
        isCheckAll: false,
        productCheck: [
          {
            codeProduct,
            isCheck: true,
          },
        ],
      };
      setCheckAllProductShop((checkAllProductShop) => [
        ...checkAllProductShop,
        newProductCart,
      ]);
    }
  };

  /** Checked all product shop cart **/
  const onCheckAllProductShop = (codeShop, isCheck) => {
    if (checkAllProductShop.length > 0) {
      let idxProductShop = checkAllProductShop.findIndex(
        (item) => item.codeShop === codeShop
      );
      if (idxProductShop !== -1) {
        let newProductCheckCart = [...checkAllProductShop];
        if (newProductCheckCart[idxProductShop].isCheckAll) {
          newProductCheckCart[idxProductShop].isCheckAll = isCheck;
          newProductCheckCart[idxProductShop].productCheck = [];

          setCheckAllProductShop(newProductCheckCart);
        } else {
          let productCheck = [];
          dataCart.map((item) => {
            if (item.codeShop === codeShop)
              item.productCart.map((itemCheck) => {
                productCheck.push({
                  codeProduct: itemCheck.code,
                  isCheck: true,
                });
              });
          });
          newProductCheckCart[idxProductShop].isCheckAll = isCheck;
          newProductCheckCart[idxProductShop].productCheck = productCheck;
          setCheckAllProductShop(newProductCheckCart);
        }
      } else {
        let productCheck = [];
        dataCart.map((item) => {
          if (item.codeShop === codeShop)
            item.productCart.map((itemCheck) => {
              productCheck.push({
                codeProduct: itemCheck.code,
                isCheck: true,
              });
            });
        });
        let newProductCart = {
          codeShop,
          isCheckAll: true,
          productCheck: productCheck,
        };
        setCheckAllProductShop((checkAllProductShop) => [
          ...checkAllProductShop,
          newProductCart,
        ]);
      }
    } else {
      let productCheck = [];
      dataCart.map((item) => {
        if (item.codeShop === codeShop)
          item.productCart.map((itemCheck) => {
            productCheck.push({
              codeProduct: itemCheck.code,
              isCheck: true,
            });
          });
      });
      let newProductCart = {
        codeShop,
        isCheckAll: true,
        productCheck: productCheck,
      };
      setCheckAllProductShop((checkAllProductShop) => [
        ...checkAllProductShop,
        newProductCart,
      ]);
    }
  };

  /* checkAllCart **/
  const isCheckedAllCart = (codeShop) => {
    if (checkAllProductShop) {
      let idxProductShop = checkAllProductShop.findIndex(
        (item) => item.codeShop === codeShop
      );
      if (idxProductShop !== -1) {
        return {
          codeShop,
          isCheckAll: checkAllProductShop[idxProductShop].isCheckAll,
        };
      } else {
        return {
          codeShop,
          isCheckAll: false,
        };
      }
    } else {
      return {
        codeShop: null,
        isCheckAll: false,
      };
    }
  };

  /** Check Product **/
  const isCheckedCart = (codeShop, codeProduct) => {
    if (checkAllProductShop) {
      let idxProductShop = checkAllProductShop.findIndex(
        (item) => item.codeShop === codeShop
      );
      if (idxProductShop !== -1) {
        let idxProductCheckShop = checkAllProductShop[
          idxProductShop
        ].productCheck.findIndex((item) => item.codeProduct === codeProduct);
        if (idxProductCheckShop !== -1) {
          return {
            codeProduct,
            isCheck:
              checkAllProductShop[idxProductShop].productCheck[
                idxProductCheckShop
              ].isCheck,
            isCheckAll: checkAllProductShop[idxProductShop].isCheckAll,
          };
        } else {
          return {
            codeProduct,
            isCheck: false,
            isCheckAll: false,
          };
        }
      } else {
        return {
          codeProduct: null,
          isCheck: false,
          isCheckAll: false,
        };
      }
    } else {
      return {
        codeProduct: null,
        isCheck: false,
        isCheckAll: false,
      };
    }
  };

  return (
    <>
      {dataCart &&
        dataCart.map((itemShop) => {
          return (
            <li key={itemShop.codeShop} className="main__item">
              <div className="main__item___header">
                <div className="nameShop">
                  <input
                    onClick={() =>
                      onCheckAllProductShop(
                        itemShop.codeShop,
                        !isCheckedAllCart(itemShop.codeShop).isCheckAll
                      )
                    }
                    type="checkbox"
                    name={`groupShop${itemShop.codeShop}`}
                    id=""
                  />
                  <div className="wo">
                    <i className="fa-solid fa-store" />
                    <span>{itemShop.nameShop} </span>
                  </div>
                </div>
                <div className="comboGiftShip">
                  <span className="name"> Combo khuyến mãi </span>
                  <p>Mua thêm 10 sản phẩm để được giảm 25%</p>
                </div>
              </div>
              <div className="main__item___main">
                {itemShop.productCart.map((item) => {
                  return (
                    <>
                      <div className="productCart">
                        <div className="productCart__checkbox">
                          {console.log()}
                          <input
                            onClick={() =>
                              onCheckProduct(
                                itemShop.codeShop,
                                item.code,
                                !isCheckedCart(itemShop.codeShop, item.code)
                                  .isCheck
                              )
                            }
                            checked={
                              isCheckedCart(itemShop.codeShop, item.code)
                                .isCheck
                                ? true
                                : false
                            }
                            type="checkbox"
                            name={`itemProduct${item.code}`}
                            id=""
                          />
                        </div>
                        <div className="productCart__image">
                          <picture>
                            <img src={item.image} alt="" />
                          </picture>
                        </div>
                        <div className="productCart__name productCart__nameMobile">
                          <p>{item.nameProduct}</p>
                          <div className="productCart__priceMobile">
                            <div className="pricew1">
                              <span>
                                {priceDiscount(item.price, item.discount)}
                              </span>
                            </div>
                            <div className="pricew2">
                              <span>{item.price}</span>
                            </div>
                            <div className="salePrice">
                              <span>
                                Giảm giá {item.discount}%
                                <i className="fa-solid fa-arrow-trend-down fa-size" />
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="productCart__name">
                          <p>{item.nameProduct}</p>
                        </div>
                        <div className="productCart__price">
                          <div className="pricew1">
                            <span>
                              {FormatPriceVnd(
                                priceDiscount(item.price, item.discount)
                              )}
                            </span>
                          </div>
                          <div className="pricew2">
                            <span>{FormatPriceVnd(item.price)} </span>
                          </div>
                          <div className="salePrice">
                            <span>
                              Giảm giá {item.discount}%
                              <i className="fa-solid fa-arrow-trend-down fa-size" />
                            </span>
                          </div>
                        </div>
                        <div className="productCart__quality">
                          <div className="inner">
                            <i
                              onClick={() =>
                                onQualityProduct(
                                  itemShop.codeShop,
                                  item.code,
                                  item.quality - 1
                                )
                              }
                              className="fa-solid fa-minus fa-size"
                            />
                            <input
                              type="number"
                              value={item.quality}
                              name=""
                              id=""
                            />
                            <i
                              onClick={() =>
                                onQualityProduct(
                                  itemShop.codeShop,
                                  item.code,
                                  item.quality + 1
                                )
                              }
                              className="fa-solid fa-plus fa-size"
                            />
                          </div>
                        </div>
                        <div className="productCart__priceResult">
                          <span>
                            {FormatPriceVnd(
                              priceResultQuality(
                                item.price,
                                item.discount,
                                item.quality
                              )
                            )}
                          </span>
                        </div>
                        <div className="productCart__remove">
                          <i className="fa-solid fa-xmark fa-size" />
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="main__item___footer">
                <div className="vorcherShop">
                  <div className="inner">
                    <i className="fa-solid fa-gift fa-size" />
                    <span>Vorcher của shop </span>
                    <i className="fa-solid fa-chevron-down fa-size" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
}
