import { post, get } from "axios";
import { stringify } from "qs";
import { API_URL } from "./contants";

const USER_BASE_URL = `${API_URL}/user`;

const wrapParams = params => {
  return stringify({ request: JSON.stringify(params) });
};

export function createUser(params) {
  return post(USER_BASE_URL, wrapParams(params));
}

export function fetchAll() {
  return get(USER_BASE_URL);
}
