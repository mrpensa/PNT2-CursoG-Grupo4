<script setup>
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useCounterStore } from "../stores/counter";
import Tabla from "../components/Tabla.vue";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { agregar } = store;
const auto = {
  id: count.value,
  marca: "",
  modelo: "",
};
</script>
<template>
  <div class="row pt-4">
    <div class="col-md-9">
      <h1>Lista de Vehículos ({{ count }})</h1>
      <RouterLink to="/users"><button class="btn btn-warning m-2">Usuarios</button></RouterLink>
      <Tabla></Tabla>
    </div>
    <div class="col-md-3">
      <div class="form-group">
        <label for="id">Id</label>
        <input
          v-model="auto.id"
          type="text"
          class="form-control"
          id="id"
          aria-describedby="idAyuda"
        />
        <small id="idAyuda" class="form-text text-muted">Ingrese id.</small>
      </div>
      <div class="form-group">
        <label for="marca">Marca</label>
        <input
          v-model="auto.marca"
          type="text"
          class="form-control"
          id="marca"
          aria-describedby="marcaAyuda"
        />
        <small id="marcaAyuda" class="form-text text-muted"
          >Ingrese la Marca.</small
        >
      </div>
      <div class="form-group">
        <label for="modelo">Modelo</label>
        <input
          v-model="auto.modelo"
          type="text"
          class="form-control"
          id="modelo"
          aria-describedby="modeloAyuda"
        />
        <small id="modeloAyuda" class="form-text text-muted"
          >Ingrese el Modelo.</small
        >
      </div>
      <button @click="agregar(auto)">Agregar</button>
    </div>
  </div>
</template>
