<template>
  <Teleport to="body">
    <div class="card-overlay">
      <div class="card">
        {{ kanbanStore.entitiesById[entityId].title }}
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

interface Props {
  entityId: string
}

const { entityId } = defineProps<Props>()
</script>

<style scoped lang="scss">
.card-overlay {
  position: absolute;
  height: 100%;
  width: 100%;

  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, .5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  border-radius: 8px;
  background-color: white;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  padding: 2rem;
}
</style>
