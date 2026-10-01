<template>
  <div class="">
    <CardBox title="裝置設定">
      <template v-slot:content>
        <el-table :data="deviceTableData" style="width: 100%">
          <el-table-column prop="title" label="裝置名稱" width="180" />
          <el-table-column prop="uuid" label="UUID" />
          <el-table-column prop="key" label="金鑰" />
          <el-table-column fixed="right" label="Operations" width="200">
            <template #default>
              <el-button link type="primary">編輯</el-button>
              <el-button link type="primary">刪除</el-button>
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

const deviceTableData=ref([
  {title:'裝置1',uuid:'100001',key:'test1234',data:{}},
  {title:'裝置2',uuid:'200001',key:'11112',data:{}},
  {title:'裝置2',uuid:'300001',key:'test1234',data:{}},
])
</script>