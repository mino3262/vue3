<template>
    <div style="text-align: center;">
        404,页面未找到
        <div><el-button type="primary" style="height: 88px; width: 188px; font-size: 20px;" @click="router.push('/')">
        返回主页
        </el-button>
        </div>
    </div>
</template>
  
  
<script setup>
import router from '@/router';
</script>