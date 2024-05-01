<template>
  <LexicalComposer :initial-config="config">
    <LexicalRichTextPlugin style="position: absolute;">
      <template #contentEditable>
        <LexicalContentEditable class="whiteboard" />
      </template>
    </LexicalRichTextPlugin>
    <LexicalHistoryPlugin />
  </LexicalComposer>
</template>

<script setup lang="ts">
import { type CreateEditorArgs } from 'lexical'
import { LexicalComposer, LexicalContentEditable, LexicalHistoryPlugin, LexicalRichTextPlugin } from 'lexical-vue'

interface Props {
  content: string
}

const { content } = defineProps<Props>()

const config: CreateEditorArgs = {
  namespace: 'Whiteboard',
  theme: {
    // Theme styling goes here
  },
  onError(error) {
    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    console.error(error)
  },
}
</script>

<style scoped lang="scss">
.whiteboard {
  flex-grow: 1;
}
</style>
