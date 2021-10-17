<template>
  <img class="imagem-responsiva" :src="url" :alt="title" :title="title"/>
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
    }
  }

}
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>