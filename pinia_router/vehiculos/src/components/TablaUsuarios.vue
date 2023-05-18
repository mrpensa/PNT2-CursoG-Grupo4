<script setup>
import {onMounted} from 'vue'
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const { count } = storeToRefs(store);
const { borrar, listaUsers, getTablaUsuarios } = store;
onMounted(() => getTablaUsuarios)
</script>

<template> 

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">UserName</th>
        <th scope="col">Mail</th>
        <th scope="col">Dirección</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in getTablaUsuarios" :key="index">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.image }}</td>
        <td>{{ user.address.street }} {{ user.address.suite }}, {{ user.address.city }}</td>
        <td>
          <button class="btn btn-secondary">editar</button
          ><button @click="borrar(auto.id)" class="btn btn-danger">
            borrar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
