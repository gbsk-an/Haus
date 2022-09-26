<template>
    <div class="v-select" >
        <p>Sort by:</p>
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
        width: 200px;
        margin-bottom: 1em;
        cursor: pointer;
        
    }
    .options {    
        position: absolute;    
        padding: .7em;
        width: 100%;
        border: 1px solid #141414;      
        background-color: #ffffff;
    }
    .options > p:hover {
        color: #0f0f0f;
    }
</style>