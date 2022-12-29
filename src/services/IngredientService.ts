import http from "../http-common"

class IngredientService{

  getAll(): Promise<any> {
    return http.get("/ingredients");
  }

  create(data: any): Promise<any> {
    return http.post("addingredient", data);
  }

}

export default new IngredientService();