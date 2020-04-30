<template>
  <div class="login">
    <el-form :model="UserData" ref="UserData" label-width="60px" class="demo-ruleForm">
      <el-form-item
        label="email"
        prop="email"
        :rules="[
      { required: true, message: 'email不能为空'},
    ]"
      >
        <el-input type="email" v-model.number="UserData.email" auto-complete="off"></el-input>
        <el-input type="password" v-model.number="UserData.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('UserData')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { register } from "../axiosAction/register.js";
export default {
  data() {
    return {
      UserData: {
        email: "xutao@qq.com",
        password: "1234561",
        name: ""
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
      

          register(this.UserData).then((res) => {
            console.log("res", res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style  scoped>
.login {
  width: 300px;
}
</style>