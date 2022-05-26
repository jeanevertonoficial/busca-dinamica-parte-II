<template>
  <div>
    <b-button  @click="showModal">
      <b-icon icon="arrow-up-right-square" aria-label="Help"></b-icon>
    </b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Modal-info",
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>