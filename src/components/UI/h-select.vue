<template>
    <div class="v-select" >
        <p class="v-select_title">Sort by:</p>
        <p 
            @click="areOptionsVisible = !areOptionsVisible"
        >
            {{selected}}
        </p>   
        <div 
            class="options" 
            v-if="areOptionsVisible"
        >
            <p 
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
            {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "h-select",
        props: {
            options: {
                type: Array,
                default() {
                    return []
                } 
            },
            selected: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                areOptionsVisible: false
            }
        },
        methods: {
            selectOption(option) {
                this.$emit('select', option)
                this.areOptionsVisible = false
            },
            hideSelect () {
                this.areOptionsVisible = false
            }
        }, 
        mounted() {
            document.addEventListener('click', this.hideSelect.bind(this), true)
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideSelect)
        },     
    }
</script>

<style scoped>
    .v-select {
        position: relative;
        padding: 1em 0 0 .6em;
        cursor: pointer;
        border: 1px solid #0f0f0f93;
        width: 200px;
    }
    .options {    
        position: absolute;  
        left: 0;  
        padding: .7em;
        width: 100%;
        border: 1px solid #141414;      
        background-color: #ffffff;
    }
    .v-select_title {
        margin: 0 0 1em;
    }
</style>