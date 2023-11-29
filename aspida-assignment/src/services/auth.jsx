import { USER_LIST } from "../constants/users";

export const loginUser = async (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = USER_LIST.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(new Error("User not found"));
      }
    }, 1000);
  });
};
