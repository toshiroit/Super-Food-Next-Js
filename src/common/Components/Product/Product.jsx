import ProductItem from "./ProductItem/ProductItem";
export default function Product({ products, size, isShowAll }) {
  return (
    <div className="product">
      <div className="product__wp">
        {products && products.map((item, index) => {
          if (size) {
            if (index < size) {
              return (
                <ProductItem
                  key={index}
                  codeProduct={item.codeProduct}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  point={item.point}
                  sale={item.sale}
                />
              );
            }
          } else {
            return (
              <ProductItem
                key={index}
                codeProduct={item.codeProduct}
                name={item.name}
                image={item.image}
                price={item.price}
                point={item.point}
                sale={item.sale}
              />
            );
          }
        })}
      </div>
      {
        isShowAll ? <div className="showAll">
          <span>XEM TẤT CẢ   <i class="fa-solid fa-chevron-right"></i></span>
        </div> : ''
      }
    </div>
  );
}
