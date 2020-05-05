<template>
 <div class="user">
    <div class="nav">
       <van-row type='flex' justify='end'>
         <van-col ></van-col>
         <van-col  >用户名{{name}}</van-col>
       </van-row>
    </div>
    <van-col class='con'></van-col>
    <van-button type="primary" @click="submitForm()">退出</van-button>
 </div>
</template>

<script>
import { remove } from '../../token'
export default {
  data() {    
    return {
      name: 'xutao',
      password: '',
    }
  },
  methods: {
    submitForm() {
      console.log('return')
      remove()
      this.$router.push('/')
    }
  },

}
</script>

<style scope>
  .user {
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    /* align-items: end; */
    /* justify-content: end; */
  }
  .con {
    /* flex: 1; */
    flex: 0 0 50vh;
    /* max-width: 50vh; */
  }
  
  .van-button {
     align-self: center;
  }
</style>