<template>
  <div class="column">
    <div class="header">{{ kanbanStore.columnsById[columnId].label }}</div>
    <div class="cardsContainer">
      <Card
        v-for="entityId in kanbanStore.columnsById[columnId].entityIds"
        class="card"
        :entityId="entityId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

interface Props {
  columnId: number
}

const { columnId } = defineProps<Props>()
</script>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  gap: 8px;

  border-radius: 8px;
  background-color: #f9f9f9;

  .header {
    flex-basis: 50px;
    flex-shrink: 0;

    background-color: #fbfbfb;
    color: black;

    border-start-start-radius: 8px;
    border-start-end-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cardsContainer {
    box-shadow: 0px -5px 9px -6px #dcdada;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 8px;
  }
}
</style>