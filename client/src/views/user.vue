<template>
  <div class="user">
    <div class="nav">
      <van-row type="flex" justify="end">
        <van-col></van-col>
        <van-col>
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </div>
    <van-col class="con"></van-col>
    <van-button type="primary" @click="submitForm()">退出</van-button>
  </div>
</template>

<script>
import { remove } from "../../token";
import { success } from "../message";
export default {
  data() {
    return {
      name: "xutao",
      password: "",
      value1: 0,
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  methods: {
    submitForm() {
      success("退出登陆");
      setTimeout(() => {
        remove();
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>

<style scope>
.user {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
}
.con {
  flex: 0 0 50vh;
}
.nav {
  line-height: 50px;
  padding-right: 10px;
  background: rgb(248, 182, 182);
}
</style>