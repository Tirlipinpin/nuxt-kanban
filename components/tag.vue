<template>
  <div class="tag">
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

  background-color: v-bind("color");
  color: rgba(0, 0, 0, .7);
}
</style>
