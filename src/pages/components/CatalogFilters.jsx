import React from "react";

export default function CatalogFilters({ selectedTag, updateTag }) {
  console.log(selectedTag);
  return (
    <div className="catalogFilters">
      <button onClick={() => updateTag("new")}>New</button>
      <button onClick={() => updateTag("trending")}>Trending</button>
      <button onClick={() => updateTag("popular")}>Popular</button>
    </div>
  );
}
