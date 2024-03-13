import ImageSlider from "./ImageSlider";
import "./Product.css";

const Product = ({product}) => {

  return (
    <div className="gallery">
      <ImageSlider images={product.images} />
      <div className="desc">
        <h4>{product.name}</h4>
        <h5>Quantity: {product.quantity}</h5>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  )
}

export default Product;
