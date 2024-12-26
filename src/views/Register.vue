<template>
    <div class="login-container">
        <div class="login-box">
            <div style="padding: 30px; background-color: white; border-radius: 15px; ">
                <el-form ref="formRef" :model="data.form"  style="width: 300px;" :rules="data.rules">
                <div style="margin-bottom: 20px; font-size: 24px; text-align: center; color: green; font-weight: bold;">账号注册</div>
                <el-form-item prop="account">
                    <el-input size="large" v-model="data.form.account" placeholder="请输入账号" ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input size="large" v-model="data.form.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item prop="checkpass">
                    <el-input size="large" v-model="data.form.checkpass" placeholder="请确认密码" type="password"></el-input>
                </el-form-item>
                <div style="margin-bottom: 20px;">
                    <el-button size="large" style="width: 100%;" type="primary" @click="register">注册</el-button>
                </div>
                <div style="text-align:  right; color: blue;"><a href="/login" style="text-decoration: none;">登陆</a></div>
            </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import request from '@/utils/request';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';

const validatePass = (rule, value, callback) => {
  if (!value) {
    callback(new Error('请再次输出密码'))
  } else if (value !== data.form.password) {
    callback(new Error("两次密码不一致！"))
  } else {
    callback()
  }
}
const data = reactive({
    form:{},
    rules: {
      account:[
        {required: true, message: '账号不能为空', trigger: 'blur'}
      ],
      password:[
        {required: true, message: '密码不能为空', trigger: 'blur'}
      ],
      checkpass:[
        {validator: validatePass, trigger: 'blur'}
      ]    
    }
})
const formRef = ref()

const register = () =>{
    formRef.value.validate((valid) =>{
        if(valid){
            console.log(data.form)
            request.post('/register', data.form).then(res => {
                if(res.code === '200'){
                    ElMessage.success('注册成功')
                    location.href = '/login'
                }else{
                    ElMessage.error(res.msg)
                }
            })
        }
    })
}
</script>

<style scopde>
.login-container{
    height: 100vh;
    overflow: hidden;
    background-image: url("@/assets/LoginBg.jpg");
    background-size: cover;
    
}
.login-box{
    position: absolute;
    left: 40%;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    
}
</style>