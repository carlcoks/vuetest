<template>
  <div id="app">
    <router-view/>

    <dialog-view v-if="error.status" :error="error.text" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import dialogView from '@/components/dialogView';

export default {
  components: {
    dialogView,
  },
  computed: {
    ...mapState(['error'])
  }
};
</script>

<style lang="sass" src="@/styles/main.sass"></style>
<style lang="sass">
#app
  width: 100%
</style>
