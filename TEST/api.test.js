import supertest from "supertest";
import { expect } from "chai";

let request;

describe("Test sobre API REST FULl", () => {
  before(() => {
    request = supertest("http://localhost:8080");
  });

  describe("- POST /api/productos", () => {
    it("Deberia devolver status 200 y mensaje: Success", async () => {
      const prodToCreate = {
      nombre: "My Hero Academia",
      descripcion:
        "My Hero Academia (僕のヒーローアカデミア Boku no Hīrō Akademia?) es una serie de manga escrita e ilustrada por Kōhei Horikoshi.",
      codigo: 12349,
      foto: "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Volumen_1.png/revision/latest?cb=20151024153923&path-prefix=es",
      precio: 1199.99,
      stock: true,
    }
      const response = await request.post("/api/productos").send(prodToCreate);

      expect(response.status).to.eql(200);
      expect(response.body.message).to.string("Success");
    });
  });

  describe("- GET /api/productos", () => {
    it("Deberia devolver status 200, data: producto y mensaje: Success", async () => {
      const response = await request.get("/api/productos/62f1887d3451c29100fd5af6");

      expect(response.status).to.eql(200);
      expect(response.body.data[0]).to.keys("nombre", "descripcion", "precio", "foto", "id");
      expect(response.body.message).to.string("Success");
    });
  });

  describe("- PUT /api/productos", () => {
    it("Deberia devolver status 200, data: producto actualizado y mensaje: Success", async () => {
      const prodToChange = {
      nombre: "Jujutsu Kaise",
      descripcion:
        "Jujutsu Kaisen (呪術廻戦 Jujutsu Kaisen?) también conocido como Guerra de Hechiceros es una serie manga escrita e ilustrada por Gege Akutami.",
      codigo: 12351,
      foto: "https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Volumen_1.png/revision/latest?cb=20151024153923&path-prefix=es",
      precio: 809.05,
      stock: true,
    }
      const response = await request.put("/api/productos/62f1887d3451c29100fd5af6").send(prodToChange);

      expect(response.status).to.eql(200);
      expect(response.body.data).to.string("productos actualizado");
      expect(response.body.message).to.string("Success");
    });
  });

  describe("- DELETE /api/productos", () => {
    it("Deberia devolver status 200, data: producto borrado y  mensaje: Success", async () => {
      const response = await request.delete("/api/productos/634750de5703ea0ce0fb6a6b");

      expect(response.status).to.eql(200);
      expect(response.body.data).to.string("productos borrado");
      expect(response.body.message).to.string("Success");
    });
  });



  describe("- GET Unkown", () => {
    it("Deberia devolver status 404", async () => {
      const response = await request.get("/asdasds");

      expect(response.status).to.eql(404);
    });
  });
});