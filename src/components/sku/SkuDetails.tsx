import React from "react";
import { useParams, useNavigate } from "react-router-dom";

interface SkuDetailsProps {}

function SkuDetails(props: SkuDetailsProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <div>SKU details - {id}</div>
      <button onClick={() => navigate("/sku/new")}>Add new SKU</button>
    </>
  );
}

export default SkuDetails;
