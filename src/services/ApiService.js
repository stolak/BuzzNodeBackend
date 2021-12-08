import http from "../http-common";

class ApiService {
  
  getAllFoto() {
    return http.get("/");
  }
  getFilterFoto(tag) {
    return tag? http.get("/search/"+tag):http.get("/");
  }
  
}

export default new ApiService();
