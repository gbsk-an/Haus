<template>
  <div class="hero">
    <div class="hero-background">
      <img
        src="@/assets/background.png"
        class="hero-background_image"
        alt="background"
        loading="lazy"
      />
    </div>
    <div class="hero-text">
      <h1 class="hero-text_title">Alcohol for the<br />modern drinker</h1>
      <p class="hero-text_description">
        Light and refreshing flavors made with real, clean ingredients you<br />can
        feel good about. Just pour, sip, and enjoy.
      </p>
      <router-link :to="{ name: 'catalog' }" class="navigation-item">
        <btn-transparent>Shop all</btn-transparent>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
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
</style>
