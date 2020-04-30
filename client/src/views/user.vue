<template>
 <div class="user">
    <el-button type="primary" @click="submitForm()">退出</el-button>
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