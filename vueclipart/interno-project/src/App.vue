<template>
  <div>
      <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}

nav a.router-link-active {
  font-weight: bold;
  color: darkblue;
}
</style>
