import React from "react";

export const axios = () => {
  const getApi = () => {
    axios
      .get("/user?ID:12345")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAnotherApi = () => {
    axios
      .get("/user?", {
        params: {
          ID: 12345,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAsyncApi = async () => {
    try {
      const response = await axios.get("/user?ID:12345");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const postApi = () => {
    axios
      .post("/user?ID:12345", {
        firstname: "Adam",
        email: "adam@gmail.com",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const axiosConfig = () => {
    axios({
      method: "post",
      url: "/user?ID:12345",
      data: {
        firstname: "Adam",
        email: "adam@gmail.com",
      },
    }).then(function (response) {
      console.log(response);
    });
  };

  const aliase = () => {
    axios.get("/user?ID:12345", [
      {
        method: "post",
        data: {
          firstname: "Adam",
          email: "adam@gmail.com",
        },
      },
    ]);
  };

  const instance = axios.create();

  return (
    <div>
      <input type="text" />
      <input type="password" />
    </div>
  );
};
