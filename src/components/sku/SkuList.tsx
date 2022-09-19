import React from "react";
import { Link, useSearchParams } from "react-router-dom";

interface SkuListProps {}

function SkuList(props: SkuListProps) {
  const [searchParams, setSearchParams] = useSearchParams({ keyword: "" });
  const keyword = searchParams.get("keyword") as string;
  return (
    <>
      <h1> SKU list</h1>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setSearchParams({ keyword: e.target.value })}
      />
    </>
  );
}

export default SkuList;
