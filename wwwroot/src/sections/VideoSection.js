import AbstractElement from "./AbstractElement";

class VideoSection extends AbstractElement {

    constructor(htmlElement, smController) {
        super(htmlElement);

        this.smController = smController;
        this.triggerScenes = [];
        this.triggerNodes = this.htmlElement.querySelectorAll('.trigger');
    }


    resizeHandler() {
        if (this.triggerScenes && this.triggerScenes.length) {
            const triggerList = Array.apply(null, this.triggerNodes);
            triggerList.map((item, index) => {
                const scene = this.triggerScenes[index];
                scene.duration(item.clientHeight);
            });
        }
        super.resizeHandler();
    }

    createScrollEffect() {
        // triggers
        const triggerList = Array.apply(null, this.triggerNodes);
        triggerList.map((item, index) => {
            const triggerScene = new ScrollMagic.Scene({
                triggerElement: item,
                triggerHook: 0.5,
                duration: item.clientHeight
            })
                .on('enter', (event) => this.animateContent(index))
                .on('leave', (event) => this.resetContent(index))
                .addTo(this.smController);
            this.triggerScenes.push(triggerScene);
        });
    }

    animateContent(triggerId) {

    }

    resetContent(triggerId) {

    }
}

export default VideoSection;