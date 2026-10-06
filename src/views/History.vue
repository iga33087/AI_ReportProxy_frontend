<template>
  <div class="">

    <el-dialog v-model="showDetailBox" :title="報表內容" width="70vw">
      <VMarkdownView :content="reportContent?.choices?.[0]?.message?.content" />
    </el-dialog>

    <CardBox title="歷史紀錄">
      <template v-slot:content>
        <el-table :data="reportTableData" style="width: 100%">
          <el-table-column prop="deviceId" label="裝置" width="180">
            <template #default="scope">
              {{deviceTableData.find(r=>r.id === scope.row.deviceId).name}}
            </template>
          </el-table-column>
          <el-table-column prop="reportType" label="報表類型">
            <template #default="scope">
              {{config.reportTypeList.find(r=>r.id === scope.row.reportType).name}}
            </template>
          </el-table-column>
          <el-table-column prop="create_at" label="產生時間">
            <template #default="scope">
              {{dayjs(scope.row.create_at).format("YYYY/MM/DD HH:mm:ss")}}
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="Operations" width="200">
            <template #default="scope">
              <el-button link type="primary" @click="checkReport(scope.row)">查看</el-button>
              <el-button link type="danger" @click="toDel(scope.row)">刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </CardBox>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import CardBox from '../components/CardBox.vue'
import dayjs from 'dayjs'
import api from '../assets/js/api.js'
import config from '../assets/js/config.js'
import { VMarkdownView } from 'vue3-markdown'

const showDetailBox=ref(false)
const chooseReport=ref({})
const deviceTableData=ref([])
const reportTableData=ref([])

const reportContent=computed(()=> {
  return JSON.parse(chooseReport.value.reportData)
})

async function getInit() {
  deviceTableData.value=await api.getDevice().then(r=>r.data)
  reportTableData.value=await api.getReport().then(r=>r.data)
}

async function toDel(x) {
  if(!confirm(`確定刪除?`)) return 0
  await api.delReport(x)
  await getInit()
}

function checkReport(x) {
  chooseReport.value=x
  showDetailBox.value=true
  console.log(88,reportContent.value)
}

getInit()
</script>