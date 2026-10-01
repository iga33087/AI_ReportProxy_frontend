<template>
  <div class="cardBox">
    <div class="cardBoxTitle">{{title}}</div>
    <div class="cardBoxContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])

</script>