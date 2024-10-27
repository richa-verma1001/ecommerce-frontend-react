import config from "../config/config";

// TODO: look into abstracting into a usehook
class CategoryService {
  async getCategories() {
    try{
      // const res = await fetch(`${config.API_BASE_URL}/category`);
      const res = await fetch(`${config.API_BASE_URL}/categories`);
      const data = await res.json();
      return data;
    }catch(err){
      throw new Error("Unable to fetch categories");
    }      
  }

  updateCategory() {

  }

  removeCategory() {

  }

}

export default new CategoryService();