<template>
  <div class="form-block">
    <div v-for="field in fields" class="field">
      <label>{{ field.label }}</label>
      <Input
        :type="field.type.toString() === 'text' ? 'text' : 'number'"
        v-model="field.value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from '~/designSystem/input.vue';
import type { Field } from '~/types/card.types';

interface Props {
  fields: Field[]
}

const { fields } = defineProps<Props>()
</script>

<style scoped lang="scss">
.form-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;

  .field {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: .9rem;
  }
}
</style>
