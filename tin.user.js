// ==UserScript==
// @name         match
// @namespace    https://github.com/eri2000567/tin
// @version      1.1.0
// @description  tinder match
// @author       You
// @match        https://tinder.com/app/recs
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/eri2000567/tin/raw/main/tin.user.js
// @downloadURL  https://github.com/eri2000567/tin/raw/main/tin.user.js
// @supportURL   https://github.com/eri2000567/tin




// ==/UserScript==

(function() {
    'use strict';
    function startLike() {
        const like_elem_error = document.evaluate("//main/div[1]/div/div/div[1]/div/div/div[4]/div/div[4]/button", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
        try{
            like_elem_error.snapshotItem(0).click();
        }catch(e){
            console.log( e.message );
        }
    }
    function tinderLike() {
        const min = 5, max = 10;
        const rand_time = Math.floor(Math.random() * (max - min + 1) + min);
        const rand_flag = Math.floor(Math.random() * (max - min + 1) + min);
        const like_elem = document.evaluate("//main/div[1]/div/div/div[1]/div/div/div[5]/div/div[4]/button", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
        const like_elem_error = document.evaluate("//main/div[1]/div/div/div[1]/div/div/div[4]/div/div[4]/button", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
        const unlike_elem = document.evaluate("//main/div[1]/div/div/div[1]/div/div/div[5]/div/div[2]/button", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
        var errorcount = 0;
        try{
            if(rand_flag>6){
                like_elem.snapshotItem(0).click();
                document.querySelector("body > div:nth-child(1) > div > div:nth-child(1) > div > main > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(4)").querySelectorAll("button")[0].click();
            }else{
                unlike_elem.snapshotItem(0).click();
            }
        }catch(e){
            console.log( e.message );
            errorcount ++;
            startLike()
            if (15 < errorcount) {
                window.location = "https://tinder.com/app/recs";
                errorcount = 0;
            }
        }
        setTimeout(tinderLike, rand_time * 700);
    }
    startLike()
    tinderLike()
})();


