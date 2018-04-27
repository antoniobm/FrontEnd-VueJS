<template>
  <div>
      <table>
        <tr>
            <th>Image</th>
            <th>Title</th> 
            <th></th>
        </tr>
            <tr v-for="(item, index) in items" :key="index">
                <td><img  width="100" :src="item.image" :alt="item.name" /></td>
                <td>{{ item.name }}</td>
                <td>
                    <button class="buttonList" v-on:click="show(index)">Edit</button>
                    <button class="buttonList" v-on:click="removeItem(index)">Remove</button>
                </td>
            </tr>       
          </table>
        <modal name="edit">
            <div class="modalContent">
            <h3>Insert new data:</h3><br/>
            Image: <input class='modalInput' type="text"  v-model="body.image" placeholder="www.vue.com/image.png"><br/>
            Title: <input class="modalInput" type="text" v-model="body.name" placeholder="Vue"><br/>
            <button class="buttonModal" v-on:click="hide()" >Save</button>
            </div>
        </modal>
    </div>
</template>
<script>
import vmodal from "vue-js-modal";
import apiAxios from "../router/apiAxios";
export default {
  name: "items",
  mounted() {
    this.insertData();
  },
  props: {
    name: String,
    image: String
  },
  methods: {
    insertData() {
      apiAxios
          .request("get", "/item")
        .then(response => {
          this.items = response.data.item;
        })
        .catch(e => {
          console.log(e);
        });
    },
    add: function(body) {
      console.log(body);
      return new Promise((resolve, reject) => {
        apiAxios
          .request("post", "/item", body)
          .then(response => {
            this.items.push(response.data.item);
            resolve();
          })
          .catch(error => {
            reject();
            console.log(error);
          });
      });
    },

    removeItem(index) {
      var item = this.items[index];
      var id = item._id;
      console.log(id);
      apiAxios
        .request("delete", `/item/${id}`)
        .then(response => {
          this.items.splice(index, 1);
        })
        .catch(error => {
          console.log(error);
        });
    },

    updateItem(index) {
      console.log(index);
      var item = this.items[index];
      var id = item._id;
      console.log(id);
      return new Promise((resolve, reject) => {
        apiAxios
          .request("put", `/item/${id}`, this.body)
          .then(response => {
            console.log(response.data.item)
            this.items.splice(index, 1, response.data.item);
            console.log(this.items[index])
            resolve();
          })
          .catch(error => {
            console.log(error);
            reject();
          });
      });
    },

    show(index) {
      this.currentIndex = index;
      this.$modal.show("edit");
    },

    hide() {
      if (this.body.name != "" && this.body.image != "") {
        this.updateItem(this.currentIndex)
          .then(() => {
            this.body.name = "";
            this.body.image = "";
          })
          .catch(() => {});
        this.$modal.hide("edit");
      } else {
        alert("Please fill in all fields ");
      }
    }
  },

  data: function() {
    return {
      items: [],
      body: {
        name: "",
        image: ""
      },
      currentIndex: ""
    };
  }
};
</script>b
<style>
modalInput {
  display: inline-block;
  height: 30px;
  font-size: 16px;
  width: 250px;
  border: 1px solid #ccc;
  border-width: 0px 0px 1px 0px;
  padding: 0px 5px;
  outline: none;
}
modalInput:hover,
modalInput:focus {
  border-color: #42b983;
}
h1,
h2,
h3 {
  font-weight: normal;
}
.modalContent {
  text-align: center;
  margin-top: 7%;
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
table {
  width: 100%;
  overflow: hidden;
  background: #fefefe;
  width: 70%;
  margin: 5% auto 0;
  border-radius: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}
th,
td {
  width: 50%;
  padding: 18px 28px 18px;
  text-align: center;
  border-radius: 10px;
  border-top: 1px solid #e0e0e0;
  border-right: 0.5px solid #e0e0e0;
}
th {
  padding-top: 22px;
  color: white;
  background: #42b983;
}
td.first,
th.first {
  text-align: left;
}
td.last {
  border-right: none;
}

.buttonList {
  background-color: rgba(204, 204, 204, 0.164);
  border: none;
  color: black;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 7.5px;
  width: 75px;
  text-align: center;
  font-size: 12px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

.buttonList:hover {
  opacity: 1;
}
.buttonModal {
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 7.5px;
  width: 100px;
  text-align: center;
  font-size: 12px;
  margin: 20px 2px;

  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

.buttonModal:hover {
  opacity: 1;
  background-color: #3da978;
}
</style>
