<template>
    <div class="project-post">
        <img
            :src="imageSrc"
            :alt="post.photo_alt"
            class="proj-image"
        />
        <div class="d-flex justify-content-between align-items-center">
            <div class="text-start ic-header-wrapper">
                <h4 class="index-card-header">{{ post.title }}</h4>
                <span>{{ post.desc }}</span>
            </div>
            <a
                href="#"
                class="modern-arrow d-flex justify-content-center align-items-center"
            >
                <img src="../assets/ModernArrow.png" alt=">" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageSrc () {
      return require(`@/assets/${this.post.photo_src}`)
    }
  }
}
</script>

<style>
.project-post {
    margin-bottom: 35px;
}

.proj-image {
    width: 100%;
    margin-bottom: 24px;
}
</style>
