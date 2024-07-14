<template>
    <div :style="bgImgStyles" class="post-img"></div>
</template>

<script>
export default {
  name: 'ImgContent',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  computed: {
    bgImgStyles () {
      return {
        backgroundImage: `url(${this.src})`
      }
    }
  }
}
</script>
