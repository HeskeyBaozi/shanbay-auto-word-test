'use strict';

if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
    throw Error('jQuery not founded');
}

const options = {
    delay: 200 // click delay
};


function triggerGenerator(targetSelector) {
    return () => new Promise((resolve, reject) => {
        setTimeout(() => {
            let target = $(targetSelector);
            if (target.length > 0) {
                target.trigger('click');
            }
            resolve();
        }, options.delay);
    });
}

const clickKnown = triggerGenerator('.known');
const clickContinue = triggerGenerator('.continue');
const progress = document.querySelector('.progress-success');

(async() => {
    try {
        while (parseInt(progress.style.width) !== 100) {
            await clickKnown();
            await clickContinue();
        }
        await clickContinue();
    } catch (error) {
        console.log(`[ERROR] ${error}`);
    }
})();