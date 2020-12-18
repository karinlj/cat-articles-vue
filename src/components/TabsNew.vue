<template>
  <div class="tabbed_content">
    <ul class="tabs">
      <li
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        @click="currentTab = index"
        :class="{ active: currentTab === index }"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="my_panels">
      <!-- <div class="my_panel" v-show="currentTab === 0"> -->
      <div class="my_panel" :class="{ active: currentTab === 0 }">
        <h6>About</h6>
        <p>
          And sometimes switches in french and say "miaou" just because well why
          not find empty spot in cupboard and sleep all day and leave fur on
          owners clothes. Adventure always good now the other hand, too.
        </p>
      </div>
      <!-- <div class="my_panel" v-show="currentTab === 1">    -->
      <div class="my_panel" :class="{ active: currentTab === 1 }">
        <h6>Contact</h6>
        <p>
          Russian blue run as fast as i can into another room for no reason and
          hide from vacuum cleaner so i can haz but grab pompom in mouth and put
          in water dish eat and than sleep on your face.
        </p>
      </div>
      <!-- <div class="my_panel" v-show="currentTab === 2"> -->
      <div class="my_panel" :class="{ active: currentTab === 2 }">
        <h6>Profile</h6>
        <p>
          I hate cucumber pls dont throw it at me nya nya nyan i do no work yet
          get food, shelter, and lots of stuff just like man who lives with us,
          kitty scratches couch bad kitty so nap all day. Purr as loud as
          possible.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsNew",
  data() {
    return {
      tabs: ["about", "contact", "profile"],
      currentTab: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.tabbed_content {
  max-width: 800px;
  margin: 0 auto;
  ul.tabs {
    li.tab {
      cursor: pointer;
      margin-right: 1rem;
      //  background: pink;
      &.active {
        border-bottom: 2px solid deeppink;
      }
    }
  }
  .my_panels {
    .my_panel {
      transition: opacity 0.15s linear;
      display: none;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 3px;
      &.fade {
        transition: opacity 1s linear;
      }
      &.fade:not(.show) {
        opacity: 0;
      }
      &.active {
        display: block;
      }
    }
  }
}
</style>
