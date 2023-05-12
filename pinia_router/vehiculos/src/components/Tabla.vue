<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { borrar, lista } = store;
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Marca</th>
        <th scope="col">Modelo</th>
        <th scope="col">Opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(auto, index) in lista" :key="index">
        <th scope="row">{{ auto.id }}</th>
        <td>{{ auto.marca }}</td>
        <td>{{ auto.modelo }}</td>
        <td>
          <button class="btn btn-secondary">editar</button
          ><button @click="borrar(auto.id)" class="btn btn-danger ml-2">
            borrar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
