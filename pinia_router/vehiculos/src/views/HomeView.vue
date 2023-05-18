<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import Tabla from "../components/Tabla.vue";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { agregar } = store;
const materia = {
  id: count.value,
  nombre: "",
  comision: "",
};
</script>
<template>
  <div class="row pt-4">
    <div class="col-md-9">
      <h1>Materias Inscriptas</h1>
      <RouterLink to="/users"><button class="btn btn-warning m-2">Usuarios</button></RouterLink>
      <Tabla></Tabla>
    </div>
    <div class="col-md-3">
      <h2>Nueva materia</h2>
    <div class="form-group">
        <label for="nombre">Materia</label>
        <input
          v-model="materia.nombre"
          type="text"
          class="form-control"
          id="nombre"
          aria-describedby="nombreAyuda"
        />
        <small id="nombreAyuda" class="form-text text-muted"
          >Ingrese la nombre.</small
        >
      </div>
      <div class="form-group">
        <label for="comision">Comision</label>
        <input
          v-model="materia.comision"
          type="text"
          class="form-control"
          id="comision"
          aria-describedby="comisionAyuda"
        />
        <small id="comisionAyuda" class="form-text text-muted"
          >Disponible de la A a la E</small
        >
      </div>
      <button @click="agregar(materia)">Agregar</button>
    </div>
  </div>
</template>
