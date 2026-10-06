<template>
  <div class="header">
    <div class="headerBox">
      <router-link :to="{name:'Home'}" class="headerBoxLogo">LOGO</router-link>
      <div class="headerBoxMenu">
        <router-link :to="{name:'Home'}" class="headerBoxMenuItem">首頁</router-link>
        <!--<router-link :to="{name:'History'}" class="headerBoxMenuItem">歷史紀錄</router-link>-->
        <router-link :to="{name:'Setting'}" class="headerBoxMenuItem">設定</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>