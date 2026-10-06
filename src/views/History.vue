<template>
  <div class="">
    <CardBox title="歷史紀錄">
      <template v-slot:content>
        <el-table :data="reportTableData" style="width: 100%">
          <el-table-column prop="" label="報告標題" width="180" />
          <el-table-column prop="time" label="產生時間" />
          <el-table-column fixed="right" label="Operations" width="200">
            <template #default>
              <el-button link type="primary">查看</el-button>
              <el-button link type="danger">刪除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </CardBox>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import CardBox from '../components/CardBox.vue'
import api from '../assets/js/api.js'
import config from '../assets/js/config.js'

const reportTableData=ref([])

async function getInit() {
  reportTableData.value=await api.getReport().then(r=>r.data)
}

getInit()
</script>