<template>
  <div class="login">
    <el-form
      :model="UserData"
      ref="UserData"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="email"
        prop="email"
        :rules="[{ required: true, message: 'email不能为空' }]"
      >
        <el-input
          type="email"
          v-model.number="UserData.email"
          auto-complete="off"
        ></el-input>
        <el-input
          type="password"
          v-model.number="UserData.password"
          auto-complete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('UserData')">登陆</el-button>
        <el-button type="primary" @click="reg('UserData')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login, register } from '../axiosAction/register.js';
import { success, error } from '../../message/index';
import { setToken } from '../../token';
export default {
  data() {
    return {
      UserData: {
        email: 'xutao@qq.com',
        password: '123456',
        name: '',
      },
    };
  },
  methods: {
    async login(formName) {
      const submit = this.$refs[formName].validate();
      if (submit) {
        // 登陆
        const res = await login(this.UserData);

        if (res && res.data && res.data.success) {
          // 成功获取 保存与 vuex localStorg
          setToken(res.data.token);
          //弹出登陆消息
          success('登陆成功');
          // 路由跳转
          this.$router.push({
            path: '/user',
          });
          return true;
        }

        if (res && res.data && !res.data.success) {
          error(res.status)
        }
      }
      // 表单输入不符合要求
      if (!submit) {
        console.log('error submit!!');
        return false;
      }

      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     login(this.UserData).then((res) => {
      //       console.log('res', res);

      //       if (res && res.data && res.data.success) {
      //         // 成功获取 保存与 vuex 中
      //         this.$store.state.token = res.token;
      //         // 保存到本地
      //         localStorage.setItem('token', res.token);
      //         //弹出登陆消息
      //         success('登陆成功');
      //         // 路由跳转
      //         this.$router.push({
      //           path: '/user',
      //         });
      //         return true;
      //       }

      //       if (!res.data.success) {
      //         error(res.data.email);
      //         return false;
      //       }
      //     });
      //   } else {
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    //注册账号
    async reg() {
      const res = await register(this.UserData);
      // 注册成功
      if (res && res.status === 200) {
        success(res.statusText);
        return true;
      }

      // 已经注册过了
      if (res && res.status > 200) {
        error(res.data.email);
        return false;
      }
    },
  },
};
</script>
<style scoped>
.login {
  width: 300px;
}
</style>
