<template>
  <div class="follow">
    <div class="follow-content">
      <div class="follow-content_mood">
        <h2>Set the mood</h2>
        <p>
          Curated playlists from Woody + Helena, plus some of our friends and
          favorite brands.
        </p>
        <btn-white>Spotify</btn-white>
      </div>
      <div class="follow-content_social">
        <p>Follow us, share us, drink Ha(us)</p>
        <div class="flex">
          <a href="#" class="follow-content_social-link">Instagram</a>
          <a href="#" class="follow-content_social-link">Facebook</a>
          <a href="#" class="follow-content_social-link">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "follow-us",
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/variables";
.follow {
  padding: 5em 0;
  width: 100%;
  background-image: url("../assets/background_4.png");
  background-repeat: no-repeat;
  background-size: cover;

  &-content {
    margin: 0 auto;
    max-width: 1320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 3em;

    &_mood {
      padding: 2em 5em;
      width: fit-content;
      text-align: center;
      background-color: $themeBlackAlt;

      & > h2 {
        margin: 0;
        color: $themeWhite;
        font-weight: 400;
        font-size: 53px;
        line-height: 80px;
      }

      & > p {
        color: $themeWhite;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      }
    }

    &_social {
      padding: 2em 5em;
      width: fit-content;
      text-align: center;
      background-color: $themeBlackAlt;

      & > p {
        margin: 0 0 1em;
        color: $themeWhite;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
      }

      &-link {
        color: $whiteClear;
        text-decoration: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }
}

.flex {
  display: flex;
  justify-content: space-evenly;
}
</style>
