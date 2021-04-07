<template>
  <li>{{browserName}} <span class="pull-right label-color label">{{ value }}</span></li>
</template>

<script>
export default {
name: "basicListChilds",
  props: {
    browserName: String,
    value: Number
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";
.basic-list li {
  display: block;
  padding: 11.6px 0;
  border-bottom: 1px solid rgba(120,130,140,.13);
  line-height: 27px;
  color: #303030;
  font-size: 14px;
}
.basic-list .label {
  margin-top: 0px;
  padding: 7px 10px;
  font-size: 12px;
  border-radius: 2px;
}
.pull-right {
  float: right!important;
}

.label {
  display: inline;
  padding: .2em .6em .3em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25em;
}

</style>