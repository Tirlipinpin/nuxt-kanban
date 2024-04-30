<template>
  <Teleport to="body" v-if="kanbanStore.displayedEntityId !== null">
    <div class="card-overlay" @click="kanbanStore.closeEntityCard">
      <div
        class="card"
        @click="handleCardClick"
        :style="{ borderColor: kanbanStore.entitiesById[kanbanStore.displayedEntityId].color }"
      >
        <div class="card-header">
          {{ kanbanStore.entitiesById[kanbanStore.displayedEntityId].title }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

function handleCardClick(e: Event) {
  e.stopPropagation()
}
</script>

<style scoped lang="scss">
.card-overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;

  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, .1);

  display: flex;
  align-items: start;
  justify-content: center;
}

.card {
  width: 100%;
  margin: 3rem;
  padding: 2rem;

  border-radius: 8px;
  background-color: white;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  border-top: 3px solid;

  .card-header {
    font-size: 1.5rem;
  }
}
</style>
