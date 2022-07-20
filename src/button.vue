<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="icon && !loading" class="icon" :name = 'icon'></g-icon>
        <g-icon v-if="loading" class="loading icon" name = 'loading'></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default{
    props:{
        icon:{},
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
                return !(value !== 'left' && value !== 'right');
            }
        },
        loading:{
            type:Boolean,
            default: false,
        }
    }
}
</script>
<style lang="scss" scoped>
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
    &:hover{
        border-color: var(--border-color-hover);
    }
    &:active{
        background-color: var(--button-active-bg);
    }
    .icon{
        order:1;
        margin-right: .1em;
        padding-bottom: .03em;
    }
    .content{
        order:2;
        line-height: 1.2em;
    }
    &.icon-right .icon{
        order:2;
        margin-right: 0;
        margin-left: .1em;
    }
    &.icon-right .content{
        order:1;
    }
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
