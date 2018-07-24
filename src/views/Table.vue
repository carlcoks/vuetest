<template>

  <div class="table">

    <ul class="table-ul">

      <table-list-item v-for="(item, i) in listAll" :key="i" :item="item" />

    </ul>

  </div>

</template>

<script>
import { mapState } from 'vuex';
import tableListItem from '@/components/Table/tableListItem';

export default {
  components: {
    tableListItem,
  },
  computed: {
    ...mapState(['listAll'])
  }
}
</script>

<style lang="sass">
.table
  width: 50%
  &-ul
    justify-content: flex-end
    display: flex
    flex-wrap: wrap
    padding: 0
    margin: 0
</style>
