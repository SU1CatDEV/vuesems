<template>
  <div id="app">
    <div class="container text-center">
      <NavComponent />
    </div>

    <header class="d-flex flex-column align-items-center">
      <div class="blog-header-photo"></div>
        <div class="header-outer-card">
            <div class="header-inner-card">
                <h2>Статьи & <br> Новости</h2>
                <p class="text-center">Домой / <br> Блог</p>
            </div>
        </div>
    </header>

    <div class="container text-center">
      <div class="blog-block">
        <div class="recent-card text-start">
            <h2>Последний пост</h2>
            <div class="big-block-card d-flex">
                <img src="../../assets/RecentCard.png" alt="" class="recent-card-img">
                <div class="d-flex flex-column justify-content-between recent-card-margins">
                    <div>
                        <h4>Low Cost Latest Invented Interior Designing Ideas</h4>
                        <br>
                        <p class="extra-linespace">С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов. Перед появлением электронных издательств дизайнеры импровизировали в работе над макетами, изображая текст при помощи волнистых линий. С появлением самоклеющихся наклеек с напечатанным текстом «Lorem ipsum» появился более реалистичный способ обозначения расположения текста на странице.</p>
                    </div>
                    <div class="d-flex justify-content-between">
                        <span class="blog-card-date">26 December,2022</span>
                        <a href="#" class="small-modern-arrow d-flex justify-content-center align-items-center">
                            <img src="../../assets/SmallArrow.png" alt=">">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h2>Статьи & Новости</h2>
            <div class="blog-card-row row">
                <div class="col d-flex flex-column align-items-start" v-for="post in blogposts" :key="post.id">
                    <SmallPost :post="post"></SmallPost>
                </div>
            </div>

            <div class="blog-card-row row">
                <div class="col d-flex flex-column align-items-start" v-for="post in blogposts2" :key="post.id">
                    <SmallPost :post="post"></SmallPost>
                </div>
            </div>
        </div>
    </div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavComponent from '../../components/NavComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'
import SmallPost from '../../components/SmallPost.vue'

export default {
  name: 'App',
  data: function () {
    return {
      blogposts: [
        {
          title: 'Создадим лучший макет перепланировки',
          image: 'HomeBlog1.png',
          label: 'Дизайн кухни',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: ''
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          image: 'HomeBlog2.png',
          label: 'Дизайн для жизни',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: 'labellong'
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          image: 'HomeBlog3.png',
          label: 'Дизайн Интерьера',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: 'labellong'
        }
      ],
      blogposts2: [
        {
          title: 'Создадим лучший макет перепланировки',
          image: 'HomeBlog4.png',
          label: 'Дизайн кухни',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: ''
        },
        {
          title: 'Лучшие интерьерные идеи по низкой цене',
          image: 'HomeBlog5.png',
          label: 'Дизайн для жизни',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: 'labellong'
        },
        {
          title: 'Лучшие интерьерные решения для офисов',
          image: 'HomeBlog6.png',
          label: 'Дизайн Интерьера',
          date: {
            day: 26,
            month: 'Декабрь',
            year: 2022
          },
          addclass: 'labellong'
        }
      ]
    }
  },
  components: {
    NavComponent,
    FooterComponent,
    SmallPost
  }
}
</script>

<style>
.blog-header-photo {
    width: 100%;
    height: 356px;
    background-image: url("../../assets/BlogPhoto.jpg")
}

.header-outer-card {
    background-color: white;
    border-radius: 37px 37px 0 0;
    margin-top: -178px;
    padding: 41px 78px;
}

.header-inner-card {
    width: 347px;
}

.recent-card-margins {
    margin-left: 65px;
    margin-right: 34px;
}

.extra-linespace {
    line-height: 1.5;
}

.recent-card {
    margin-bottom: 88px;
}

.blog-block {
    margin: 104px 0 200px 0;
}

.recent-card h2 {
    margin-bottom: 27px;
}

.big-block-card {
    padding: 21px;
    border: 1px solid #E7E7E7;
    border-radius: 62px;
}

.recent-card-img {
    border-radius: 50px;
}

.blog-card-row {
    margin-top: 30px;
}

.label {
    background-color: white;
    padding: 4px 8px 8px 8px;
    border-radius: 8px 8px 8px 0;
    margin-top: -80px;
    margin-left: -145px;
    z-index: 1;
    max-width: none;
}

.labellong {
    margin-left: -95px;
}
</style>
