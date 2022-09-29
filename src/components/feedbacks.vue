<template>
    <div class="feedbacks">
        <div class="feedbacks-item">
            <p class="feedbacks-item_title">"What makes Haus so special is its incredible flavors."</p>
            <img src="../assets/food-and-wine.svg" alt="food and wine logo">
        </div>
        <div class="feedbacks-item">
            <p class="feedbacks-item_title">“For the wine or cocktail lover who’s tried it all and wants something new and refreshing.”</p>
            <img src="../assets/new-yourk-times.svg" alt="the new yourk times logo">
        </div>
        <div class="feedbacks-item">
            <p class="feedbacks-item_title">“Cleaner, responsibly sourced, and lower in alcohol.”</p>
            <img src="../assets/bon-appetit.svg" alt="bon appetit logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "feedbacks",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
.feedbacks {
    margin: 0 auto;
    padding: 3.4em 0;
    max-width: 1320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12em;

    &-item {
        text-align: center;

        &_title {
            margin-bottom: 1.6em;
            color: #141414;
            font-size: 18px;
            font-weight: 600;
            line-height: 32px;
        }
    }
}
</style>