import React from "react";
import { useOutletContext } from "react-router-dom";

interface ProductListProps {}

function ProductList(props: ProductListProps) {
  const obj = useOutletContext() as any;
  return <>product of SKU {obj.skuId}</>;
}

export default ProductList;
