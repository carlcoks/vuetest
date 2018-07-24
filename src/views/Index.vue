<template>

  <div class="main">

    <info-block />
    <table-block />

  </div>

</template>

<script>
import InfoBlock from './Info.vue';
import TableBlock from './Table.vue';

export default {
  components: {
    InfoBlock,
    TableBlock,
  },
};
</script>

<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  display: flex
  justify-content: space-between
</style>
