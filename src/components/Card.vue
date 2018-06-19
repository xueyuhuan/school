<template>
    <div class="card">
        <header><slot name="header"></slot></header>
        <main><slot></slot></main>
    </div>
</template>

<script>
  export default {
    name: "Card"
  }
</script>

<style scoped lang="less">
    .card{
        padding: 0 10px;
        border-top: 3px solid #4F8AD0;
        box-shadow: 0 0 2px 0 rgba(170,170,170,1);
        header{
            height: 45px;
            line-height: 45px;
            border-bottom: 1px dashed rgba(170,170,170,1);
        }
    }
</style>