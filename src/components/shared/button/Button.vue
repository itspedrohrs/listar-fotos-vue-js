<template>
  <button @click="action()" :class="styleButton" :type="type">{{ label }}</button>
</template>

<script>
export default {

  props: {
    'type': {
      type: String,
      default: 'button',
      required: true
    },
    'label': {
      type: String,
      required: true
    },
    'confirmation': {
      type: Boolean,
      default: false
    },
    'classButton': {
      type: String,
      default: 'default',
      required: true,
    }
  },

  computed: {
    styleButton() {
      if (this.classButton === 'default' || this.classButton === '') return 'button button-default'
      if (this.classButton === 'danger') return 'button button-danger'
      if (this.classButton === 'come-back') return 'button button-come-back'
    }
  },

  methods: {
    action() {
      let actionReturn
      if (this.confirmation) {
        actionReturn = confirm('Confirmar exclusão ?') ? this.$emit('buttonActive') : null
      } else {
        actionReturn = this.$emit('buttonActive')
      }
      return actionReturn
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

.button-come-back {
  background: darkgray;
  color: white;
}
</style>