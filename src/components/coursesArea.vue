<template>
  <div class="courses-area mg-b-15">
    <div class="container-fluid">
      <div class="row">
        <basic-list/>
        <countryState/>
        <coursesInner/>
      </div>
    </div>
  </div>
</template>

<script>
import basicList from './basicList'
import countryState from './countryState'
import coursesInner from './sub-components/coursesInner'
export default {
name: "coursesArea",
  components: {
    basicList,
    countryState,
    coursesInner
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.mg-b-15 {
  margin-bottom: 20px;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}

</style>