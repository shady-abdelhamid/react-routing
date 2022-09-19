import React from "react";
import { Route, Routes } from "react-router-dom";
import NewSku from "./components/sku/NewSku";
import ProductList from "./components/sku/ProductList";
import SkuDetails from "./components/sku/SkuDetails";
import SkuLayout from "./components/sku/SkuLayout";
import SkuList from "./components/sku/SkuList";

function SkuRoutes() {
  return (
    <>
      <Routes>
        <Route element={<SkuLayout />}>
          <Route index element={<SkuList />}></Route>
          <Route path=":id" element={<SkuDetails />} />
          <Route path="new" element={<NewSku />} />
          <Route path="products" element={<ProductList />} />
        </Route>
      </Routes>
    </>
  );
}

export default SkuRoutes;
