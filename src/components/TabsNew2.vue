<template>
  <div class="tabbed_content">
    <ul class="tabs">
      <li
        class="tab"
        v-for="(tab, index) in content"
        :key="index"
        @click="currentTab = index"
        :class="{ active: currentTab == index }"
      >
        {{ tab.tabTitle }}
      </li>
      <!-- <li
        class="tab"
        v-for="tab in content"
        :key="tab.id"
        @click="selectTab(tab.id)"
        :class="{ active: currentTab == tab.id }"
      >
        {{ tab.tabTitle }}
      </li> -->
    </ul>

    <div class="my_panels">
      <div
        class="my_panel"
        v-for="(tab, index) in content"
        :key="index"
        :class="{ active: currentTab == index }"
      >
        <h6>{{ tab.tabTitle }}</h6>
        <p>
          {{ tab.tabContent }}
        </p>
      </div>

      <!-- <div
        class="my_panel"
        v-for="tab in content"
        :key="tab.id"
        :class="{ active: currentTab == tab.id }"
      >
        <h6>{{ tab.tabTitle }}</h6>
        <p>
          {{ tab.tabContent }}
        </p>
      </div> -->
    </div>

    <!-- <ul class="tabs">
      <li class="tab" @click="selectTab(0)" :class="{ active: currentTab == 0 }">About</li>
      <li class="tab" @click="selectTab(1)" :class="{ active: currentTab == 1 }">Contact</li>
      <li class="tab" @click="selectTab(2)" :class="{ active: currentTab == 2 }">Profile</li>
    </ul>
    <div class="my_panels">
      <div class="my_panel" v-if="currentTab == 0">
        <h6>About</h6>
        <p>
          And sometimes switches in french and say "miaou" just because well why not find empty spot
          in cupboard and sleep all day and leave fur on owners clothes. Adventure always good now
          the other hand, too.
        </p>
      </div>
      <div class="my_panel" v-if="currentTab == 1">
        <h6>Contact</h6>
        <p>
          Russian blue run as fast as i can into another room for no reason and hide from vacuum
          cleaner so i can haz but grab pompom in mouth and put in water dish eat and than sleep on
          your face.
        </p>
      </div>
      <div class="my_panel" v-if="currentTab == 2">
        <h6>Profile</h6>
        <p>
          I hate cucumber pls dont throw it at me nya nya nyan i do no work yet get food, shelter,
          and lots of stuff just like man who lives with us, kitty scratches couch bad kitty so nap
          all day. Purr as loud as possible.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "TabsNew2",
  props: {
    content: Array,
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    // selectTab(selected) {
    //   console.log("selected", selected);
    //   this.currentTab = selected;
    // },
  },
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
      &.active {
        border-bottom: 2px solid deeppink;
      }
    }
  }
  .my_panels {
    .my_panel {
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 3px;
      display: none;
      &.active {
        display: block;
      }
    }
  }
}
</style>
