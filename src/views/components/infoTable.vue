<template>

  <ul class="info-block__ul">

    <info-table-item v-for="(img, i) in listPrize" :item="img" :key="i" />

  </ul>

</template>

<script>
import { mapState } from 'vuex';
import infoTableItem from '@/components/Info/infoTableItem';

export default {
  components: {
    infoTableItem,
  },
  computed: {
    ...mapState(['listPrize'])
  }
}
</script>

<style lang="sass" scoped>
  .info
    &-block
      &__ul
        margin: 0
        padding-left: 0
        width: 100%
        display: flex
        flex-wrap: wrap
</style>
