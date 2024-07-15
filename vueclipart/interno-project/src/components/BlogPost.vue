<template>
    <div>
        <div class="blog-post-titular">
            <h2 class="blog-post-header">{{ post.post_title }}</h2>
            <img :src="require(`@/assets/${post.blog_photo_src}`)" :alt="post.blog_photo_alt" class="blog-post-img">
            <div class="d-flex justify-content-between blog-post-meta">
                <span>{{ post.day }} {{ post.month }},{{ post.year }}</span>
                <span>{{ post.desc }}</span>
            </div>
        </div>
        <div v-for="item in post.content" :key="item.value">
            <HeaderContent v-if="item.type == 'header'" :content="item.value"></HeaderContent>
            <TextContent v-if="item.type == 'text'" :content="item.value"></TextContent>
            <QuoteContent v-if="item.type == 'quote'" :content="item.value"></QuoteContent>
            <ImgContent v-if="item.type == 'img'" :src="item.src"></ImgContent>
            <ListContent v-if="item.type == 'list'" :content="item.list_content"></ListContent>
        </div>
    </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue'
import TextContent from './TextContent.vue'
import QuoteContent from './QuoteContent.vue'
import ImgContent from './ImgContent.vue'
import ListContent from './ListContent.vue'

export default {
  name: 'BlogPost',
  components: {
    HeaderContent,
    TextContent,
    QuoteContent,
    ImgContent,
    ListContent
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
