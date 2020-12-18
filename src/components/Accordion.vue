<template>
  <div>
    <div
      class="accordion"
      v-for="(accordion, index) in accordions"
      :key="index"
      :class="accordion.open ? 'open' : ''"
      @click="toggleOpen(index)"
    >
      <div class="heading">
        <p>{{ accordion.heading }}</p>
        <i class="material-icons arrow">expand_more</i>
      </div>
      <div class="content">
        {{ accordion.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",

  data() {
    return {
      accordions: [
        {
          id: 0,
          open: true,
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
    };
  },
  methods: {
    toggleOpen(i) {
      let oneAtTheTime = true;
      console.log("i", i);
      //  this.accordions.map((accordion, index) => {
      this.accordions.forEach((accordion, index) => {
        //i denna loop, när jag når detta index...
        if (index === i) {
          accordion.open = !accordion.open;
        } else if (oneAtTheTime) {
          accordion.open = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.accordion {
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 1rem auto;
  border-radius: 8px;
  .heading {
    cursor: pointer;
    transition: all 0.4s linear;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    .arrow {
      transition: all 0.3s linear;
    }
  }
  .content {
    max-height: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-out;
    opacity: 0;
  }
  &.open {
    // background: green;
    .heading {
      margin-bottom: 1rem;
      .arrow {
        transform: rotate(180deg);
      }
    }
    .content {
      opacity: 1;
      max-height: 200px;
    }
  }
}
</style>
