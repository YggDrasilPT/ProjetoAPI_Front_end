<template>

<!-- 

<div v-for="(item, id) in info" :key="id">
      <v-img
        :height="item.previewHeight"
        :width="item.previewWidth"
        :src="item.previewURL"
      > 
      </v-img>
      <p> {{item.tags}} </p>
    </div>

-->
  <v-row style="padding-top:10%" >
    <v-col
      v-for="n in 19"
      :key="n"
      class="d-flex child-flex"
      cols="3"
      
    >
      <v-img
        :src="info[n].largeImageURL"
       
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
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
      .get(
        "https://pixabay.com/api/?key=21396064-2eac16d1bf0138a0d22abf7bc&q=yellow+flowers&image_type=photo"
      )
      .then(response => (this.info = response.data.hits));
  },

}

</script>
