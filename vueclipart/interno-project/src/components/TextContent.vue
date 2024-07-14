<template>
    <p>{{ content }}</p>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
