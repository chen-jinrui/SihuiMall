<template>
    <div>
        <img class="user-poster" src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png">
        <van-row class="user-links">

        </van-row>
    </div>
</template>
<script>
import { Row } from "vant";
export default {
  components: {
    [Row.name]: Row
  }
};
</script>
<style lang="less">
.user {
  &-poster {
    width: 7.5rem;
    height: 4rem;
    display: block;
  }
}
</style>

