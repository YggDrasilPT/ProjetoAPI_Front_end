<template>
  <div>
    <div class="flex-container">
      <div class="flex-item-left">
        <v-text-field
          label="Insira o Título do Projeto: "
          v-model="dados.title"
        ></v-text-field>
        <v-text-field
          label="Insira o URL do Projeto:"
          v-model="dados.url"
        ></v-text-field>
        <v-text-field
          label="Insira o Autor do Projeto: "
          v-model="dados.author"
        ></v-text-field>
        <v-text-field
          label="Insira as Keywords do Projeto: "
          v-model="dados.keywords"
        ></v-text-field>
        <v-text-field
          label="Insira a Descrição do Projeto: "
          v-model="dados.description"
        ></v-text-field>

        <v-btn v-on:click="submitFile()">Submit</v-btn>
      </div>

      <div class="flex-item-right">
        <form id="form" role="search">
          <input type="search" id="query" name="q" placeholder="Search..." aria-label="Search through site content">


          <button class="adminsearch"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dados: {
        title: "",
        url: "",
        author: "",
        keywords: "",
        description: "",
      },
    };
  },
  methods: {
    submitFile() {
      return axios.post(
        "https://api-das-fotos-default-rtdb.europe-west1.firebasedatabase.app/.json",
        this.dados,
        this.$router.push("/Favorites")
      );
    },
  },
};
</script>

<style scoped>
.adminsearch {
  margin: 10px;
}

form {
  background-color: #ffffff;
  width: 300px;
  height: 44px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
}
input {
  all: unset;
  font: 16px system-ui;
  color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  padding: 6px 10px;
}
::placeholder {
  color: rgb(68, 65, 65);
  opacity: 0.7;
}

* {
  box-sizing: border-box;
}

.flex-container {
  margin: 10px;
  margin-top: 250px;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
  box-shadow: 0 3px 10px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%);
  
}

.flex-item-left {
  margin: 20px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 10px;
  flex: 50%;
  color: #ffffff;
  height: 500px;
}

.flex-item-right {
  background-color: #f1f1f1;
  padding: 10px;
  flex: 50%;
}

/* Responsive layout - makes a one column-layout instead of two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
</style>