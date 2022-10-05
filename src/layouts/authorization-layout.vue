<template>
    <Header />  
    <div class="authorization-layout">        
        <slot>

        </slot>
    </div>
    <Footer />
</template>

<script>
    import Header from '@/components/header.vue';
    import Footer from '@/components/footer.vue';
    export default {
        name: "authorization-layout",
        components: {
            Header,            
            Footer,
        },
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
.authorization-layout {
    padding-top: 10em;
    padding-bottom: 10em;
}
</style>