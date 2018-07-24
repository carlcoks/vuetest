<template>

  <div class="info">

    <p class="info-title">Тест</p>

    <div class="info-block">
      <p class="info-block__about">Внутри каждой клетки один из призов:</p>

      <info-table />
    </div>
  </div>

</template>

<script>
import infoTable from './components/infoTable';

export default {
  components: {
    infoTable,
  }
}
</script>

<style lang="sass">
.info
  padding: 44px 36px 16px
  display: flex
  flex-direction: column
  justify-content: space-between
  &-title
    font-family: IntroRegular
    font-weight: bold
    font-size: 65px
    color: #fff
    margin: 0
  &-block
    width: 310px
    &__about
      font-family: IntroRegular
      font-size: 27px
      line-height: 1.07
      color: #fff
      margin-top: 0
      margin-bottom: 23px
</style>
