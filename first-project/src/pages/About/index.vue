<template>
  <main-masterpage>
    <template v-slot:my-header> Super Admin </template>

    <h1>ABOUT</h1>

    <template v-slot:my-footer> Super Place </template>
  </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'

export default {
  name: 'About',

  components: {
    MainMasterpage,
  },
}
</script>

<style lang="scss" scoped></style>
