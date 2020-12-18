<template>
  <div class="exploring">
    <h3>Exploring Page</h3>
    <h4>Accordion</h4>
    <Accordion></Accordion>
    <!-- 
    <Accordion
      v-for="(accordion, index) in accordions"
      :accordion="accordion"
      :index="index"
      :key="index"
      :open="accordion.open"
      @toggle-open="toggleOpen"
    ></Accordion> -->

    <h4>Tabs</h4>

    <TabsNew2 :content="tabData"></TabsNew2>
  </div>
</template>

<script>
// import Tabs from "./Tabs";
import TabsNew2 from "./TabsNew2";
import Accordion from "./Accordion";
export default {
  name: "ExploringPage",
  components: {
    TabsNew2,
    Accordion,
  },
  data() {
    return {
      accordions: [
        {
          id: 0,
          open: false,
          heading: "About",
          content:
            "And sometimes switches in french and say miaou. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Pushed the mug off the table destroy the blinds for sleep in the bathroom sink and jump launch to pounce upon little yarn mouse",
        },
        {
          id: 1,
          open: false,
          heading: "Contact",
          content:
            "Russian blue run as fast as i can into another room for no reason.  Run in circles please stop looking at your phone and pet me yet bite the neighbor's bratty kid. Kitty scratches couch bad kitty don't nosh on the birds. Lick plastic bags twitch tail in permanent irritation relentlessly pursues moth so play with twist ties and run at 3am.",
        },
        {
          id: 2,
          open: false,
          heading: "Profile",
          content:
            "I hate cucumber pls dont throw it at me nya nya nyan i do no work yet get food.  Shred all toilet paper and spread around the house human give me attention meow. Sitting in a box scratch at the door then walk away loved it, hated it, loved it, hated it be a nyan cat, feel great",
        },
      ],
      tabData: [
        {
          tabTitle: "About",
          id: 0,
          tabContent:
            "And sometimes switches in french and say miaou. Cat dog hate mouse eat string barf pillow no baths hate everything. Sniff all the things. Sleep on my human's head cuddle no cuddle cuddle love",
        },
        {
          tabTitle: "Contact",
          id: 1,
          tabContent:
            "Russian blue run as fast as i can into another room for no reason.  Kitty scratches couch bad kitty don't nosh on the birds. Lick plastic bags twitch tail in permanent irritation relentlessly pursues moth so play with twist ties and run at 3am.",
        },
        {
          tabTitle: "Profile",
          id: 2,
          tabContent:
            "I hate cucumber pls dont throw it at me nya nya nyan i do no work yet get food. Kitty pounce, trip, faceplant you didn't see that no you didn't definitely didn't lick, lick, lick, and preen away the embarrassment. Pushed the mug off the table destroy the blinds for sleep in the bathroom sink and jump launch to pounce upon little yarn mouse",
        },
      ],
    };
  },
  methods: {
    //accordions
    // toggleOpen(index) {
    //   this.accordions = this.accordions.map((accordion, i) => {
    //     //if the same as clicked on, toggle open
    //     if (index === i) {
    //       accordion.open = !accordion.open;
    //     } else {
    //       accordion.open = false;
    //     }
    //     //return
    //     return accordion;
    //   });
    // },
  },
};
</script>

<style lang="scss">
.exploring {
  max-width: 800px;
  margin: 0 auto;
}
</style>
