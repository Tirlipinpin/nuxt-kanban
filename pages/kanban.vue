<template>
  <div id="kanban">
    <Column
      v-for="columnId in kanbanStore.columnIds"
      :columnId="columnId"
    />
    <Card />
  </div>

  <div v-if="!kanbanStore.isLoaded" id="loading">
    Loading...
  </div>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

kanbanStore.fetchKanban()
</script>

<style scoped>
#kanban {
  flex-grow: 1;
  
  display: grid;
  grid-auto-columns: 250px;
  grid-auto-flow: column;
  gap: 8px;

  overflow-x: auto;

  padding: 8px;
}

#loading {
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
