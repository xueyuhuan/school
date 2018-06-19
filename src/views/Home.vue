<template>
  <div class="home">
    <img src="../assets/banner.png">
    <card class="aa">
      <div class="header" slot="header">
        会议通知
      </div>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </card>
  </div>
</template>

<script>
  import card from "@/components/Card.vue";
export default {
  name: "home",
  components:{
    card
  }
};
</script>

<style scoped lang="less">
  .home{
    max-width: 1140px;
    margin: 0 auto;
    img{
      width: 100%;
    }
  }
  .card .header{
    color: yellowgreen;
  }
</style>
