<template>
    <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"/>
    </svg>
</template>
<script>
export default {
    props:{
        icon:{
            type:String,
        }
    }
}
</script>
<style lang="scss" scoped>
    .icon{
        width: var(--font-size);
        height: var(--font-size);
        vertical-align: middle;
    }
</style>