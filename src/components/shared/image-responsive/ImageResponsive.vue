<template>
  <img :class="classStyle" :src="url" :alt="title" :title="title"/>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    classStyle : {
      type: String,
    },
    width: {
      required: false,
      default: '100px'
    }
  }

}
</script>

<style scoped>

.imagem-responsiva-card {
  height: 125px;
  width: 95%;
}

.imagem-responsiva {
  display: block;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
}
</style>