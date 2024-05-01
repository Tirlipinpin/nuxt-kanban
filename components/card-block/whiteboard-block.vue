<template>
  <LexicalComposer :initial-config="config">
    <LexicalPlainTextPlugin>
      <template #contentEditable>
        <LexicalContentEditable />
      </template>
      <template #placeholder>
        <div>
          Enter some text...
        </div>
      </template>
    </LexicalPlainTextPlugin>
    <LexicalHistoryPlugin />
  </LexicalComposer>
</template>

<script setup lang="ts">
import { $getRoot, $getSelection, type CreateEditorArgs } from 'lexical'
import { LexicalComposer, LexicalContentEditable, LexicalHistoryPlugin, LexicalPlainTextPlugin } from 'lexical-vue'
import type { Exception } from 'sass';

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
</style>
