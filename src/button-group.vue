<template>
    <div class="g-button-group">
        <slot></slot>
    </div>    
</template>
<script>
export default {
    mounted(){
        for(let node of this.$el.children){
            let name = node.nodeName.toLowerCase();
            if(name !== 'button'){
                console.warn(`g-button-group的子元素应该为g-button，不能是${name}`)
            }
        }
    }
}
</script>
<style scoped>
.g-button-group{
    display:inline-flex;
    vertical-align: middle;
}
.g-button-group > .g-button{
    border-radius: 0px;
    margin-left: -1px;
}
.g-button-group .g-button:first-child{
    margin-left:0px;
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
}
.g-button-group .g-button:last-child{
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
}
.g-button-group .g-button:hover{
    position: relative;
    z-index: 2;
}
</style>