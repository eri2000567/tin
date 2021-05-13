// ==UserScript==
// @name         match
// @namespace    https://github.com/eri2000567/tin
// @version      0.1
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

    var likekkcount = 1;
    var kkkk = 0;
    var maxlikecountt = 80;
    var errorcount = 0;


    function mymyliked() {

        if (Math.floor(2 * Math.random()) == 1) {
            try {
                document.querySelector(".recsCardboard__cardsContainer > div:nth-of-type(2)").querySelectorAll("button")[3].click();
                console.log('Liked ' + likekkcount);
                likekkcount++;
                kkkk++;
            } catch (e){
                errorcount ++;
                console.log(e.message);
            }

        } else {
            try {
                document.querySelector(".recsCardboard__cardsContainer > div:nth-of-type(2)").querySelectorAll("button")[1].click();
            } catch (e){
                errorcount ++;
            }
        }
        if (4 < errorcount) {
            window.location = "https://tinder.com/app/recs";
            errorcount = 0;
        }
    };

    function mypopcheck() {
        var messageexist = document.querySelector("body > div:nth-child(1) > div > div:nth-child(1) > div > main > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(3) > a > button").querySelectorAll("span")[0].textContent;
        if (messageexist == "メッセージの送信") {
            console.log("yes match");
            document.querySelector("body > div:nth-child(1) > div > div:nth-child(1) > div > main > div:nth-child(2) > div > div > div:nth-child(1) > div > div:nth-child(4)").querySelectorAll("button")[0].click();
        }
    };

    function mypopcheck2() {
        var messageexist = document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(2) > button:nth-child(2)").querySelectorAll("span")[0].textContent;
        if (messageexist == "興味なし") {
            console.log("not interrest");
            document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(2)").querySelectorAll("button")[1].click();
        }

    };

    function mypopcheck3() {
        var messageexist = document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(4) > div > div:nth-child(1)").textContent;
        if (messageexist == "このメンバーはすごい人気みたい。") {
            document.querySelector("body > div:nth-child(2) > div > div").querySelectorAll("button")[1].click();
            console.log('upgrade');
        }
    };

    function mypopcheck4() {
        var messageexist = document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > div > div > span > div > h3").textContent;
        if (messageexist == "Likeの最高数に達しました") {
            //document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(3) > button:nth-child(2)").click();
            throw new Error('終了します');
            //return "like max end";

        }
    };

    function mypopcheck5() {
        var messageexist = document.querySelector("body > div:nth-child(2) > div > div > div:nth-child(1) > div:nth-child(2) > h3").textContent;
        if (messageexist == "Like がもうありません！") {
            throw new Error('終了します');
            //return "like max end";

        }
    };

    function mymycheck() {
        if (kkkk < maxlikecountt) {
            try {
                mypopcheck();
            } catch(e) {
                console.log( e.message );
            }
            try {
                mypopcheck2();
            } catch(e) {
                console.log( e.message );
            }
            try {
                mypopcheck3();
            } catch(e) {
                console.log( e.message );
            }
            try {
                mypopcheck4();
            } catch(e) {
                console.log( e.message );
                if (e.message == "終了します") {
                    window.close;
                    //throw new Error('スクリプト停止');
                }
            }
            try {
                mypopcheck5();
            } catch(e) {
                console.log( e.message );
                if (e.message == "終了します") {
                    window.close;
                    //throw new Error('スクリプト停止');
                }
            }
            mymylike();
            setTimeout(mymycheck, 3000);
        }
    };

    function mymylike() {
        let i;
        for (i = 0; i < 1; i++) {
            task(i);
        };

        function task(i) {
            setTimeout(mymyliked, 3000 * i);
        };
    };

    mymycheck();
})();
