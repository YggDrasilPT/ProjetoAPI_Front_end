<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item, id) in info" :key="id">
      <v-img
        :height="item.previewHeight"
        :width="item.previewWidth"
        :src="item.previewURL"
      > 
      </v-img>
      <p> {{item.tags}} </p>
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
      .get(
        "https://pixabay.com/api/?key=21396064-2eac16d1bf0138a0d22abf7bc&q=yellow+flowers&image_type=photo"
      )
      .then(response => (this.info = response.data.hits));
  },

}

</script>
