<template>
  <Teleport to="#root">
    <Transition>
      <div
        class="card-overlay"
        @click="kanbanStore.closeEntityCard"
        v-if="kanbanStore.displayedEntityId !== null"
      >
        <div
          class="card"
          @click="handleCardClick"
        >
          <div
            class="card-header"
            :style="{ borderColor: kanbanStore.entitiesById[kanbanStore.displayedEntityId]?.color }"
          >
            {{ kanbanStore.entitiesById[kanbanStore.displayedEntityId].title }}
            <FlatButton @click="kanbanStore.closeEntityCard()">╳</FlatButton>
          </div>
          <div class="card-body">
            <CardBlocks />
          </div>
        </div>
      </div>
    </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';

function handleCardClick(e: Event) {
  e.stopPropagation()
}
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 250ms ease-in-out, backdrop-filter 250ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

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

  overflow: hidden;

  .card-header {
    font-size: 1.2rem;
    flex-basis: 40px;
    flex-shrink: 0;
    border-bottom: 4px solid;
    background-color: #fbfbfb;

    padding: 8px;

    display: flex;
    justify-content: space-between;
  }

  .card-body {
    flex-grow: 1;
    display: flex;

    padding: 8px;

    overflow: hidden;
  }
}
</style>
