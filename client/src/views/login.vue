<template>
  <div class="login">
    <van-form @submit="onSubmit" class="from-login">
      <van-field
        v-model="name"
        name="email"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登陆</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import { login } from "../axiosAction/request";
import { setToken } from "../../token";
import {error, success} from '../message';
export default {
  data() {
    return {
      name: "xutao@qq.com",
      password: ""
    };
  },
  methods: {
    async onSubmit(value) {
      console.log(value);

      const res = await login(value);
      console.log("result", res);
      if (res.status === 200) {
        // 解析token
        let resloveToken = jwt_decode(res.data.token);
        console.log(resloveToken);

        console.log(this.isNull(resloveToken));
        // 存储token
        setToken(res.data.token);
        this.$store.dispatch("setAuthen", !this.isNull(resloveToken));
        this.$store.dispatch("setUser", resloveToken);
        // 通知消息
        success('登陆成功')
        this.$router.push({
          path: '/user'
        })
        return true;
      }
      if (res.status !== 200 && res.data) {
        error(res.data.text)
        console.log(res);
      }
    },
    isNull(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style >
 .login {
   flex: 1;
   align-self: center;
 }  
 .from-login {
    margin: 50px;
 }
</style>