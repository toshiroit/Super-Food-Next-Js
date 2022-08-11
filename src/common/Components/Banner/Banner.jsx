import { useEffect, useState } from "react";

export default function Banner() {
  const [widthBannerAll, setWidthBannerAll] = useState(0);
  const [btnSlider, setBtnSlider] = useState(false);
  const [widthBanner, setWidthBanner] = useState(0);
  const onSlider = (value, width) => {
    let count = widthBannerAll;
    let allItemBannerIdx = document.getElementsByClassName(
      "bannerItemIdxWebUser"
    );
    let widthItemBanner =
      document.getElementById("bannerSliderWebIdxUser").clientWidth / 1;
    let widthAllItemBanner = widthItemBanner * allItemBannerIdx.length;
    let spacing = widthAllItemBanner - 1 * widthItemBanner;

    if (value === "right") {
      console.log("Count ", count);
      count += widthItemBanner;
      if (count > spacing) count = 0;
      document.getElementById(
        "bannerSliderWebIdxUser"
      ).style.transform = `translate3d(-${count}px,0px,0px)`;
      setWidthBannerAll(count);
      setWidthBanner(count);
    } else if (value === "left") {
      count -= widthItemBanner;
      if (count >= 0) {
        document.getElementById(
          "bannerSliderWebIdxUser"
        ).style.transform = `translate3d(-${count}px,0px,0px)`;
      } else {
        document.getElementById(
          "bannerSliderWebIdxUser"
        ).style.transform = `translate3d(-${widthAllItemBanner - widthItemBanner
        }px,0px,0px)`;
        count = widthAllItemBanner - widthItemBanner;
      }
      setWidthBannerAll(count);
      setWidthBanner(count);
    }
  };
  useEffect(() => {
    // let count = widthBannerAll;
    // setTimeout(() => {
    //   onSlider("right", widthBannerAll);
    // }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [widthBannerAll]);
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="btnLeft btnSlider">
          <button
            onClick={() => onSlider("left", widthBannerAll)}
            id="sliderIdxWebLeft"
            type="button"
          >
            <i className="fa-solid fa-angle-left fa-size" />
          </button>
        </div>
        <div className="btnRight btnSlider">
          <button
            onClick={() => onSlider("right", widthBannerAll)}
            id="sliderIdxWebRight"
            type="button"
          >
            <i className="fa-solid fa-angle-right fa-size" />
          </button>
        </div>
        <ul id="bannerSliderWebIdxUser" className="banner__inner___main">
          <li className="banner__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://img.freepik.com/free-vector/flat-design-food-banner-template_23-2149076251.jpg?w=2000"
                  alt=""
                />
              </picture>
            </div>
          </li>
          <li className="banner__inner___main____item bannerItemIdxWebUser">
            <div className="image">
              <picture>
                <img
                  src="https://img.freepik.com/premium-psd/delicious-food-sale-social-media-banner-template_117751-219.jpg?w=1380"
                  alt=""
                />
              </picture>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
