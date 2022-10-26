<template>
  <authorization-layout>
    <div class="authorization">
      <div class="authorization-section">
        <h1 class="authorization-section_title">Welcome</h1>
        <p class="authorization-section_info">Please login to continue.</p>
        <input-authorization
          type="email"
          placeholder="email"
          required
          v-model="email"
        />
        <input-authorization
          type="password"
          placeholder="password"
          required
          v-model="password"
        />
        <btn-black>log in</btn-black>
        <div class="authorization-more">
          <router-link
            :to="{ name: 'register' }"
            class="authorization-more_item"
          >
            <div>Create account</div>
          </router-link>
          <router-link
            :to="{ name: 'forgot-password' }"
            class="authorization-more_item"
          >
            <div>Forgot your password?</div>
          </router-link>
        </div>
      </div>
    </div>
  </authorization-layout>
</template>

<script>
export default {
  name: "authorization",
  data() {
    return {
      email: "",
      passowrd: "",
    };
  },
  computed: {},
  methods: {
    login: function () {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.authorization {
  max-width: 600px;
  margin: 0 auto 10em;

  &-section {
    display: flex;
    flex-direction: column;
    gap: 1em;

    &_title {
      margin: 0 0 0.4em;
      color: #141414;
      font-size: 73px;
      font-weight: 700;
      line-height: 96px;
      opacity: 90%;
    }
    &_info {
      margin: 0;
      color: #141414;
      font-size: 18px;
      font-weight: 100;
      line-height: 32px;
    }
  }
  &-more {
    display: flex;
    justify-content: space-between;
    &_item {
      margin: 0;
      color: #141414;
      font-size: 18px;
      font-weight: 100;
      line-height: 32px;
    }
  }
}
</style>
