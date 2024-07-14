<template>
    <div>
        <div class="blog-post-titular">
            <h2 class="blog-post-header">{{ post.post_title }}</h2>
            <img :src="post.blog_photo_src" :alt="post.blog_photo_alt" class="blog-post-img">
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
.blog-post-titular {
    margin-bottom: 48px;
}

.blog-post-header {
    margin-bottom: 21px;
}

.blog-post:first-of-type {
    margin-top: 0;
}

.blog-post {
    margin-top: 30px;
}

.blog-post-img {
    margin-bottom: 46px;
    border-radius: 50px;
    width: 100%;
}

ol.custom-bullets {
    counter-reset: item;
    padding-left: 23px;
}

ol.custom-bullets li {
    display: block;
    position: relative;
    margin-bottom: 32px;
}

ol.custom-bullets:last-child {
    margin-bottom: 0;
}

ol.custom-bullets li::before {
    content: counter(item);
    counter-increment: item;
    position: absolute;
    left: -25px; /* Adjust as needed */
    color: #CDA274; /* Change bullet color */
    font-family: "DM Serif Display", "Noto Sans", serif;
}

.post-list {
    margin-top: 24px;
}

.post-img {
    height: 395px;
    width: 100%;
    background-size: 100% auto;
    border-radius: 50px;
    margin-top: 44px;
    margin-bottom: 35px;
}

.post-section-header{
    margin-bottom: 20px;
}

.quote {
    background-color: #F4F0EC;
    width: 100%;
    padding: 53px 227px;
    font-style: italic;
    color: #CDA274;
    border-radius: 50px;
    margin-top: 35px;
    margin-bottom: 27px;
}

.tags span {
    padding: 9px 30px;
    background-color: #F4F0EC;
    margin-bottom: 11px;
    margin-right: 10px;
    display: inline-block;
    font-size: 18px;
    border-radius: 10px;
}

.selected-tag {
    background-color: #292F36 !important;
    color: white;
}

.tags-header {
    margin-bottom: 24px;
}

.col {
    padding: 0 26px;
}

.blogdet-header-photo {
    background-image: url('../assets/BlogDetPhoto.jpg');
    margin-bottom: 200px;
    width: 100%;
    height: 356px;
}

.blogdet-main {
    margin-bottom: 30px;
}
</style>
