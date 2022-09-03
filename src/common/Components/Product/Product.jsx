import ProductItem from "./ProductItem/ProductItem";
export default function Product({ products, size }) {
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
    </div>
  );
}
