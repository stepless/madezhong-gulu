<template>
    <button>
        <slot></slot>
    </button>
</template>
<script>

</script>
<style lng="scss" scoped>
.g-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding:0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background-color: var(--button-bg);
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.g-button:hover{
    border-color: var(--border-color-hover);
}
.g-button:active{
    background-color: var(--button-active-bg);
}
.g-button .icon{
    order:1;
    margin-right: .1em;
    padding-bottom: .05em;
}
.g-button .content{
    order:2;
    line-height: 1.2em;
}
.g-button.icon-right .icon{
    order:2;
    margin-right: 0;
    margin-left: .1em;
}
.g-button.icon-right .content{
    order:1;
}
@keyframes spin {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.loading{
    animation:spin 2s infinite linear;
}
</style>
