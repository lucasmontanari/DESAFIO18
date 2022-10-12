import axios from "./axios.js";

const postLogin = async (email, password) => {
  try {
    const response = await axios.post(`/api/login`, {
      email: email,
      password: password,
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const postRegister = async () => {
  try {
    const response = await axios.post(`/api/register`, {
      email: "franco@mail.com",
      password: "5678",
      nombre: "Franco",
      direccion: "RufCuervo 1550",
      edad: 33,
      telefono: "+543513596833",
      avatar: "http://localhost:8080/api/uploads/foto.jpg"
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

await postRegister()
await postLogin("franco@mail.com", "5678");
