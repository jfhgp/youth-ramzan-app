import localStore from "./localstore.util";
import { updateHeaders } from "../services";
import { removeUserInfo } from "./user.util";
// import { updateHeaders } from "../services";

export const getToken = () => localStore.get_data("token");

export const setToken = token => localStore.store_data("token", token);

// export const getCategories = () => localStore.get_data("categories");

// export const setCategories = categories =>
//   localStore.store_data("categories", categories);

export const logout = async () => {
  updateHeaders();
  await localStore.remove_data("token");
  return true;
};

export const isLoggedIn = async () => {
  const token = await getToken();
  // ("isLoggedIn>>>>", token);
  const response = token == null ? false : true;
  // ("Islogresponse", response);
  // return Promise.resolve({sajdkf : sasdklfjlasdkf < , asdfjskld});
  return Promise.resolve(response);
};
