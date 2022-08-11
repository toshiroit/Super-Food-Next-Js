import Product from "./Product";

export default function ProductIdx({ title, image, products }) {
  return (
    <>
      <div className="main__wp1___title">
        <h4>
          <picture>
            <img src="./images/1200px-NewStar.svg.png" alt="" />
          </picture>
          Khám phá quản mới
        </h4>
        <div className="alw">
          <i className="fa-size fa-solid fa-paperclip" />
        </div>
      </div>
      {products ? (
        <Product products={products} />
      ) : (
        <div className="" style={{ width: "100%", textAlign: "center" }}>
          <div className="loadingio-spinner-rolling-o0si3la4pz">
            <div className="ldio-cxg4k2dttv5">
              <div></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
