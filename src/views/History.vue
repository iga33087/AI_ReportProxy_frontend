<template>
  <div class="">
    <CardBox title="歷史紀錄">
      <template v-slot:content>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="title" label="報告標題" width="180" />
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

const tableData=ref([
  {id:1,title:'裝置1 - 硬體報表',time:'2026-01-01'},
  {id:2,title:'裝置2 - 硬體報表',time:'2026-01-01'},
  {id:3,title:'裝置3 - 硬體報表',time:'2026-01-01'},
  {id:4,title:'裝置4 - 硬體報表',time:'2026-01-01'},
  {id:5,title:'裝置5 - 硬體報表',time:'2026-01-01'},
])
</script>