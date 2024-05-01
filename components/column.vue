<template>
  <div class="column">
    <div class="header">{{ kanbanStore.columnsById[columnId].label }}</div>
    <div class="cardsContainer" ref="parentRef">
      <KanbanCard
        v-for="entityId in entityIds"
        :key="entityId"
        class="card"
        :entityId="entityId"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
import { kanbanStore } from '~/store/kanban-store';

interface Props {
  columnId: string
}

const { columnId } = defineProps<Props>()

const [parentRef, entityIds] = useDragAndDrop(kanbanStore.columnsById[columnId].entityIds, { group: 'kanban' })
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