<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from "@/stores/UserStore.js"


const props = defineProps({

  fullname: {
    type: String,
    required: true,
  },
  objectId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    require: true
  }

});
console.log (props.fullname);

const userStore = useUserStore();
userStore.fullname = props.fullname
userStore.userId = props.userId
userStore.objectId = props.objectId



</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/reservations">Reservierungen</RouterLink>
    <RouterLink to="/about">Über</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  
  display: flex;
  justify-content: space-around;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  border-bottom: 2px solid #42b983;
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 1.2em;
  padding: 0.4em;
  margin: 1em;
}

input[type="text"],
input[type="date"],
select {
  padding: 0.4em;
  border: none;
  border-bottom: 2px solid #42b983;
  font: inherit;
}

label {
  text-align: right;
}

label::after {
  content: ":";
}</style>
