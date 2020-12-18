<template>
  <div class="add_article">
    <h1>Add new Cat Article</h1>
    <!-- <form @submit.prevent="addArticle" v-if="!submitted"> -->
    <form @submit.prevent="addArticle">
      <label for="title">Title: </label>
      <input type="text" name="title" v-model.lazy="article.title" required />
      <label for="content">Content: </label>
      <textarea name="content" v-model.lazy="article.content"></textarea>
      <div class="categories">
        <label>Categories:</label>
        <div class="checkboxes">
          <label>
            <input type="checkbox" value="catfriends" v-model="article.categories" />
            <span>Catfriends</span>
          </label>
          <label>
            <input type="checkbox" value="food" v-model="article.categories" />
            <span>Food</span>
          </label>
          <label>
            <input type="checkbox" value="toys" v-model="article.categories" />
            <span>Toys</span>
          </label>
        </div>
      </div>
      <div class="authors">
        <label for="author">Author:</label>
        <select name="author" v-model="article.author">
          <option value="" disabled selected>Choose author</option>
          <option v-for="x in authors" :key="x">{{ x }}</option>
        </select>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        Add Article
      </button>
    </form>
    <h6 class="thanks" v-if="submitted">Thanks for adding your article.</h6>
    <div class="preview">
      <h5>Preview Cat Article</h5>
      <p>Title: {{ article.title }}</p>
      <p>Content:</p>
      <p>{{ article.content }}</p>

      <p>Categories:</p>
      <ul>
        <li v-for="category in article.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p>Author: {{ article.author }}</p>
    </div>
    <!-- <div class="array">
      <h6>Articles</h6>
      <ul>
        <li v-for="(article, index) in articles" :key="index">{{ index }}:{{ article }}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddArticle",
  data() {
    return {
      //för att visa på denna sidan
      // articles: [],
      article: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["Truls", "Filip", "Hugo"],
      submitted: false,
    };
  },
  methods: {
    addArticle() {
      // this.articles.push(this.article);
      //this.articles = [...this.articles, this.article];

      axios
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.article.title,
          body: this.article.content,
          userId: 1,
        })
        .then((response) => console.log("response_add", response.data))
        .catch((error) => console.log("error", error));
      this.submitted = true;
    },
  },
};
</script>

<style lang="scss">
.add_article {
  max-width: 600px;
  margin: 0 auto;
  form {
    border: 2px solid #ffcdd2;
    padding: 24px;
    textarea {
      height: 10rem;
    }
    .categories {
      padding: 1rem 0;
      label {
        margin-right: 1rem;
      }
    }
    select {
      display: block;
    }
    .btn {
      margin-top: 2rem;
    }
  }
  .preview {
    ul {
      margin-left: 2rem;
      list-style-type: disc;
      li {
        list-style-type: disc;
      }
    }
    padding: 24px;
    margin-top: 1rem;
    border: 2px solid #ffcdd2;
    h5 {
      margin-top: 0;
    }
  }
}
</style>
