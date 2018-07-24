<template>

  <div class="dialog">
    <p class="dialog-title">Ошибка</p>
    <p class="dialog-text">{{error}}</p>
    <button class="dialog-btn" @click="stopGame()">ОК</button>
  </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    error: {
      type: String,
    }
  },
  methods: {
    ...mapActions(['stopGame']),
  },
};
</script>

<style lang="sass" scoped>
.dialog
  position: fixed
  top: 18px
  right: 27px
  border-radius: 10px
  background: #fff
  padding: 10px 20px
  &-title
    font-size: 25px
    font-family: IntroRegular
    font-weight: bold
    color: #ff4545
    width: 100%
  &-text
    margin-top: 9px
    color: #000
    font-size: 15px
    font-family: IntroRegular
    width: 100%
  &-btn
    cursor: pointer
    border-radius: 20px
    background: #ffe524
    padding: 12px 56px
    font-family: IntroRegular
    font-size: 15px
    border: none
    box-shadow: none
    &:hover
      background: #35f701
    &:active
      box-shadow: inset 0 3px 0 0 rgba(0, 0, 0, 0.16)
</style>
