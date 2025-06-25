<template>
    <div class="login-container">
        <div class="login-form">
            <h2>登录</h2>
            <el-form :model="loginForm" :rules="loginRules" ref="formRef" label-position="right">
                <el-form-item label="用户名" prop="username" label-width="80px">
                    <el-input v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="密码" prop="password" label-width="80px">
                    <el-input v-model="loginForm.password" type="password" show-password />
                </el-form-item>
                <el-form-item class="login-btn">
                    <el-button type="primary" @click="submitLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="login-background">
            <img src="https://picsum.photos/1920/1080" alt=""></img>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// 登录表单数据
const loginForm = ref({
    username: '',
    password: ''
});

// 表单验证规则
const loginRules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 15, message: '用户名长度在3到15个字符', trigger: 'blur' }
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 20, message: '密码长度在6到20个字符', trigger: 'blur' }
    ]
};

// 提交登录
function submitLogin() {
    // 这里可以添加实际的登录逻辑，如调用API等
    console.log('提交登录:', loginForm.value);
    // 模拟登录成功后跳转
    router.push('/admin');
}
</script>

<style lang="scss" scoped>
.login-container {
    position: relative;
    // display: flex;
    // justify-content: right;
    // align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f7fa;
    // padding-right: 15%;
}

.login-form {
    position: absolute;
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 400px;
    top: 30%;
    right: 15%;
}
.login-background{
    width: 100vw;
    height: 100vh;
    img{
        width: 100%;
        height: 100%;
    }
}

.yd-form-item__content {
    justify-content: center;
}

.yd-button {
    width: 100%;
}
</style>