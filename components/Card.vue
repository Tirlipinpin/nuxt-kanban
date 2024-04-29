<template>
  <div class="card">
    {{ kanbanStore.entitiesById[entityId].title }}
  </div>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

interface Props {
  entityId: number
}

const { entityId } = defineProps<Props>()
</script>

<style scoped lang="scss">
.card {
  // user-select: none;
  padding: 8px;

  border-radius: 8px;

  background-color: white;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
}
</style>