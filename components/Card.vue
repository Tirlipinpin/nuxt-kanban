<template>
  <Teleport to="#root" v-if="kanbanStore.displayedEntityId !== null">
    <div class="card-overlay" @click="kanbanStore.closeEntityCard">
      <div
        class="card"
        @click="handleCardClick"
      >
        <div
          class="card-header"
          :style="{ borderColor: kanbanStore.entitiesById[kanbanStore.displayedEntityId].color }"
         >
          {{ kanbanStore.entitiesById[kanbanStore.displayedEntityId].title }}
        </div>
        <div class="card-body">
          This is a body
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
  align-self: stretch;

  border-radius: 8px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  display: flex;
  flex-direction: column;

  .card-header {
    font-size: 1.2rem;
    flex-basis: 40px;
    flex-shrink: 0;

    padding: 0.5rem 1rem;

    border-bottom: 4px solid;
  }

  .card-body {
    flex-grow: 1;

    padding: 0.5rem 1rem;
  }
}
</style>
