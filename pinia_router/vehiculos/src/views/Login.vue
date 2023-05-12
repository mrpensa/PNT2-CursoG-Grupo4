<script>
import axios from "axios";
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  setup() {
    const store = useCounterStore();
    const { userName } = storeToRefs(store);
    return {
      userName,
    };
  },
  data() {
    return {
      user: {
        mail: "",
        pass: "",
      },
      vue: this,
    };
  },
  methods: {
    loguear: (user, vue) => {
      let respuesta = axios
        .post("http://localhost:3001/login", user)
        .then(function (response) {
          vue.userName = response.data.nombre;
          vue.$router.push("/");
        })
        .catch(function (error) {
          alert("Error de usuario y contraseña");
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <h1>Login</h1>
  <h1>{{ userName }}</h1>
  <form @submit.prevent="loguear(user, vue)">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        v-model="user.mail"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        v-model="user.pass"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<style></style>
