<!-- eslint-disable max-len -->
<template>
  <div class="attack-icon">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0294 4.509L7.13225 0.50595C7.03069 0.395437 6.89106 0.346313 6.76412 0.346313C6.63718 0.346313 6.48485 0.395437 6.39599 0.50595L2.48614 4.52127C2.18148 4.84053 2.40998 5.35627 2.85428 5.35627H4.1364V7.65249H0.163086V12.5642H7.17034C8.30013 12.5642 9.21412 11.6801 9.21412 10.5872V5.35627H10.6613C11.1056 5.35627 11.3341 4.84053 11.0294 4.52127V4.509ZM9.21412 4.32481H8.16049V10.575C8.16049 11.103 7.71619 11.5328 7.17034 11.5328H1.21671V8.64711H5.19002V4.31252H4.11101L6.76412 1.58652L9.40453 4.31252H9.21412V4.32481Z"
        fill="#913620"
      />
      <path
        d="M9.41608 4.32545H8.17205V10.5756C8.17205 11.1036 7.72774 11.5334 7.18189 11.5334H1.22827V8.64775H5.20158V4.31316H4.12257L6.77567 1.58716L9.41608 4.31316V4.32545Z"
        fill="#E46240"
      />
    </svg>
    <p class="item-value">{{ value }}</p>
  </div>
</template>
<script>
export default {
  name: 'EvasionIcon',
  components: {},
  props: {
    height: {
      type: Number,
      default: 12,
    },
    width: {
      type: Number,
      default: 12,
    },
    value: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style lang="scss" scoped>
.attack-icon {
  position: relative;
  top: -1.6rem;
  background: #fff;
  text-align: center;
  border-radius: 50%;
  padding: 0 0.4rem;

  .item-value {
    font-weight: 700;
    font-size: 10px;
  }
}
</style>
