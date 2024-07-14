<template>
    <div>
        <ol class="custom-bullets post-list">
            <li v-for="text in content" :key="text.id">{{ text }}</li>
        </ol>
    </div>
</template>

<script>
export default {
  name: 'ListContent',
  props: {
    content: {
      type: Array,
      required: true
    }
  }
}
</script>
