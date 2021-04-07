<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="single-review-st-item res-mg-t-30 table-mg-t-pro-n">
      <div class="single-review-st-hd">
        <h2>Reviews</h2>
      </div>
      <librarySinglereview name="Wajahat Ahmed"/>
      <librarySinglereview name="Abdul Wahab"/>
      <librarySinglereview name="Usama Ahmed"/>
      <librarySinglereview name="Behzad Rasheed"/>
      <librarySinglereview name="Tayyab Basit"/>
      <librarySinglereview name="Ahmed Mujtaba"/>
    </div>
  </div>
</template>

<script>
import librarySinglereview from "./librarySinglereview";

export default {
  name: "reviewArea",
  components: {
    librarySinglereview,
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";

.single-review-st-item {
  background: #fff;
  overflow: hidden;
}
.single-review-st-item {
  padding: 20px;
}
.single-review-st-hd h2 {
  font-size: 18px;
  color: #303030;
}

</style>