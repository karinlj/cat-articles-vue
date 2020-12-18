<template>
  <nav>
    <ul class="links">
      <li>
        <router-link :to="{ name: 'ShowArticles' }" exact
          >Cat Articles</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'AddArticle' }" exact
          >Add Article</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'ExploringPage' }" exact
          >Exploring Page</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
nav {
  background: #444;

  ul.links {
    list-style-type: none;
    text-align: center;
    margin: 0;
    li {
      float: none;
      display: inline-block;
      margin: 0 10px;
      a {
        line-height: 3;
        color: #fff;
        text-decoration: none;
        // padding: 6px 8px;
        border-radius: 10px;
      }
      .router-link-active {
        background: #eee;
        color: #444;
      }
    }
  }
}
</style>
