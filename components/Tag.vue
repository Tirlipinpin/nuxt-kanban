<template>
  <div
    class="tag"
    :style="{ backgroundColor: color }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  color: string
}

const { color } = defineProps<Props>()
</script>

<style scoped lang="scss">
.tag {
  border-radius: 8px;
  padding: 4px;
  text-wrap: nowrap;

  font-size: .8rem;
}
</style>
