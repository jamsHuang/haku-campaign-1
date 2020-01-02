import * as $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import KVSection from "./sections/KVSection";
import VideoIntroSection from "./sections/VideoIntroSection";
import ModelSection from "./sections/ModelSection";

$(function () {
    createScrollController();
    createSection();

    $(window).on('resize', windowResizeHandler);
});

function windowResizeHandler(e) {
    if (renderArr && renderArr.length) {
        renderArr.map(item => {
            item.target.resizeHandler();
        });
    }
}


/*
* ScrollMagic Controller
* */
let controller;

function createScrollController() {
    controller = new ScrollMagic.Controller();
}


/*
* Create Sections
* */
const renderArr = [
    {tagName: '#kv', class: KVSection, target: null},
    {tagName: '#videoIntro', class: VideoIntroSection, target: null},
    {tagName: '#model', class: ModelSection, target: null},
    {tagName: '#afterModel', class: ModelSection, target: null},
];

function createSection() {
    renderArr.map((item) => {
        const CurrentClass = item.class;
        const section = new CurrentClass(document.querySelector(item.tagName), controller);
        section.createScrollEffect();
        item.target = section;
    });
}