<template>
  <img class="imagem-responsiva" :src="url" :alt="title" :title="title" width="width"/>
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
    width: {
      required: false,
      default: '100px'
    }
  }

}
</script>

<style scoped>
/* .imagem-responsiva {
  width: 100%;
} */
</style>