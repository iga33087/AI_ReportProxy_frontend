<template>
  <div>
    <Header />
    <div class="content">
      <router-view class="contentBox" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>
