<template>
  <div class="pl-20 pr-20">
    <div class="flex place-items-center border-b border-teal-500 py-2">
      <input
        v-model="textInput"
        id ="inputPlace"
        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Things to do"
      />

      <button @click="AddTodoElement" class="btn" id="buttonAdd" style="background: rgb(1, 101, 35)">
        Add
      </button>
    </div>
    
    <div
      class="list-background"
      
      style="border: inset #ee7752, #e73c7e, #23a6d5, #23d5ab; height: 1000px"
    >
      <ListElement :todo="todo" v-for="todo in todoArray" :key="todo._id" />
    </div>
  </div>
</template>

// eslint-disable-next-line
<script>

import axios from "axios";
import ListElement from "./ListElement.vue";
export default {
  text: "Mainpage",
  components: {
    ListElement,
  },
  data() {
    return {
      textInput: "",
      todoArray: [],
    };
  },
  mounted() {
    this.GetTodoElements();
  },

  methods: {
    
    AddTodoElement() {
      let data = {
        text: this.textInput,
        status: 0,
      };
      axios
        .post("http://127.0.0.1:8086/CreateTodo", data)
        .then(function (response) {
          console.log(response);
        })
        .catch((error) => console.log(error));
      //location.reload();
      this.textInput = "";
    },

    GetTodoElements() {
      axios
        .get("http://127.0.0.1:8086/GetTodoElements")
        .then((response) => (this.todoArray = response.data))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style scoped>
.list-background {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
}
.btn {
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif;
  float: right;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
}
</style>
