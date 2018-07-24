<template>

  <li class="list-item">
    <img :src="returnImg(item)" />
  </li>

</template>

<script>
export default {
  props: {
    item: {
      type: String,
    }
  },
  methods: {
    returnImg(item) {
      return require('@/assets/img/'+item);
    }
  }
}
</script>

<style lang="sass" scoped>
.list-item
  margin-right: 33px
  margin-bottom: 20px
  display: flex
  align-items: center
  &:nth-child(3n)
    margin-right: 0
</style>
