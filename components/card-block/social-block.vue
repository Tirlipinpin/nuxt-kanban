<template>
  <div class="social-block">
    <div class="messages">
      <div
        v-for="message in messages"
        class="message"
        :class="{ own: message.senderId === '456' }"
      >
        <div class="message-metadata">
          <div class="sender">
            {{ message.senderName }}
          </div>
          <div class="date">
            {{ new Date(message.creationDate).toLocaleDateString() }}
          </div>
        </div>
        <div class="message-content">
          {{ message.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '~/types/card.types';

interface Props {
  messages: Message[]
}

const { messages } = defineProps<Props>()
</script>

<style scoped lang="scss">
.social-block {
  flex-grow: 1;
  overflow-y: auto;

  .messages {
    display: flex;
    flex-direction: column;
    gap: 8px;

    padding: 16px;

    .message {
      display: flex;
      flex-direction: column;
      gap: 4px;

      margin-inline-end: 20%;

      &.own {
        margin-inline-start: 20%;
        margin-inline-end: 0;

        .message-content {
          background-color: #c8def3;
        }
      }

      .message-metadata {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        overflow: hidden;

        .sender {
          text-wrap: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .date {
          text-wrap: nowrap;
          flex-shrink: 0;
        }
      }

      .message-content {
        background-color: #efefef;
        border-radius: 8px;
        padding: 8px;
      }
    }
  }
}
</style>
