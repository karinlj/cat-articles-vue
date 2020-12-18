<template>
  <div class="tabbed_content">
    <ul class="my_tabs">
      <!-- <li data-target="#about" class="active">About</li>
      <li data-target="#contact" class="">Contact</li> -->
      <li class="my_tab">
        <a
          @click.prevent="setActive('about')"
          :class="{ active: isActive('about') }"
          >About</a
        >
      </li>
      <li class="my_tab">
        <a
          @click.prevent="setActive('contact')"
          :class="{ active: isActive('contact') }"
          >Contact</a
        >
      </li>
    </ul>
    <div class="my_panels">
      <div class="my_panel" :class="{ active: isActive('about') }">
        <h6>Panel about</h6>
        <p>
          And sometimes switches in french and say "miaou" just because well why
          not find empty spot in cupboard and sleep all day and leave fur on
          owners clothes. Adventure always good now the other hand, too.
        </p>
      </div>
      <div class="my_panel" :class="{ active: isActive('contact') }">
        <h6>Panel contact</h6>
        <p>
          Russian blue run as fast as i can into another room for no reason and
          hide from vacuum cleaner so i can haz but grab pompom in mouth and put
          in water dish eat and than sleep on your face.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      activeItem: "about",
    };
  },
  methods: {
    setActive(menuItem) {
      //sets new active tab
      this.activeItem = menuItem;
      //= is assigned to- put i variable
      //   console.log("activeItem", this.activeItem);
      //   console.log("menuItem", menuItem);
    },
    isActive(menuItem) {
      //returns currently active tab
      console.log("activeItem", this.activeItem);
      console.log("menuItem", menuItem);
      return this.activeItem == menuItem;
      //== is equal to
    },
  },
};
</script>

<style lang="scss">
.tabbed_content {
  max-width: 800px;
  margin: 0 auto;
  ul.my_tabs {
    li.my_tab {
      display: inline-block;
      border-radius: 3px;
      cursor: pointer;
      margin-right: 10px;
      a {
        background: pink;
        text-decoration: none;
        padding: 0.5rem;
        &.active {
          border-bottom: 2px solid deeppink;
        }
      }
    }
  }
  .my_panels {
    .my_panel {
      display: none;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 3px;
      &.active {
        display: block;
      }
    }
  }
}
</style>
