import React from "react";
import config from "../config/config";
import { useParams } from "react-router-dom";
import "../styles/catalogitem.css";

export default function CatalogItem() {
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
    <div className="product-page">
      <div className="left">
        <img
          className="product-page__thumbnail"
          src={product.imageUrl || "./images/images.svg"}
        ></img>
      </div>
      <div className="right">
        <section>
          <h3>{product.name}</h3>
          <p>$ {product.price}</p>
        </section>
        <section>
          <p>{product.description}</p>
        </section>
        <section></section>
      </div>
    </div>
  );
}
