"use strict";

Vue.component('nav-component', {
    template: `
        <nav class="row d-flex align-items-center">
            <div class="col d-flex flex-row align-items-center">
                <img src="../img/Logo.png" alt="interno logo">
                <h3 class="interno-logo">&nbsp;Interno</h3>
            </div>
            <div class="col d-flex flex-row justify-content-end gap-5" style="font-size: 20px;">
                <a href="#">Домой</a>
                <a href="#">Проект</a>
                <a href="#">Блог</a>
            </div>
        </nav>`
});

Vue.component('footer-component', {
    template: `
        <footer class="row footer">
            <div class="col">
                <div class="col d-flex flex-row align-items-center">
                    <img src="../img/Logo.png" alt="interno logo">
                    <h3 class="interno-logo">&nbsp;Interno</h3>
                </div>
                <div class="padded-31"></div>
                <div class="d-flex">
                    <img src="../img/TwitterIcon.png" alt="" class="icon">
                    <img src="../img/LinkedinIcon.png" alt="" class="icon">
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
        </footer>`
});
