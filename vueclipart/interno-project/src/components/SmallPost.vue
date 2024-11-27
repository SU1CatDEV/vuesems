<template>
    <div class="index-blog-card">
        <div style="max-width: 340px;" class="mbottom-30">
            <div class="mbottom-21 home-blog-container">
                <img :src="imageSrc" alt="blog image 1" class="ibc-img">
                <div class="label text-start" :class="post.addclass">{{ post.label }}</div>
            </div>
            <h4 class="text-start">{{ post.title }}</h4>
        </div>
        <div class="d-flex justify-content-between align-items-center mbottom-16">
            <div class="text-start">
                <span class="blog-card-date">{{ post.date.day }} {{ post.date.month }},{{ post.date.year }}</span>
            </div>
            <router-link to="/blog-details" class="small-modern-arrow d-flex justify-content-center align-items-center">
                <img src="@/assets/SmallArrow.png" alt=">">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SmallPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      return require(`@/assets/${this.post.image}`)
    }
  }
}
</script>

<style scoped>
/* Your styles here */
</style>
