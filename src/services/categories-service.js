import config from "../config/config";

class CategoryService {
  async getCategories() {
    try{
      const res = await fetch(`${config.API_BASE_URL}/category`);
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