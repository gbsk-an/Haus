<template>
  <div class="mobile-hero" v-if="mobileWidth">
    <div class="mobile-hero_title">
      <h1>Alcohol for the modern drinker</h1>
    </div>    
    <p class="mobile-hero_description">
      Light and refreshing flavors made with real, clean ingredients you can
      feel good about. Just pour, sip, and enjoy.
    </p>
    <router-link :to="{ name: 'catalog' }">
      <btn-transparent class="mobile-hero_button">Shop all</btn-transparent>
    </router-link>
  </div>
  <div class="hero" v-else>
    <div class="hero-background">
      <img
        src="@/assets/background.png"
        class="hero-background_image"
        alt="background"
        loading="lazy"
      />
    </div>
    <div class="hero-text">
      <h1 class="hero-text_title">Alcohol for the modern drinker</h1>
      <p class="hero-text_description">
        Light and refreshing flavors made with real, clean ingredients you can
        feel good about. Just pour, sip, and enjoy.
      </p>
      <router-link :to="{ name: 'catalog' }">
        <btn-transparent>Shop all</btn-transparent>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  data: () => ({
    mobileWidth: false,
  }),
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
        this.mobileWidth = window.innerWidth <= 576;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/scss/variables";
.hero {
  display: flex;
  gap: 9em;
  background-color: $primary;  
  &-background {
    &_image {
      height: 100%;
    }
  }
  &-text {
    margin: 15em 0 6em;
    &_title {
      margin: 0 0 1.2em;
    }
    &_description {
      margin: 0 0 1em;
    }
  }
}
.mobile-hero {
  position: relative;
  padding: 6em 1em;
  display: flex;
  flex-direction: column;
  gap: 2em;
  background:linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(17, 17, 17, 0.7) 100%), url('@/assets/background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  &_title {
    padding: 1em;
    margin-bottom: 1.4em;
    background-color: $primaryClearAlt;
    box-shadow: $shadowDefault;
    opacity: .8;
    text-align: center;

  }
  &_description {
    text-align: justify;
  }
  &_button {
    background-color: $themeWhite;
  }
}
</style>
