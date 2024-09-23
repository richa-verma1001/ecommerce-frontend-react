import React from "react";
import config from "../config/config";
import { useParams } from "react-router-dom";

export default function CatalogItem() {
  console.log("Render catalog item");
  const params = useParams();
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`${config.API_BASE_URL}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [params.id]);

  if (loading) return <div>Loading ..</div>;

  return (
    <div>
      <h3>Catalog Item</h3>
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}
