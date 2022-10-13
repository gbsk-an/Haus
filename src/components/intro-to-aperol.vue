<template>
    <div class="intro">
        <div class="intro-item">
            <img src="../assets/background_2.png">
        </div>
        <div class="intro-item intro-text">
            <div>
                <h2 class="intro-text_title">An intro to apéritifs</h2>
            </div>
            <div class="intro-text_description">
                <p>Apéritifs are a category of spirits with complex flavors derived from fruits, herbs, and botanicals. Their lighter alcohol content (less than whiskey, more than wine) makes them perfect to sip all evening.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intro-to-aperol"
    }
</script>

<style lang="scss" scoped>
.intro {
    margin: 0 auto;
    padding: 2em 0;
    max-width: 1320px;
    display: flex;
    flex-direction: column;

    &-text {
        padding: 2em 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8em;

        &_title {
            margin: 0;
            color: #141414;
            font-weight: 400;
            font-size: 53px;
            line-height: 80px;
        }

        &_description {
            text-align: justify;
            font-size: 18px;
            line-height: 32px;
            &>p {
                margin: 0;
                color: #141414;
            }
        }
    }
}
</style>