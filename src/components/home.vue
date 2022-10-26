<template>
  <Header />
  <Hero />
  <Feedbacks />
  <IntroToAperol />
  <FollowUs />
  <Footer />
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Hero from "@/components/hero.vue";
import Feedbacks from "@/components/feedbacks.vue";
import IntroToAperol from "@/components/intro-to-aperol.vue";
import FollowUs from "@/components/follow-us.vue";
export default {
  name: "home",
  components: {
    Header,
    Hero,
    Feedbacks,
    IntroToAperol,
    FollowUs,
    Footer,
  },
};
</script>
