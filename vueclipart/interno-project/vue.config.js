module.exports = {
  pages: {
    index: {
      entry: './src/pages/Index/main.js',
      template: 'public/index.html',
      title: 'Index',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    blog: {
      entry: './src/pages/Blog/main.js',
      template: 'public/index.html',
      title: 'Blog',
      chunks: ['chunk-vendors', 'chunk-common', 'blog']
    },
    blogdet: {
      entry: './src/pages/Blogdet/main.js',
      template: 'public/index.html',
      title: 'Blog Details',
      chunks: ['chunk-vendors', 'chunk-common', 'blogdet']
    },
    project: {
      entry: './src/pages/Project/main.js',
      template: 'public/index.html',
      title: 'Blog Details',
      chunks: ['chunk-vendors', 'chunk-common', 'project']
    }
  }
}
