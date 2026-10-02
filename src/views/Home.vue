<template>
  <div class="">
    <CardBox title="生產報表">
      <template v-slot:content>
        <el-form :model="form" label-width="auto" label-position="left" style="max-width: 600px">
          <el-form-item label="裝置">
            <el-select v-model="formData.device">
              <el-option v-for="(item) in deviceTableData" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
          <el-form-item label="報表類型">
            <el-select v-model="formData.reportType">
              <el-option label="硬體監控AI分析" value="1" />
              <el-option label="用戶流量AI分析" value="2" />
              <el-option label="服務流量AI分析" value="3" />
              <el-option label="網域流量AI分析" value="4" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="w-100 d-flex align-items-center justify-content-end">
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button>Cancel</el-button>
            </div>
          </el-form-item>
        </el-form>
      </template>
    </CardBox>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import CardBox from '../components/CardBox.vue'
import api from '../assets/js/api.js'

const deviceTableData=ref([])
const formData=ref({
  device:"",
  reportType:"1"
})

async function getInit() {
  deviceTableData.value=await api.getDevice().then(r=>r.data)
}

getInit()
</script>