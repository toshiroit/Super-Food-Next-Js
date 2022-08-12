import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { LocalStorage } from "../../modules/Localstorage/Localstorage";
import Product from "../Product/Product";

export default function Search() {
  const router = useRouter()
  const [product, setProduct] = useState(null);
  const [keyWord, setKeyWord] = useState(null)

  /*Is Show Filter Product */
  const [isShowFliterArea, setIsShowFilterArea] = useState(false)
  const [isShowFliterCategory, setIsShowFilterCategory] = useState(false)

  /* Get Value Filter Procduct Search */
  const [valueFilter, setValueFilter] = useState({
    area: [],
    category: []
  })
  useEffect(() => {
    let result = []
    /**Get keyword LocalStorage user */
    setKeyWord(JSON.parse(LocalStorage('keywordSearch', null, "GET")))

    /** Fetch Data MockApi Test **/
    const fetchProduct = async () => {
      const data = await axios
        .get("https://62f0bc86e2bca93cd23bd902.mockapi.io/api/product/product")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          return err;
        });
      data.map((item, index) => {
        if (router.query.name) {
          if (item.name.toLowerCase().includes(router.query.name.toLowerCase())) {
            result.push(item)
          }
        }
      })
      setProduct(result);

    };
    fetchProduct();
  }, [router.query]);
  useEffect(() => {
  }, [])
  /* OnChange Get Value Filter */
  const onChangeFilter = (e) => {
    if (e.target.name === 'area') {
      setValueFilter({
        ...valueFilter,
        area: [...valueFilter.area, e.target.value]
      })
    }
    else if (e.target.name === 'category') {
      let fkCategory = [...valueFilter.category]
      if (fkCategory.length === 0) {
        setValueFilter({
          ...valueFilter,
          category: [...valueFilter.category, e.target.value]

        })
      }
      else {
        setValueFilter({
          ...valueFilter,
          category: [...valueFilter.category, e.target.value]
        })
      }
    }

  }

  /** Remove keyword search Page **/
  const onRemoveKeywordSearch = (item) => {
    LocalStorage('keywordSearch', item, 'REMOVE');
    setKeyWord(JSON.parse(LocalStorage('keywordSearch', null, "GET")))
  }

  /* On Fliter Submit */
  const onFilterProduct = () => {
    let result = {
      filterArea: Array.from(new Set(valueFilter.area)),
      filterCategory: Array.from(new Set(valueFilter.category))
    }

  }
  /* On Show filter */
  const onShowFilter = (value) => {
    if (value === 'area') {
      setIsShowFilterCategory(false)
      setIsShowFilterArea(!isShowFliterArea)
    } else if (value === 'category') {
      setIsShowFilterArea(false)
      setIsShowFilterCategory(!isShowFliterCategory)
    }
  }

  return (
    <div className="search">
      <div className="container">
        <div className="search__content breadcrum">
          <div className="search__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">Supership</li>
              <li className="main__item">Sản phẩm</li>
              <li className="main__item">Tìm kiếm : 2</li>
            </ul>
          </div>
          <div className="search__content___inner">
            <div className="header">
              <div className="header__title">
                <h4>
                  Tìm kiếm sản phẩm : <b>124124</b>
                </h4>
              </div>
              <div className="header__flex">
                <div className="header__flex___select">
                  <div className={"wpSelect"}>
                    <span onClick={() => onShowFilter('area')}>Khu vực</span>
                    <ul className={isShowFliterArea ? "areaList isActiveMrrTopAdm" : "areaList"}>
                      <li className="areaList__item">
                        <div className="w">
                          <input onChange={onChangeFilter} type="checkbox" name="area" value={"quan1"} id="" />
                          <span>Quận 1</span>
                        </div>
                      </li>
                      <li className="areaList__item">
                        <div className="w">
                          <input onChange={onChangeFilter} type="checkbox" name="area" value={"quan2"} id="" />
                          <span>Quận 2</span>
                        </div>
                      </li>
                      <li className="areaList__item">
                        <div className="w">
                          <input onChange={onChangeFilter} type="checkbox" name="area" value={"quan3"} id="" />
                          <span>Quận 3</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="wpSelect" >
                    <span onClick={() => onShowFilter('category')}>Danh mục </span>
                    <ul className={isShowFliterCategory ? "areaList isActiveMrrTopAdm" : "areaList"}>
                      <li className="areaList__item">
                        <div className="w">
                          <input type="checkbox" onChange={onChangeFilter} name="category" value="CT29" id="" />
                          <span>Lẩu </span>
                        </div>
                      </li>
                      <li className="areaList__item">
                        <div className="w">
                          <input type="checkbox" onChange={onChangeFilter} name="category" value="CT30" id="" />
                          <span>Cơm</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="header__flex___vlSearch">
                  <span>14.999 Kết quả </span>
                  <div className="select">Đúng nhất</div>
                  <div onClick={onFilterProduct} className="select">Lọc</div>
                </div>
              </div>
              <ul className="header__listSearch">

                {
                  keyWord && keyWord.map((item, index) => {
                    return (
                      <li key={index} className="header__listSearch___item">
                        <span>
                          Từ khóa : <b>{item}</b>
                        </span>
                        <div onClick={() => onRemoveKeywordSearch(item)} className="remove">
                          <i className="fa-solid fa-xmark fa-size" />
                        </div>
                      </li>

                    )
                  })
                }
              </ul>
            </div>
            <div className="bd">
              <div className="product" style={{ textAlign: "center" }}>
                {/*                <Product products={product} /> */}
                <div className="loadingio-spinner-rolling-o0si3la4pz">
                  <div className="ldio-cxg4k2dttv5">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination">
              <ul className="pagination__main">
                <li className="pagination__main___item arrow">
                  <i className="fa-solid fa-angle-left fa-size" />
                </li>
                <li className="pagination__main___item active">1</li>
                <li className="pagination__main___item">2</li>
                <li className="pagination__main___item">3</li>
                <li className="pagination__main___item">4</li>
                <li className="pagination__main___item">5</li>
                <li className="pagination__main___item">6</li>
                <li className="pagination__main___item">7</li>
                <li className="pagination__main___item arrow">
                  <i className="fa-solid fa-angle-right fa-size" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
