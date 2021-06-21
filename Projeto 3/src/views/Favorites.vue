<template>
  <div>
    <div class="center"><p style="font-size:50px;">Favorites</p></div>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(item, id) in info" :key="id">
          <div class="card">
            <img
              class="card-img-top portfolio-card__image"
              :src="item.url"
              alt="Card image cap"
            />
            <div class="card-body">
              <h6
                class="card-subtitle mb-2 portfolio-card__category portfolio-card__category__offices"
              >
                {{ item.keywords }}
              </h6>
              <h4 class="card-title mb-2 portfolio-card__title">
                {{ item.author }}
              </h4>
              <p class="card-text portfolio-card__text">
                {{ item.description }}
              </p>
              <p>
                <span
                  class="portfolio-card__stage portfolio-card__stage__construction"
                  ><i class="fas fa-hammer portfolio-card__stage__icon"></i
                  >Construction</span
                >
              </p>
              <p>
                <button class="favoritesbutton"><i class="fa fa-star "></i></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://api-das-fotos-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then((response) => (this.info = response.data));
  },
};
</script>

<style>
.center {
  text-align: center;
}

.card {
  margin: 2rem 4rem 1rem 1rem;
  border: none;
  border-radius: 0px;
  box-shadow: -2px 1px 8px 1px lightgrey;
}

.portfolio-card__image {
  max-height: 18rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.portfolio-card__title {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 10%;
  
}

.portfolio-card__category {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
 
}

.portfolio-card__category__offices {
  color: rgb(255, 0, 0);
  padding-top: 20px;
  margin-left: 10%;
}

.portfolio-card__category__industrial {
  color: blue;
}

.portfolio-card__category__retail {
  color: green;
}

.portfolio-card__text {
  font-family: "Abel", sans-serif;
  font-size: 1rem;
  padding-bottom: 10px;
  margin-left: 10%;
}

.portfolio-card__stage {
  color: white;
  text-transform: uppercase;
  padding: 6px;
  font-family: "Barlow Condensed", sans-serif;
}

.portfolio-card__stage__icon {
  margin-right: 5px;
}

.portfolio-card__stage__complete {
  background-color: green;
}

.portfolio-card__stage__construction {
  background-color: red;
  margin-left: 10%;
}

.portfolio-card__stage__planning {
  background-color: lightblue;
}
.favoritesbutton{
  background-color: #ffffff;
  color: #404040;
  /* box-shadow: 0 3px 50px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%); */
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: -2px 1px 8px 1px lightgrey;

  margin-left: 96%;
  margin-top: 0%;
  margin-block-end: -15px;

  transition-duration: 0.8s;
  overflow: auto;
}

.favoritesbutton:hover{
  background-color: #404040;
  color: #ffffbb;
  /* box-shadow: 0 3px 50px rgb(0 0 0 / 23%), 0 3px 10px rgb(0 0 0 / 16%); */
  height: 35px;
  width: 35px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: -2px 1px 8px 1px lightgrey;

  margin-left: 96%;
  margin-top: 0%;
  margin-block-end: -15px;
}





.portfolio-card__link {
  font-family: "Barlow Condensed", sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: grey;
  text-decoration: underline;
  transition: 0.3s;
}

.portfolio-card__link:hover {
  color: black;
}
</style>
