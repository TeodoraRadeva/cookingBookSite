$(document).ready(function() {
    addFooter();
})

function addFooter() {
    $("footer").prepend(
        `<ul class="socialMedia">
            <li>
                <a href="#">
                    <i class="fab fa-facebook"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-youtube"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-pinterest-p"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>   
        <p>Copyright &copy; 2020 All rights reserved</p>`
    );
}    