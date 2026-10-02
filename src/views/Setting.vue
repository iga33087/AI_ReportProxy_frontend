<template>
  <div class="">
    <el-dialog v-model="showFormBox" :title="isAdd ? '新增裝置':'編輯裝置'" width="50vw">
      <el-form :model="deviceForm" label-width="auto" label-position="left">
        <el-form-item label="裝置名稱">
          <el-input v-model="deviceForm.name" />
        </el-form-item>
        <el-form-item label="UUID">
          <el-input v-model="deviceForm.uuid" />
        </el-form-item>
        <el-form-item label="金鑰">
          <el-input v-model="deviceForm.key" />
        </el-form-item>
        <el-card class="mb-4">
          <template #header><div class="fw-bold">硬體監控資料</div></template>
          <el-form-item label="CPU 使用率摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="Memory 使用率摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="新建連線速率摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="活躍連線數摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="線上認證用戶摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="線上用戶（IP）摘要">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
        </el-card>
        <el-card class="mb-4">
          <template #header><div class="fw-bold">用戶流量資料</div></template>
          <el-form-item label="Top 20 用戶流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="Top 20 用戶群組流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
        </el-card>
        <el-card class="mb-4">
          <template #header><div class="fw-bold">服務流量資料</div></template>
          <el-form-item label="Top 20 服務流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="Top 20 服務類型流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
        </el-card>
        <el-card class="mb-4">
          <template #header><div class="fw-bold">網域流量資料</div></template>
          <el-form-item label="Top 20 網域流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
          <el-form-item label="Top 20 網域類型流量排名">
            <el-input v-model="textarea1" autosize type="textarea" />
          </el-form-item>
        </el-card>
        <el-form-item>
          <div class="w-100 d-flex align-items-center justify-content-end">
            <el-button type="primary" @click="sub">Create</el-button>
            <el-button>Cancel</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>

    <CardBox title="裝置設定">
      <template v-slot:content>
        <div class="d-flex align-items-center justify-content-end">
          <el-button type="success" @click="toAdd">新增</el-button>
        </div>
        <el-table :data="deviceTableData" style="width: 100%">
          <el-table-column prop="name" label="裝置名稱" width="180" />
          <el-table-column prop="uuid" label="UUID" />
          <el-table-column prop="key" label="金鑰" />
          <el-table-column fixed="right" label="Operations" width="200">
            <template #default="scope">
              <el-button link type="warning" @click="toEdit(scope.row)">編輯</el-button>
              <el-button link type="danger" @click="toDel(scope.row)">刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </CardBox>
  </div>
</template>

<script setup>
import {ref,toRaw} from 'vue'
import CardBox from '../components/CardBox.vue'
import api from '../assets/js/api.js'

const showFormBox=ref(false)
const isAdd=ref(true)
const deviceForm=ref({
  name:"",
  uuid:"",
  key:""
})

const deviceTableData=ref([])

async function getInit() {
  deviceTableData.value=await api.getDevice().then(r=>r.data)
}

async function toAdd() {
  isAdd.value=true
  deviceForm.value={
    name:"",
    uuid:"",
    key:""
  }
  showFormBox.value=true
}

async function toEdit(x) {
  isAdd.value=false
  deviceForm.value=structuredClone(toRaw(x))
  showFormBox.value=true
}

async function toDel(x) {
  if(!confirm(`確定刪除${x.name}?`)) return 0
  await api.delDevice(x)
  await getInit()
}

async function sub() {
  if(isAdd.value) await api.postDevice(deviceForm.value)
  else await api.putDevice(deviceForm.value)
  await getInit()
  showFormBox.value=false
}

getInit()
</script>