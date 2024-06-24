import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "./BreadCrums";
import ProductDisplay from "./ProductDisplay";
// import RelatedProducts from "./RelatedProduct";

const AllGame = () => {
  const { all_product } = useContext(ShopContext);
  console.log("all_product:", all_product);

  const { productId } = useParams();
  console.log("productId:", productId);

  const product = all_product.find((e) => e.name === productId.split("_").join(" "));
  console.log("product:", product);

  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={ product } />
      {/* <RelatedProducts/> */}
    </div>
  );
};

export default AllGame;