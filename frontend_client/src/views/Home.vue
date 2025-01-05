<template>
  <div class="content">
    <h1>Welcome to My personal site!</h1>
    <p class="typography" v-html="displayedText"></p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      journeyStages: [
        "Welcome to my journey as a self-taught developer.",
        "I started coding in 2021 when I was still in high school.",
        "I’ve learned a lot through hard work and perseverance.",
        "I love to play with hardware, and I'm passionate about computer vision and AI.",
        "If you want to contact me, feel free to send me an email at <a href='mailto:sahilnayak2056@gmail.com'>click here</a>.",
        "If you're into chess, I'm always down to <a href='https://www.chess.com/member/sah669'>play</a>!",
        "I solve math problems and sometimes code in Java, but the journey has just begun!",
        "Thanks for stopping by — feel free to explore my work and join me on this exciting adventure!"
      ],
      displayedText: "",
      typingSpeed: 150, // Speed at which each letter is typed
      delayBetweenStages: 800 // Delay before moving to the next sentence
    };
  },
  mounted() {
    this.typeJourney();
  },
  methods: {
    async typeJourney() {
      for (const stage of this.journeyStages) {
        // First, type out the current stage
        await this.typeText(stage);
        // After typing one stage, move to the next with a slight pause
        await this.sleep(this.delayBetweenStages);
      }
    },

    async typeText(stage) {
      for (let i = 0; i < stage.length; i++) {
        this.displayedText += stage[i];
        await this.sleep(this.typingSpeed);
      }
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
};
</script>

<style scoped>
.content {
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
}

h1 {
  font-family: "Source code pro", monospace;
  font-size: large;
  color: rgb(105, 248, 105);
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
}

.typography {
  font-family: 'M PLUS Code', monospace;
  font-size: 1rem;
  line-height: 1.5;
  color: rgb(189, 184, 184);
  text-align: left;
  margin: 0 auto;
  width: 60%;
  white-space: pre-wrap;
  overflow: hidden;
  transition: all 0.5s ease; /* Smooth transition for the effect */
}

a {
  color: #4c8bf5;
  text-decoration: none;
}

@media (max-width: 768px) {
  .typography {
    font-size: 0.9rem;
    width: 80%;
  }
  h1 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .typography {
    font-size: 0.8rem;
    width: 90%;
  }
  h1 {
    font-size: 1.2rem;
    font-family: 'M PLUS Code', monospace;
  }
}
</style>
