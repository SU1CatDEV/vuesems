"use strict";

Vue.component('header-content', {
    template: '<h3 class="post-section-header">{{ content }}</h3>',
    props: ['content']
});

Vue.component('text-content', {
    template: '<p>{{ content }}</p>',
    props: ['content']
});

Vue.component('quote-content', {
    template: `
            <div class="quote d-flex flex-column align-items-center justify-content-center">
                <img src="../img/quote.png"/>
                {{ content }}
            </div>`,
    props: ['content']
});

Vue.component('img-content', {
    template: `<div :style="bgImgStyles" class="post-img"></div>`,
    props: ['src'],
    computed: {
        bgImgStyles() {
            return {
                backgroundImage: `url(${this.src})`,
                
            }
        }
    }
});

Vue.component('list-content', {
    template: `
        <div>
            <ol class="custom-bullets post-list">
                <li v-for="text in content">{{ text }}</li>
            </ol>
        </div>
    `,
    props: ['content']
})

Vue.component('blog-post', {
    template: `<div>
                    <div class="blog-post-titular">
                        <h2 class="blog-post-header">{{ post.post_title }}</h2>
                        <img :src="post.blog_photo_src" :alt="post.blog_photo_alt" class="blog-post-img">
                        <div class="d-flex justify-content-between blog-post-meta">
                            <span>{{ post.day }} {{ post.month }},{{ post.year }}</span>
                            <span>{{ post.desc }}</span>
                        </div>
                    </div>
                    <div v-for="item in post.content" :key="item.value">
                        <header-content v-if="item.type == 'header'" :content="item.value"></header-content>
                        <text-content v-if="item.type == 'text'" :content="item.value"></text-content>
                        <quote-content v-if="item.type == 'quote'" :content="item.value"></quote-content>
                        <img-content v-if="item.type == 'img'" :src="item.src"></img-content>
                        <list-content v-if="item.type == 'list'" :content="item.list_content"></list-content>
                    </div>
                </div>`,
    props: ['post']
});

new Vue({
    el: "#app",
    data: {
        tags: ['Кухня', 'Спальня', 'Здание', 'Архитектура', 'Планировка'],
        blogPosts: [
            {
                id: 1,
                post_title: "Создадим лучший макет перепланировки",
                blog_photo_src: "../img/BlogPostPhoto.png",
                blog_photo_alt: "Blog post photo",
                day: 26,
                month: "Декабрь",
                year: 2022,
                desc: "Интерьер / Домой / Декор",
                content: [
                    { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке. В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
                    { type: 'quote', value: 'Какая-то умная и красивая цитата' },
                    { type: 'header', value: 'Design sprints are great' },
                    { type: 'text', value: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
                    { type: 'list', list_content: [
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.', 
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.', 
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
                        ]
                    },
                    { type: 'img', src: '../img/PostContentImg.png' },
                    { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.' }
                ],
                tags: ['Кухня', 'Архитектура']
            },
            {
                id: 2,
                post_title: "Создадим лучший макет перепланировки",
                blog_photo_src: "../img/BlogPostPhoto.png",
                blog_photo_alt: "Blog post photo",
                day: 26,
                month: "Декабрь",
                year: 2022,
                desc: "Интерьер / Декор",
                content: [
                    { type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus eget nibh nec sollicitudin. Aliquam vehicula ornare nulla, sed ultricies tortor rutrum eget. Nam semper, neque ut laoreet tristique, elit dolor volutpat erat, vel ultrices urna magna id nunc. Nam tristique sit amet justo et lobortis. Integer mattis massa id turpis posuere porttitor. Maecenas in laoreet odio. Nam volutpat diam nec purus elementum, vel ultricies tortor viverra. Proin a accumsan arcu, quis malesuada sem. Sed in cursus metus. Vivamus vitae accumsan arcu. Nullam tincidunt, dui maximus blandit sodales, lacus enim accumsan nulla, placerat varius nibh purus nec eros. Donec ac nisl in nulla lobortis consectetur eu ac magna. Morbi vel luctus leo. Quisque dapibus viverra sapien sed fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam nisi, posuere sit amet sapien id, elementum mattis tellus.' },
                    { type: 'quote', value: 'Какая-то умная и красивая цитата' },
                    { type: 'header', value: 'Design sprints are awesome, actually' },
                    { type: 'text', value: 'В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...»' },
                    { type: 'list', list_content: [
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.', 
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.', 
                            'С того времени этот, похожий на латинский, текст стал стандартом в печатной промышленности для примеров шрифтов и текстов.'
                        ]
                    },
                    { type: 'img', src: '../img/PostContentImg.png' },
                    { type: 'text', value: 'В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры на латинском языке.' }
                ],
                tags: ['Спальня', 'Здание', 'Архитектура', 'Планировка']
            },
        ],
        selectedTag: null
    },
    computed: {
        filteredBlogPosts() {
            if (!this.selectedTag) {
                return this.blogPosts;
            }
            return this.blogPosts.filter(post => post.tags.includes(this.selectedTag));
        }
    },
    methods: {
        selectTag(tag) {
            if (this.selectedTag === tag){
                this.selectedTag = null;
            } else {
                this.selectedTag = tag;
            }
        },
        isTagSelected(tag) {
            return this.selectedTag === tag;
        }
    }
});
