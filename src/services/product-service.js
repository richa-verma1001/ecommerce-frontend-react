import config from "../config/config";

class ProductService {

  async getProducts(categoryName){
    const url =
      categoryName !== ""
        ? `${config.API_BASE_URL}/products?category=${categoryName}`
        : `${config.API_BASE_URL}/products`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }catch(err){
      throw new Error(`Failed to fetch products ${categoryName}`);
    }    
  }

  addProduct(){

  }

  async removeProduct(productId){
    try{
      const res = await fetch(`${config.API_BASE_URL}/products/${productId}`, { method: 'DELETE'});
      const data = await res.json();
      return data;
    }catch(err){
      throw new Error(`Failed to delete product: ${productId}`);
    } 
  }

  updateProduct(){

  }
}

export default new ProductService();