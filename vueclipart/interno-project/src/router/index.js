import Vue from 'vue'
import VueRouter from 'vue-router'
import PageBlog from '@/pages/PageBlog.vue'
import PageBlogDet from '@/pages/PageBlogDet.vue'
import PageIndex from '@/pages/PageIndex.vue'
import PageProject from '@/pages/PageProject.vue'
import Page404 from '@/pages/Page404.vue'

Vue.use(VueRouter)

// Define routes
const routes = [
  { path: '/', component: PageIndex },
  { path: '/blog', component: PageBlog },
  { path: '/blog-details', component: PageBlogDet },
  { path: '/project', component: PageProject },
  { path: '*', component: Page404 }
]

// Create the router instance
export const router = new VueRouter({
  routes,
  mode: 'history' // Optional: use history mode instead of hash mode
})
