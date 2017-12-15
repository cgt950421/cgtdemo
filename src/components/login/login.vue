<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div class="text item">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="50px" class="demo-ruleForm">
          <el-form-item label="" prop="userName">
            <el-input v-model="loginForm.userName" placeholder="用户名" class="login-input"></el-input>
          </el-form-item>
          <el-form-item label="" prop="passWord">
            <el-input v-model="loginForm.passWord" placeholder="密码" class="login-input"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login"style="margin-left:100px;">登录</el-button>
            <el-button type="primary" @click="reset">重置</el-button>
          </el-form-item>
        </el-form>        
      </div>
    </el-card>
  </div>
</template>
<script>
  import Cookies from 'js-cookie'
  // import {userLogin} from '../../api/userApi'
  // import { Message } from 'element-ui'
  export default {
    data () {
      return {
        loginForm: {
          userName: '',
          passWord: ''
        },
        rules: {
          passWord: [
            { required: true, message: '密码不为空', trigger: 'blur' },
            { min: 6, message: '长度大于6', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '用户名不为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      login () {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.userLogin()
          }
        })
      },
      reset () {
        this.$refs['loginForm'].resetFields()
      },
      async userLogin () {
        if (this.loginForm.userName) {
          Cookies.set('userName', this.loginForm.userName, { expires: 7, path: '' })
          Cookies.set('token', 'testToken')
          this.$router.push('/home')
        }
        // let res = await userLogin(this.loginForm)
        // if (res.data.data.code === 0) {
        //   Message.success(res.data.data.msg)
        //   Cookies.set('userName', this.loginForm.userName, { expires: 7, path: '' })
        //   Cookies.set('token', res.data.data.user.token, { expires: 7, path: '' })
        //   this.$router.push('/home')
        // } else {
        //   Message.error(res.data.data.msg)
        // }
      }
    }
  }
</script>
<style lang="less" scope>
  @import './login.less';
</style>