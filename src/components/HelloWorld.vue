<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <router-link to="/itemList">Go to Table</router-link>
    <h2>Other Links</h2>
    <ul>
      <li>
        <a href="http://localhost:8080/NotFound" target="_blank">
          Not Found Page
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Antonio´s Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: white;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
