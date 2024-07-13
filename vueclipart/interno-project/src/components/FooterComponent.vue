<template>
    <footer class="row footer">
        <div class="col">
            <div class="col d-flex flex-row align-items-center">
                <img src="../assets/Logo.png" alt="interno logo">
                <h3 class="interno-logo">&nbsp;Interno</h3>
            </div>
            <div class="padded-31"></div>
            <div class="d-flex">
                <img src="../assets/TwitterIcon.png" alt="" class="icon">
                <img src="../assets/LinkedinIcon.png" alt="" class="icon">
            </div>
        </div>
        <div class="col d-flex justify-content-center text-start">
            <div>
                <h4 class="footer-hx">Страницы</h4>
                <div class="d-flex flex-column">
                    <br>
                    <a href="./index.html">Домой</a> <br>
                    <a href="./project.html">Проект</a> <br>
                    <a href="./blog.html">Блог</a>
                </div>
            </div>
        </div>
        <div class="col d-flex justify-content-end text-start">
            <div class="footer-contacts">
                <h4 class="footer-hx">Контакты</h4>
                <div class="d-flex flex-column">
                    <br>
                    <span>55 East Birchwood Ave. Brooklyn, New York 11201</span> <br>
                    <span>contact@interno.com</span> <br>
                    <span>(123) 456 - 7890</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* Your styles here */
</style>
