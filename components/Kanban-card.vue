<template>
  <div
    class="card"
    :style="{ borderColor: kanbanStore.entitiesById[entityId].color}"
    @click="handleClick"
  >
    {{ kanbanStore.entitiesById[entityId].title }}
    <div class="tags-list">
      <Tag
        v-for="tagId in kanbanStore.entitiesById[entityId].tagIds"
        class="tag"
        :color="kanbanStore.tagsById[tagId].color"
       >
        {{ kanbanStore.tagsById[tagId].title }}
    </Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { kanbanStore } from '~/store/kanban-store';


interface Props {
  entityId: string
}

const { entityId } = defineProps<Props>()

function handleClick() {
  kanbanStore.openEntityCard(entityId)
}
</script>

<style scoped lang="scss">
.card {
  user-select: none;
  padding: 8px;

  border-radius: 8px;

  background-color: white;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  cursor: pointer;

  border-inline-start: 3px solid;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 4px;

  overflow: hidden;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .tags-list {
    display: flex;
    gap: 4px;
    margin: 0;
    padding: 0;
  }
}
</style>