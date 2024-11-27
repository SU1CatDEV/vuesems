<template>
    <div class="quote d-flex flex-column align-items-center justify-content-center">
        <img src="@/assets/quote.png"/>
        {{ content }}
    </div>
</template>

<script>
export default {
  name: 'QuoteContent',
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>
