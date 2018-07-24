<template>

  <li class="table-item" @click="start()">

    <div class="circle" v-if="item.status == ''">
      <p class="circle-ask">?</p>
    </div>

    <div class="circle loading" :class="item.status != 'loading' ? 'animation' : ''" v-else>
      <div class="circle-svg">
        <svg-icon />
      </div>
      <img :src="returnImg()" alt="">
    </div>

  </li>

</template>

<script>
import { mapActions } from 'vuex';
import svgIcon from './svgIcon.vue';

export default {
  props: {
    item: {
      type: Object,
    }
  },
  components: {
    svgIcon,
  },
  methods: {
    ...mapActions(['getPrize']),

    start() {
      if( this.item.status == '' ){
        this.getPrize(this.item);
      }
    },
    returnImg() {
      if( this.item.status == '' || this.item.status == 'loading' ){
        return '';
      } else {
        return require('@/assets/img/' + this.item.status + '@2x.png');
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.table-item
  background: #000000
  border: 2px solid #323232
  display: flex
  padding: 40px
  height: 33%
  flex-wrap: wrap
  cursor: pointer
  .circle
    border-radius: 50%
    width: 130px
    height: 130px
    background: #323232
    display: flex
    align-items: center
    justify-content: center
    position: relative
    &-ask
      color: rgba(255, 255, 255, .25)
      font-family: IntroRegular
      font-size: 52px
      margin: 0
    &-svg
      background: #fff
      width: 100%
      height: 100%
      display: flex
      align-items: center
      justify-content: center
      border-radius: 50%
      transform: rotateY(0deg)
      backface-visibility: hidden
    &.loading
      background: #fff
    img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      backface-visibility: hidden
      transform: rotateY(-180deg)
    &.animation
      .circle-svg
        transition: .4s ease-in-out
        transform: rotateY(180deg)
      img
        transition: .4s ease-in-out
        transform: rotateY(0deg)
  &:hover
    background: #24c8a3
    border: 2px solid #24c8a3
    .circle
      background: #fff
      &-ask
        color: #000
</style>
