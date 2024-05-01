<template>
  <div class="card-blocks">
    <CardBlock v-for="cardBlock in cardBlocks" :card-block="cardBlock" />
  </div>
</template>

<script setup lang="ts">
import mockedCardBlocks from '~/mock/cardBlocks.json'
import type { CardBlock } from '~/types/card.types';

const cardBlocks: CardBlock[] = mockedCardBlocks as CardBlock[]
</script>

<style scoped lang="scss">
.card-blocks {
  flex-grow: 1;
  
  display: grid;
  grid-auto-columns: minmax(400px, 1fr);
  grid-auto-flow: column;
  gap: 16px;

  padding: 4px;

  overflow-x: auto;
}
</style>
