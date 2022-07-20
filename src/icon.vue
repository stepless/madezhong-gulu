<template>
    <svg class="g-icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>
<script>
export default {
    props:['name']
}
</script>
<style lang="scss" scoped>
    .g-icon{
        width: var(--font-size);
        height: var(--font-size);
        vertical-align: middle;
    }
</style>