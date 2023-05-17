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
        <th scope="col">Materia</th>
        <th scope="col">Comision</th>
        <th scope="col">Remover</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(materia, index) in lista" :key="index">
        <td>{{ materia.nombre }}</td>
        <td>{{ materia.comision }}</td>
        <td>
        <button @click="borrar(materia.nombre)" class="btn btn-danger ml-2">
            borrar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
