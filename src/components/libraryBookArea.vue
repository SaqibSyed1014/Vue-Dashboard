<template>
  <div class="library-book-area mg-t-30">
    <div class="container-fluid">
      <div class="row">
        <singleCardItem/>
        <reviewArea/>
        <singleproductItem/>
      </div>
    </div>
  </div>
</template>

<script>
import singleCardItem from './sub-components/libraryBookAreaChilds/singleCardItem'
import reviewArea from './sub-components/libraryBookAreaChilds/reviewArea'
import singleproductItem from './sub-components/libraryBookAreaChilds/singleproductItem'
export default {
name: "libraryBookArea",
  components: {
    singleCardItem,
    reviewArea,
    singleproductItem
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";




.mg-t-30 {
  margin-top: 30px;
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