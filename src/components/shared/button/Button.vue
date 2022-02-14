<template>
  <button @click="action()" :class="classButton" :type="type">{{ label }}</button>
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

.btn-actions-image {
  display: inline-block;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  border-color: white;
  cursor: pointer;
}

.btn-actions-register{
  margin: 5px 5px;
}

</style>