<template>
  <div class="card-block">
    <div class="block-header">{{ cardBlock.title }}</div>
    <FormBlock
      v-if="cardBlock.type === 'form'"
      :fields="cardBlock.fields"
    />
    <WhiteboardBlock
      v-if="cardBlock.type === 'whiteboard'"
      :content="cardBlock.content"
    />
    <AttachmentsBlock
      v-if="cardBlock.type === 'attachments'"
      :attachments="cardBlock.attachments"
    />
    <SocialBlock
      v-if="cardBlock.type === 'social'"
      :messages="cardBlock.messages"
    />
  </div>
</template>

<script setup lang="ts">
import { type CardBlock } from '~/types/card.types';
import FormBlock from './form-block.vue';
import WhiteboardBlock from './whiteboard-block.vue';
import AttachmentsBlock from './attachments-block.vue';
import SocialBlock from './social-block.vue';

interface Props {
  cardBlock: CardBlock
}

const { cardBlock } = defineProps<Props>()
</script>

<style scoped lang="scss">
.card-block {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border-radius: 8px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  .block-header {
    padding: 8px;
    background-color: #fbfbfb;
  }
}
</style>
