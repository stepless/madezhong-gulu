<template>
    <svg class="icon">
        <use :xlink:href="`#i-${icon}`"/>
    </svg>
</template>
<script>
export default {
    props:{
        icon:{
            type:String,
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>

</style>