<template>
  <nav class="row d-flex align-items-center">
        <div class="col d-flex flex-row align-items-center">
            <img src="@/assets/Logo.png" alt="interno logo">
            <h3 class="interno-logo">&nbsp;Interno</h3>
        </div>
        <div class="col d-flex flex-row justify-content-end gap-5" style="font-size: 20px;">
            <router-link to="/" exact>Домой</router-link>
            <router-link to="/project">Проект</router-link>
            <router-link to="/blog">Блог</router-link>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavComponent'
}
</script>

<style scoped>
/* Your styles here */
</style>
