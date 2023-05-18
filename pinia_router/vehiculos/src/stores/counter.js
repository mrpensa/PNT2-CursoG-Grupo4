import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import userService from "../services/userService";

export const useCounterStore = defineStore("counter", {
  state: () => {
    // PEDIDO A UNA URL... MEDIANTE AXIOS... lista de materias
    // let arraylista = lo que devuelva axios

    // inicar una variable conteo inicial + X porcentual...
    // let inicializacionDeCount = lista.length * porcentual
    return {
      // count: ref(inicializacionDeCount)
      count: ref(0),
      userName: "",
      lista: [
        { nombre: "P1", comision: "A" },
        { nombre: "Matemática", comision: "B" },
      ],
      listaUsers: [],
    };
  },
  // methods en un componente... son las funciones.
  actions: { 
    borrar(nombre) {
      // Primer habría que borrarlo del back... a través de axios.delete...
      // si la respuesta fuera favorable... recién ahí... borrar el fron... sino mostrar mensaje de error
      let index = this.lista.findIndex((materia) => materia.nombre == nombre);
      this.lista.splice(index, 1);
      console.log(this.lista);
    },
    agregar(materia) {
      // mediante axios.post("url/cars, materia")... then... 
      this.lista.push({ ...materia });
      // .catch... tirará un alert de error.
      this.count++;
      console.log(this.count);
    },
    async fetchUsers() {
      await axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          this.listaUsers = response.data.results;
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  getters: {
    getTablaUsuarios() {     
      if (this.listaUsers.length <= 0) {
       
        return  this.fetchUsers();
      } else {
        return this.listaUsers;
      }
      
    },
  },
});
