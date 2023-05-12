<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      perro: "Wolfy",
      listado: [
        { nombre: "Juan", apellido: "Perez", edad: 23 },
        { nombre: "Juana", apellido: "Rodriguez", edad: 25 },
        { nombre: "Manuela", apellido: "Pedraza", edad: 42 },
      ],
      persona: {
        id: 0,
        nombre: "",
        apellido: "",
        edad: 0,
      },
      numero: 10,
      tipoInput: "text",
      tipoClase: "form-control-range",
      esVerdadero: false,
    };
  },
  computed: {
    numeroAlCuadrado() {
      return this.numero * this.numero;
    },
  },
  methods: {
    sumar(num) {
      return num + 78;
    },
    borrar(index) {
      this.listado.splice(index, 1);
    },
    agregar(persona) {
      this.listado.push({ ...persona });
    },
  },
};
</script>

<template>
  <Navbar />
  <h1>ESTO ES EL TITULO DE LA PAGINA</h1>
  <h1>{{ perro }}</h1>
  <h1>{{ numeroAlCuadrado }}</h1>
  <h1>{{ sumar(100) }}</h1>

  // v-if, v-else, v-show, v-for, v-model, v-bind :, v-on @

  <h1>{{ listado }}</h1>

  <input :type="tipoInput" v-bind:class="tipoClase" />

  <h1 v-if="esVerdadero">Texto que se muestra si es verdadero</h1>
  <h1 v-else="esVerdadero">Texto que se muestra cuando es falso</h1>
  <h1 v-show="esVerdadero">Texto que se muestra si es verdadero</h1>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Edad</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(persona, index) in listado" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ persona.nombre }}</td>
        <td>{{ persona.apellido }}</td>
        <td>{{ persona.edad }}</td>
        <td>
          <button class="btn btn-warning">Editar</button
          ><button @click="borrar(index)" class="btn btn-danger">Borrar</button>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <form>
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input
        v-model="persona.nombre"
        type="text"
        class="form-control"
        id="nombre"
        aria-describedby="nombreAyuda"
      />
      <small id="nombreAyuda" class="form-text text-muted"
        >Ingrese el nombre.</small
      >
    </div>
    <div class="form-group">
      <label for="apellido">Apellido</label>
      <input
        v-model="persona.apellido"
        type="text"
        class="form-control"
        id="apellido"
      />
    </div>
    <div class="form-group">
      <label for="edad">Edad</label>
      <input
        v-model="persona.edad"
        type="number"
        class="form-control"
        id="edad"
        aria-describedby="edadAyuda"
      />
      <small id="edadAyuda" class="form-text text-muted"
        >Ingrese la edad.</small
      >
    </div>
    <button v-on:click="agregar(persona)" class="btn btn-primary">
      Agregar
    </button>
  </form>
</template>

<style></style>
