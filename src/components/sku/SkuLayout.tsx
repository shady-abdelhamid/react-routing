import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./SkuLayout.css";
interface SkuLayoutProps {}

function SkuLayout(props: SkuLayoutProps) {
  return (
    <>
      <h1> SKUs</h1>
      <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? "sku__navlink--active" : "")} to="/sku/new">Add new SKU</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "sku__navlink--active" : "")} to="/sku/1">SKU#1</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? "sku__navlink--active" : "")} to="/sku/2">SKU#2</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => (isActive ? "sku__navlink--active" : "")} to="/sku/products">Products</NavLink>
        </li>
      </ul>
      <Outlet context={{ skuId: 1 }} />
    </>
  );
}

export default SkuLayout;
