import { get } from "axios";

const API_URL = "/api";

export function fetchAll() {
  return get(`${API_URL}/event`);
}
