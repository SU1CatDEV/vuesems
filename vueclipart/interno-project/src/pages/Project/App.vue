<template>
    <div id="app">
      <div class="container">
        <NavComponent></NavComponent>
      </div>

      <header class="d-flex flex-column align-items-center da-big-mb">
        <div class="project-header-photo"></div>
        <div class="header-outer-card">
            <div class="header-inner-card">
                <h2 class="text-center">Наш проект</h2>
                <p class="text-center">Домой / Проект</p>
            </div>
        </div>
      </header>

      <div class="container">
        <div class="d-flex justify-content-center">
          <div class="d-flex tag-wrapper text-center">
            <div v-for="tag in tags" :key="tag.id" :class="{ 'selected-tag': isTagSelected(tag) }" @click="selectTag(tag)">
              {{ tag }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col col-6">
            <ProjectPost v-for="post in thisPageFirstCol" :key="post.id" :post="post"></ProjectPost>
          </div>
          <div class="col col-6">
            <ProjectPost v-for="post in thisPageSecondCol" :key="post.id" :post="post"></ProjectPost>
          </div>
        </div>
        <div class="pagination da-big-mb">
          <button @click="prevPage" :disabled="pageNo === 1" class="d-flex align-items-center justify-content-center"><img src="../../assets/PagLeft.png" alt="<"></button>
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="{ active: page === pageNo }"
          >
            {{ fomattedPageNo(page) }}
          </button>
          <button @click="nextPage" :disabled="pageNo === totalPages || totalPages === 0" class="d-flex align-items-center justify-content-center"><img src="../../assets/PagRight.png" alt=">"></button>
        </div>

        <FooterComponent></FooterComponent>
      </div>
    </div>
</template>

<script>
import NavComponent from '../../components/NavComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'
import ProjectPost from '../../components/ProjectPost.vue'

export default {
  name: 'App',
  components: {
    NavComponent,
    ProjectPost,
    FooterComponent
  },
  data () {
    return {
      tags: ['Ванная комната', 'Спальня', 'Кухня', 'Гостиная'],
      projPosts: [ // please excuse the way i test my work. its 1 am and i need sleep but unfortunately the code captivates me.
        { id: 1, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 2, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 3, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 4, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 5, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 6, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 7, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 8, title: 'aa', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 9, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 10, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 11, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 12, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 13, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 14, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 15, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 16, title: 'bb', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 17, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 18, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 19, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Ванная комната'] },
        { id: 20, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 21, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 22, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 23, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 24, title: 'cc', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 25, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 26, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 27, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 28, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 29, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 30, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 31, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 32, title: 'dd', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 33, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 34, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 35, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 36, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 37, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 38, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 39, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 40, title: 'ee', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 41, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost1.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 42, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost2.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 43, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost3.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 44, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost4.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 45, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost5.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 46, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost6.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 47, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost7.png', photo_alt: 'Blog post photo', tags: ['Спальня'] },
        { id: 48, title: 'ff', desc: 'Интерьер / Домой / Декор', photo_src: 'ProjPost8.png', photo_alt: 'Blog post photo', tags: ['Спальня'] }
      ],
      selectedTag: null,
      pageNo: 1
    }
  },
  created () {
    this.selectedTag = this.tags[1]
  },
  computed: {
    filteredPosts () {
      return this.projPosts.filter(post => post.tags.includes(this.selectedTag))
    },
    totalPages () {
      return Math.ceil(this.filteredPosts.length / 8)
    },
    totalPagesArray () {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1)
    },
    visiblePages () {
      if (this.totalPages <= 3) {
        return this.totalPagesArray
      }
      if (this.pageNo === this.totalPages) {
        return [this.totalPages - 2, this.totalPages - 1, this.totalPages]
      } else if (this.pageNo === this.totalPages - 1) {
        return [this.totalPages - 2, this.totalPages - 1, this.totalPages]
      } else {
        return [this.pageNo, this.pageNo + 1, this.pageNo + 2]
      }
    },
    thisPagePosts () {
      const start = (this.pageNo - 1) * 8
      const end = start + 8
      return this.filteredPosts.slice(start, end)
    },
    thisPageFirstCol () {
      const col1Count = Math.ceil(this.thisPagePosts.length / 2)
      return this.thisPagePosts.slice(0, col1Count)
    },
    thisPageSecondCol () {
      const col1Count = Math.ceil(this.thisPagePosts.length / 2)
      return this.thisPagePosts.slice(col1Count)
    }
  },
  methods: {
    selectTag (tag) {
      this.selectedTag = tag
      this.pageNo = 1 // Reset to first page when changing tag
    },
    isTagSelected (tag) {
      return this.selectedTag === tag
    },
    nextPage () {
      if (this.pageNo < this.totalPages) {
        this.pageNo++
      }
    },
    prevPage () {
      if (this.pageNo > 1) {
        this.pageNo--
      }
    },
    goToPage (page) {
      this.pageNo = page
    },
    fomattedPageNo (page) {
      if (this.pageNo < 10) {
        return '0' + page
      } else {
        return page
      }
    }
  }
}
</script>

<style>
  .project-header-photo {
    background-image: url('../../assets/ProjectPhoto.jpg');
    width: 100%;
    height: 356px;
  }

  .da-big-mb {
    margin-bottom: 200px;
  }

  .header-outer-card {
    background-color: white;
    border-radius: 37px 37px 0 0;
    margin-top: -175px;
    padding: 41px 125px;
  }

  .header-inner-card {
    width: 347px;
  }

  .header-inner-card p {
    margin: 0;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 61px;
  }

  .pagination button {
    margin: 0 10px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    border: 1px solid #CDA274;
    padding: 0;
    background-color: white;
    font-size: 16px;
    font-weight: 500;
  }

  .pagination button.active {
    background-color: #F4F0EC;
    border: none;
  }

  .pagination button:disabled {
    display: none !important;
  }

  .tag-wrapper {
    border: 1px solid #CDA274;
    border-radius: 18px;
    width: fit-content;
    margin-bottom: 61px;
  }

  .tag-wrapper div {
    font-size: 18px;
    padding: 26px 66px;
    width: fit-content;
  }

  .selected-tag {
    background-color: #CDA274;
    color: white;
    border-radius: 18px;
  }
</style>
