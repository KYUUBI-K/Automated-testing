<template>
  <div>
    <div>
      <slot name="my-header"> HELLO! </slot>
    </div>
    <div>
      <slot>
        <h1>Super company!</h1>
      </slot>
    </div>
    <div>
      <slot name="my-footer"> CONTACTS! </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMasterpage',
}
</script>

<style lang="scss" scoped></style>
