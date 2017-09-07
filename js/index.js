// function Ajax() {
//     this.url = url;
// }

// Ajax.prototype = {
//     constructor: Ajax,
//     Request: $.ajax({
//         url: '' + this.url,
//         dataType: 'json',
//         success: function (data) {
//             console.log(data);
//         }
//     })
// }



// -------------------------------------
// 导航数据请求的开始
$.ajax({
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function (data) {
        var navHtml = "";
        for (var i = 0; i < data.result.length; i++) {
            navHtml += "<li>" +
                "           <a href='./" + data.result[i].titlehref + "'>" +
                "               " + data.result[i].img +
                "               <h2>" + data.result[i].name + "</h2>" +
                "           </a>" +
                "       </li>"
        }
        $('#header .nav>ul').html(navHtml)
    }
})
// 导航数据请求的结束

// 商品推荐数据请求的开始
$.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function (data) {
        // console.log(data);
        var goodsHtml = "";
        for (var i = 0; i < data.result.length; i++) {
            goodsHtml += ""
        }

    }
})
// 商品推荐数据请求的结束