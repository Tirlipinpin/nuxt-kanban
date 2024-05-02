<template>
  <div class="icon">
    <template v-if="iconType.startsWith('image/')">
      🌄
    </template>
    <template v-if="iconType.startsWith('text/')">
      📄
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  iconType: string
}

const { iconType } = defineProps<Props>()

</script>

<style scoped lang="scss">
.icon {
  flex-shrink: 0;
  
  height: 16px;
  aspect-ratio: 1/1;

  display: flex;
  align-items: center;
}
</style>
