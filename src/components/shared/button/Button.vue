<template>
  <button @click="action()" :class="styleButton" :type="type">{{ label }}</button>
</template>

<script>
export default {

  props: {
    'type': {
      type: String,
      default: 'button',
      require: true
    },
    'label': {
      type: String,
      require: true
    },
    'confirmation': {
      type: Boolean,
      default: false
    },
    'classButton': {
      type: String,
      default: 'default',
    }
  },

  computed: {
    styleButton() {
      if (this.classButton === 'default') return 'button button-default'
      if (this.classButton === 'danger') return 'button button-danger'
    }
  },

  methods: {
    action() {
      if (this.confirmation) {
        confirm('Confirmar exclusão ?')
      }
      return this.$emit('buttonActive')
    }
  }

}
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  font-size: 1.2em;
  border-color: white;
}

.button-danger {
  background: firebrick;
  color: white;
}

.button-default {
  background: darkcyan;
  color: white;
}
</style>