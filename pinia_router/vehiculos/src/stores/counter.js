import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import userService from "../services/userService";

export const useCounterStore = defineStore("counter", {
  state: () => {
    // PEDIDO A UNA URL... MEDIANTE AXIOS... lista de autos
    // let arraylista = lo que devuelva axios

    // inicar una variable conteo inicial + X porcentual...
    // let inicializacionDeCount = lista.length * porcentual
    return {
      // count: ref(inicializacionDeCount)
      count: ref(0),
      userName: "",
      lista: [
        { id: 1, marca: "FORD", modelo: "MUSTANG" },
        { id: 2, marca: "CITROEN", modelo: "3CV" },
      ],
      listaUsers: [],
    };
  },
  // methods en un componente... son las funciones.
  actions: { 
    borrar(id) {
      // Primer habría que borrarlo del back... a través de axios.delete...
      // si la respuesta fuera favorable... recién ahí... borrar el fron... sino mostrar mensaje de error
      let index = this.lista.findIndex((auto) => auto.id == id);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    agregar(auto) {
      // mediante axios.post("url/cars, auto")... then... 
      this.lista.push({ ...auto });
      // .catch... tirará un alert de error.
      this.count++;
      console.log(this.count);
    },
    async fetchUsers() {
      try {
        // const response = await axios.get(
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        this.listaUsers = userService.getAll();
        //this.listaUsers = response.data;
        console.log(this.listaUsers);
        console.log("Bajamos la lista de usuarios" + this.listaUsers[0].name);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    getTablaUsuarios() {
      if (this.listaUsers.length <= 0) {
        this.fetchUsers();
        return this.listaUsers;
      } else {
        return this.listaUsers;
      }
    },
  },
});
