// TODO Use useState

const API_URL = "https://frebi.willandskill.eu/api/v1";

function getToken() {
  return localStorage.getItem("WEBB20");
}

export const client = {
  getMe: async function () {
    const url = API_URL + "/me/";
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }).then((res) => res.json());

    //Använd State för att använda variabeln
  },

  getCustomerList: async function () {
    const url = API_URL + "/customers/";
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }).then((res) => res.json());
  },

  createCustomer: async function (formData) {
    const url = API_URL + "/customers/";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
    }).then((res) => res.json());
  },
};
