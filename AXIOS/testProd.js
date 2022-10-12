import axios from "./axios.js";

const getProd = async (idProd) => {
  try {
    const response = await axios.get(`/api/productos/${idProd}`);

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const postProd = async () => {
  try {
    const response = await axios.post(`/api/productos`, {
      nombre: "My Hero Academia",
      descripcion:
        "My Hero Academia (僕のヒーローアカデミア Boku no Hīrō Akademia?) es una serie de manga escrita e ilustrada por Kōhei Horikoshi.",
      codigo: 12349,
      foto: "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Volumen_1.png/revision/latest?cb=20151024153923&path-prefix=es",
      precio: 1199.99,
      stock: true,
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const putProd = async (idProd) => {
  try {
    const response = await axios.put(`/api/productos/${idProd}`, {
      nombre: "My Hero Academia",
      descripcion:
        "My Hero Academia (僕のヒーローアカデミア Boku no Hīrō Akademia?) es una serie de manga escrita e ilustrada por Kōhei Horikoshi.",
      codigo: 12350,
      foto: "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Volumen_1.png/revision/latest?cb=20151024153923&path-prefix=es",
      precio: 750.00,
      stock: true,
    });

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

const deleteProd = async (idProd) => {
  try {
    const response = await axios.delete(`/api/productos/${idProd}`);

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};


//postProd();
getProd("62f1887d3451c29100fd5af6");
//putProd("6347496b5703ea0ce0fb6a35");
deleteProd("63474ff45703ea0ce0fb6a60")


