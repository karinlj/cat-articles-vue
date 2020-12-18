import Vue from "vue";
import VueRouter from "vue-router";
import ShowArticles from "../components/ShowArticles";
import AddArticle from "../components/AddArticle";
import SingleArticle from "../components/SingleArticle";
import ExploringPage from "../components/ExploringPage";

Vue.use(VueRouter);
//new router instance
const catRouter = new VueRouter({
  routes: [
    {
      path: "/exploringPage",
      name: "ExploringPage",
      component: ExploringPage,
    },
    {
      path: "/",
      name: "ShowArticles",
      component: ShowArticles,
    },
    {
      path: "/add",
      name: "AddArticle",
      component: AddArticle,
    },
    {
      path: "/single/:single_id",
      name: "SingleArticle",
      component: SingleArticle,
    },
  ],
  mode: "history",
});

export default catRouter;
