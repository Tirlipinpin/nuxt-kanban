<template>
  <div class="attachments">
    <div
      v-for="attachment in attachments"
      class="attachment"
    >
      <AttachmentTypeIcon :icon-type="attachment.type" />
      <div class="title">
        {{ attachment.title }}
      </div>
      <div class="size">
        {{ attachment.size }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Attachment } from '~/types/card.types';
import AttachmentTypeIcon from './attachment-type-icon.vue';

interface Props {
  attachments: Attachment[]
}

const { attachments } = defineProps<Props>()
</script>

<style scoped lang="scss">
.attachments {
  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 8px;

  .attachment {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    min-width: 0;
    overflow: hidden;

    padding: 8px;

    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    .icon {
      flex-shrink: 0;
    }

    .title {
      flex: 1;

      text-wrap: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .size {
      align-self: flex-end;
      flex-shrink: 0;
    }
  }
}
</style>
