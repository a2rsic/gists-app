import { api } from "../config/API";

class GistService {
  async fetchGists() {
    const path = "/gists/public";
    const response = await api.get(path);
    return response;
  }
}

export const gistService = new GistService();
