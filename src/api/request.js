import axios from "axios";

export default function request(url, callback) {  
  
    return axios
        .get(url)
        .then(response => {
          console.log("request data success", response);
          return response.data;
        })
        .catch(error => {
          console.log(error);
          // dispatch(fetchIngredientsFailed());
        });
    };
