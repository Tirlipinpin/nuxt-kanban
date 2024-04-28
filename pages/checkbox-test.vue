<template>
  <div id="checkbox-page">
    <div>
      <label>Select everything</label>
      <input
        type="checkbox"
        @change="handleCheckAll"
      />
    </div>

    <div v-for="checkboxId in checkboxIds">
      <label>{{ checkboxesById[checkboxId]?.label }}</label>
      <input
      type="checkbox"
      v-model="checkboxesById[checkboxId].checked"
      />
    </div>
    <button @click="console.log(checkboxesById)">Get result</button>
  </div>
</template>

<script setup lang="ts">
type Checkboxes = Record<number, { label: string, checked: boolean }>

const checkboxIds = ref<number[]>([1, 2, 3, 4, 5])
const checkboxesById = ref<Checkboxes>({
  1: { label: 'Mail 1', checked: false },
  2: { label: 'Mail 2', checked: false },
  3: { label: 'Mail 3', checked: false },
  4: { label: 'Mail 4', checked: false },
  5: { label: 'Mail 5', checked: false },
  6: { label: 'Mail 6', checked: false }
})

function handleCheckAll(e: Event) {
  checkboxesById.value = checkboxIds.value?.reduce((acc, checkboxId) => ({
    ...acc,
    [checkboxId]: { ...checkboxesById.value[checkboxId], checked: (e.target as HTMLInputElement).checked }
  }), {})
}
</script>

<style scoped>
#checkbox-page {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>