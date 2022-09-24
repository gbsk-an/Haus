<template>
    <div class="feedbacks">
        <div class="feedbacks-item">
            <h4 class="feedbacks-title">"What makes Haus so special is its incredible flavors."</h4>
            <img src="../assets/food-and-wine.svg" alt="food and wine logo">
        </div>
        <div class="feedbacks-item">
            <h4 class="feedbacks-title">“For the wine or cocktail lover who’s tried it all and wants something new and refreshing.”</h4>
            <img src="../assets/new-yourk-times.svg" alt="the new yourk times logo">
        </div>
        <div class="feedbacks-item">
            <h4 class="feedbacks-title">“Cleaner, responsibly sourced, and lower in alcohol.”</h4>
            <img src="../assets/bon-appetit.svg" alt="bon appetit logo">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feedbacks",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style scoped>
    .feedbacks {
        margin: 0 auto;
        padding-top: 3.4em;
        max-width: 1320px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12em;
    }
    .feedbacks-item {
        text-align: center;
    }
    .feedbacks-title {
        margin-bottom: 1.6em;
        color: #141414;
        font-size: 18px;
        font-weight: 600;
        line-height: 32px;
    }
</style>