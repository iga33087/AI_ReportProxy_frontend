<template>
  <div class="">
    <CardBox title="生產報表">
      <template v-slot:content>
        <el-form :model="form" label-width="auto" label-position="left" style="max-width: 600px">
          <el-form-item label="裝置">
            <el-select v-model="formData.deviceId">
              <el-option v-for="(item) in deviceTableData" :label="item.name" :value="item.id" :key="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="報表類型">
            <el-select v-model="formData.reportType">
              <el-option v-for="(item) in config.reportTypeList" :label="item.name" :value="item.id" :key="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="w-100 d-flex align-items-center justify-content-end">
              <el-button type="primary" @click="sub" :disabled="loading">Create</el-button>
              <el-button @click="test" :disabled="loading">資料轉換測試</el-button>
              <el-button :disabled="loading">Cancel</el-button>
            </div>
          </el-form-item>
        </el-form>
      </template>
    </CardBox>
    <CardBox title="AI報表">
      <template v-slot:content>
        <div v-if="loading">報表產生中...</div>
        <VMarkdownView :content="reportData?.choices?.[0]?.message?.content" v-if="reportData?.choices?.[0]?.message?.content" />
      </template>
    </CardBox>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import CardBox from '../components/CardBox.vue'
import { VMarkdownView } from 'vue3-markdown'
import { ElMessage } from 'element-plus'
import api from '../assets/js/api.js'
import config from '../assets/js/config.js'

const loading=ref(false)
const deviceTableData=ref([])
const formData=ref({
  deviceId:"",
  reportType:1
})
const reportData = ref({})

async function getInit() {
  deviceTableData.value=await api.getDevice().then(r=>r.data)
}

async function sub() {
  try {
    loading.value=true
    reportData.value=await api.postReport(formData.value)
    console.log(reportData.value)
    ElMessage.success('成功')
    loading.value=false
  }
  catch(err) {
    loading.value=false
  }
}

async function test() {
  await api.getTest(formData.value)
  //await api.postReport(formData.value)
}

getInit()
</script>