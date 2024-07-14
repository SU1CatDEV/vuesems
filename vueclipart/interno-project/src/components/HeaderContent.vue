<template>
    <h3 class="post-section-header">{{ content }}</h3>
</template>

<script>
export default {
  name: 'HeaderContent',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
