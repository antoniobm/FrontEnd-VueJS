<template>
   <div class="hello">
     <h1>{{ msg }}</h1>
    <div class="inputs">
      <div>
      <h3>Image:</h3>
      <input type="text" v-model="body.image" placeholder="www.vue.com/image.png">
      </div>
      <div>
      <h3>Title:</h3>
      <input type="text" v-model="body.name"  placeholder="Vue">
      </div>
      <button class="button" v-on:click="add" ><span>Add </span></button><br></div>
    <items ref="update"></items><br/>
    <router-link to="/">Back to home</router-link>
    </div>
</template>
<script>
import items from "./Items";
import apiAxios from "../router/apiAxios";
export default {
  components: {
    items: items
  },
  name: "ItemList",
  data() {
    return {
      msg: "Items List",
      body: {
        name: "",
        image: ""
      }
    };
  },
  methods: {
    add: function(event) {
      if (this.body.name != "" && this.body.image != "") {
        this.$refs.update
          .add(this.body)
          .then(() => {
            this.body.name = "";
            this.body.image = "";
          })
          .catch(() => {});
      } else {
        alert("Please fill in all fields ");
      }
    }
  }
};
</script>
<style>
body {
  background-color: #42b9830c;
}
h1,
h2,
h3,
h4 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
input {
  background-color: #42b98300;
  display: inline-block;
  height: 30px;
  font-size: 16px;
  width: 250px;
  border: 1px solid #ccc;
  border-width: 0px 0px 1px 0px;
  padding: 0px 5px;
  outline: none;
}
input:hover,
input:focus {
  border-color: #42b983;
}
.inputs div {
  position: relative;
  display: inline-block;
}
h3 {
  position: relative;
  display: inline-block;
  font-weight: bold;
}
.button {
  display: inline-block;
  border-radius: 10px;
  background-color: #42b983;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 7.5px;
  width: 100px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  outline: none;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>


