import { api } from "../config/API";

class GistService {
  async fetchGists(page) {
    const path = `gists/public?page=${page}`;
    const response = await api.get(path);
    return response;
  }
}

export const gistService = new GistService();
