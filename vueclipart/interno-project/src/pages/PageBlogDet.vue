<template>
    <div id="app">
      <div class="container">
          <NavComponent></NavComponent>
      </div>

      <header class="d-flex flex-column align-items-center">
          <div class="blogdet-header-photo"></div>
      </header>

      <div class="container">
          <div class="row blogdet-main">
              <div class="col col-8">
                  <div v-for="post in filteredBlogPosts" :key="post.id" class="blog-post">
                      <BlogPost :post="post"></BlogPost>
                  </div>
              </div>
              <div class="col col-4">
                  <h4 class="tags-header">Тэги</h4>
                  <div class="tags">
                    <span v-for="tag in tags" :key="tag" v-on:click="selectTag(tag)" :class="{ 'selected-tag': isTagSelected(tag) }" >{{ tag }}</span>
                  </div>
              </div>
          </div>

          <FooterComponent></FooterComponent>
      </div>
    </div>
  </template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    FooterComponent,
    BlogPost
  },
  data: function () {
    return {
      tags: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
      blogPosts: [
        {
          id: 1,
          post_title: 'Создадим лучший макет перепланировки',
          blog_photo_src: 'BlogPostPhoto.png',
          blog_photo_alt: 'Blog post photo',
          day: 26,
          month: 'Декабрь',
          year: 2022,
          desc: 'Интерьер / Домой / Декор',
          content: [
            { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
            { type: 'quote', value: 'Какая-то умная и красивая цитата' },
            { type: 'header', value: 'Design sprints are great' },
            { type: 'text', value: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
            {
              type: 'list',
              list_content: [
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
              ]
            },
            { type: 'img', src: 'PostContentImg.png' },
            { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.' }
          ],
          tags: ['Кухня', 'Архитектура']
        },
        {
          id: 2,
          post_title: 'Создадим лучший макет перепланировки',
          blog_photo_src: 'BlogPostPhoto.png',
          blog_photo_alt: 'Blog post photo',
          day: 26,
          month: 'Декабрь',
          year: 2022,
          desc: 'Интерьер / Декор',
          content: [
            { type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eget nibh nec sollicitudin. Aliquam vehicula ornare nulla, sed ultricies tortor rutrum eget. Nam semper, neque ut laoreet tristique, elit dolor volutpat erat, vel ultrices urna magna id nunc. Nam tristique sit amet justo et lobortis. Integer mattis massa id turpis posuere porttitor. Maecenas in laoreet odio. Nam volutpat diam nec purus elementum, vel ultricies tortor viverra. Proin a accumsan arcu, quis malesuada sem. Sed in cursus metus. Vivamus vitae accumsan arcu. Nullam tincidunt, dui maximus blandit sodales, lacus enim accumsan nulla, placerat varius nibh purus nec eros. Donec ac nisl in nulla lobortis consectetur eu ac magna. Morbi vel luctus leo. Quisque dapibus viverra sapien sed fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nisi, posuere sit amet sapien id, elementum mattis tellus.' },
            { type: 'quote', value: 'Какая-то умная и красивая цитата' },
            { type: 'header', value: 'Design sprints are awesome, actually' },
            { type: 'text', value: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
            {
              type: 'list',
              list_content: [
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.',
                'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
              ]
            },
            { type: 'img', src: 'PostContentImg.png' },
            { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.' }
          ],
          tags: ['Спальня', 'Здание', 'Архитектура', 'Планировка']
        }
      ],
      selectedTag: null
    }
  },
  computed: {
    filteredBlogPosts () {
      if (!this.selectedTag) {
        return this.blogPosts
      }
      return this.blogPosts.filter(post => post.tags.includes(this.selectedTag))
    }
  },
  methods: {
    selectTag (tag) {
      if (this.selectedTag === tag) {
        this.selectedTag = null
      } else {
        this.selectedTag = tag
      }
    },
    isTagSelected (tag) {
      return this.selectedTag === tag
    }
  }
}
</script>

  <style lang="scss">
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
      background-image: url('@/assets/BlogDetPhoto.jpg');
      margin-bottom: 200px;
      width: 100%;
      height: 356px;
  }

  .blogdet-main {
      margin-bottom: 30px;
  }
  </style>
