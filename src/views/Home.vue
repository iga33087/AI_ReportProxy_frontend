<template>
  <div class="">
    <CardBox title="生產報表">
      <template v-slot:content>
        <el-form :model="form" label-width="auto" label-position="left" style="max-width: 600px">
          <el-form-item label="裝置">
            <el-select v-model="formData.device">
              <el-option label="裝置1" value="1" />
              <el-option label="裝置2" value="2" />
              <el-option label="裝置3" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item label="報表類型">
            <el-select v-model="formData.reportType">
              <el-option label="硬體分析" value="1" />
              <el-option label="流量分析" value="2" />
              <el-option label="網域分析" value="3" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
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

const formData=ref({
  device:"1",
  reportType:"1"
})

async function getInit() {
  await api.getTest()
}

getInit()
</script>