import { BASE_URL } from "../config/constant";

class API {
  get(path) {
    const url = `${BASE_URL}/${path}`;

    const options = {
      method: "GET",
    };

    return fetch(url, options).then((response) => response.json());
  }

  post(path, body) {
    const url = `${BASE_URL}/${path}`;

    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };

    return fetch(url, options).then((response) => response.json());
  }
}

export const api = new API();
