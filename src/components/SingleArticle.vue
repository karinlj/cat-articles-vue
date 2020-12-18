<template>
  <div class="single_article">
    <h1>My article</h1>

    <div class="card red lighten-4">
      <div class="card-content">
        <h4>{{ article.title }}</h4>
        <p>{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleArticles",
  data() {
    return {
      article: {},
      //hämta från url
      //single_id kallade jag param i routes.js
      singleId: this.$route.params.single_id,
    };
  },
  methods: {},
  created() {
    axios
      //hämta just den artikeln med id:t från url:en
      .get("https://jsonplaceholder.typicode.com/posts/" + this.singleId)
      //   .then((response) => (this.article = response.data));
      .then((response) => {
        console.log("response_single", response.data);
        this.article = response.data;
      });
  },
};
</script>

<style lang="scss">
.single_article {
  max-width: 800px;
  margin: 0 auto;
}
</style>
