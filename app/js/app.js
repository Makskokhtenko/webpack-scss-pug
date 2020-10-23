import 'jquery'
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import LazyLoad from 'lazyload';

// import '~components/input'
import '../scss/style.scss'
import { each } from 'jquery';

$(document).ready(function() {
    // adds SVG External Content support to all browsers
    svg4everybody();

    // Polyfill object-fit/object-position on <img>
    objectFitImages();

    // lazyload
    let images = document.querySelectorAll("img.lazyload");
    new LazyLoad(images);
});
