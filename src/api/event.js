import { get } from "axios";
import { API_URL } from "./contants";

export function fetchAll() {
  return get(`${API_URL}/event`);
}
