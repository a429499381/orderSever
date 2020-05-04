<template>
  <div class="home">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;" class='submit'>
        <van-button round block type="info" native-type="submit('login')">登陆</van-button>
        <van-button round block type="info" native-type="submit('reg')">注册</van-button>
      </div>
    </van-form>
      <van-loading v-if='isLoading' size="24px" vertical>加载中...</van-loading>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue' 
// import {Loading } from 'vant'  

export default {
  name: "Home",
  components: {},
  data() {
    return {
      username: "xutao",
      password: "11",
      isLoading: true,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);

      // console.log('loading', Loading)
  
    }
  }
};
</script>
<style  scoped>
  .submit {
    display : flex;
  }
  .van-button:nth-child(1) {
    margin-right: 10px; 
  }
</style>
