$(function(){
    var s = 2.273
    var u = Math.floor(2e3 * s),
        qNum = 14, //题目数
        score = 0, //分数
        result=false;
    //找不同的数据 的正确结果
    var data = { //数据信息：分数和正确的结果
        1:{"score":1,result:"2"},
        2:{"score":1,result:"2"},
        3:{"score":1,result:"2"},
        4:{"score":1,result:"2"},
        5:{"score":1,result:"2"},
        6:{"score":1,result:"2"},
        7:{"score":1,result:"2"},
        8:{"score":1,result:"2"},
        9:{"score":1,result:"2"},
        10:{"score":1,result:"2"},
        11:{"score":1,result:"2"},
        12:{"score":1,result:"2"},
        13:{"score":1,result:"2"},
        14:{"score":1,result:"2"}
    };
    var y = function(e) {
        var t = Date.now();
        u = window.setInterval(function() {
                var n = Date.now();
                var i = Math.round((n - t) * .1);
                e -= i;
                t = n;
                $("#timer").html(m(e));

                if (e <= 0) {
                    clearInterval(u);
                    u = null;
                    $("#retry").css({
                        display: "block"
                    }).off().on("click",
                        function() {
                            location.reload();
                        });
                    $("#timer").css({
                        display: "none"
                    });
                    return;
                }
            },
            1e3 / 100)
    };
    var score = function(c){
        console.log(parseFloat($("#score").html()));
        $("#score").html(c+parseFloat($("#score").html()));
    };
    var g = function() { //初始化方法
        var e = 3,
            r = -4,
            t = $("#countdown");
        t.css({
            display: "block"
        });
        $("#retry").css({display: "none"});
        t.find("h1").html(e);
        $("#timer").html(m(r * 100 + 900)).css({
            display: "block"
        });
        var n = window.setInterval(function() {
                e--;
                t.find("h1").html(e);
                if (e === 0) {
                    clearInterval(n);
                    u = null;
                    t.css({
                        display: "none"
                    });
                    y(r * 100 + 900);
                    return ;
                }
            },
            1e3)
    };
    var m = function(e) {//转时间的方法
        var t = e.toString();
        while (t.length < 4) {
            t = "0" + t
        }
        var n = t.substr(0, 2) + ":" + t.substr(2, 2);
        return n
    };
    g();
    /*$("#retry").click(function(){
        setTimeout(function(){
            g();
        },1000);
    });*/
    $("#u-find-1 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findOne"),$(".findTwo"),1);
    });
    $("#u-find-2 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findTwo"),$(".findThree"),2);
    });
    $("#u-find-3 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findThree"),$(".findFour"),3);
    });
    $("#u-find-4 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findFour"),$(".findFive"),4);
    });
    $("#u-find-5 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findFive"),$(".findSix"),5);
    });
    $("#u-find-6 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findSix"),$(".findSeven"),6);
    });
    $("#u-find-7 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findSeven"),$(".findEight"),7);
    });
    $("#u-find-8 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findEight"),$(".findNine"),8);
    });
    $("#u-find-9 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findNine"),$(".findTen"),9);
    });
    $("#u-find-10 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findTen"),$(".findEleven"),10);
    });
    $("#u-find-11 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findEleven"),$(".findTwelve"),11);
    });
    $("#u-find-12 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findTwelve"),$(".findThirteen"),12);
    });
    $("#u-find-13 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findThirteen"),$(".findFourteen"),13);
    });
    $("#u-find-14 li").click(function(){
        var _this = $(this);
        findNext(_this,$(".findFourteen"),$(".findFifteen"),14);
    });
    // $("#u-find-15 li").click(function(){
    //     var _this = $(this);
    //     if(_this.attr("data-num")==data[1].result){
    //         score(data[15].score);
    //         clearInterval(u);
    //         setTimeout(function(){
    //             $(".findFifteen").addClass("hide");
    //             $(".findSeventeen").removeClass("hide");
    //             y(500);
    //         },1000);
    //     }
    // });
    function findNext(obj,oNow,oNext,num){
        if(obj.attr("data-num")==data[1].result && u){
            score(data[1].score);
            clearInterval(u);
            if(num==qNum){
                $(".repay").css({"display":"block"});
                return ;
            }
            setTimeout(function(){
                oNow.addClass("hide");
                oNext.removeClass("hide");
                y(500);
            },1000);

        }
    }
    $(".repay").click(function(){
        location.reload();
    });

});