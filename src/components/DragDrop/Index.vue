<template>
  <div class="drag-drop">
    <draggable></draggable>
  </div>
</template>

<script>
/* ============
 * Home Index Page
 * ============
 *
 * The home index page.
 */

import draggable from 'vuedraggable';

export default {
  /**
   * The name of the component.
   */
  name: 'DragDrop',
  /**
   * The components that the component can use.
   */

  components: { draggable },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.drag-drop {
  .drop,
  .drag {
    height: 246px;
    width: 184px;
    background: #fffcfa;
    border-radius: 8px;
    border: 1px dashed #bcbbc9;
  }
}
</style>
