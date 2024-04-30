<template>
  <button class="flat-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.flat-button {
  aspect-ratio: 1;
  flex-shrink: 0;

  background-color: transparent;
  border: none;
  border-radius: 8px;

  cursor: pointer;

  padding: .4rem;

  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, .1);
  }
}
</style>
