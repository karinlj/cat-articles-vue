<template>
  <div class="show_articles">
    <h1>All Cat articles</h1>
    <input type="text" v-model="search" placeholder="Search Articles" />
    <ul>
      <!-- computed prop -->
      <li v-for="article in filteredArticles" :key="article.id">
        <div class="card red lighten-4">
          <div class="card-content">
            <i class="material-icons delete" @click="deleteArticle(article.id)"
              >delete</i
            >
            <router-link
              :to="{ name: 'SingleArticle', params: { single_id: article.id } }"
            >
              <h5 class="title">{{ article.title }}</h5>
            </router-link>
            <p class="title">{{ article.body }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ShowArticles",
  components: {},
  data() {
    return {
      articles: [],
      search: "",
    };
  },
  methods: {
    deleteArticle(id) {
      //console.log(id);
      this.articles = this.articles.filter((article) => {
        return article.id !== id;
      });
    },
  },

  created() {
    //get request, returns a promise
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      //do something when posts are fetched
      .then((response) => {
        // console.log("response.data_get", response.data);
        this.articles = response.data;
      })
      .catch((error) => console.log("error", error));
  },
  computed: {
    filteredArticles() {
      return this.articles.filter((article) => {
        return article.title.match(this.search);
      });
    },
  },
};
</script>

<style lang="scss">
.show_articles {
  max-width: 800px;
  margin: 0 auto;

  a {
    color: inherit;
    text-decoration: underline;
  }
  ul {
    margin-top: 1rem;
    .delete {
      position: absolute;
      top: 6px;
      right: 6px;
      cursor: pointer;
      font-size: 1.4rem;
      color: #f44336;
    }
  }
}
</style>
