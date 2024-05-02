<template>
  <input
    class="input"
    :value="modelValue"
    :type="type"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
interface Props {
  type: string
  modelValue: string | number | null
}

const { type, modelValue } = defineProps<Props>()
</script>

<style scoped lang="scss">
.input {
  padding: 8px;
  border-radius: 8px;

  border: 1px solid #dad8d8;
}
</style>
