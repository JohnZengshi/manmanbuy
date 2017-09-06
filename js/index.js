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
        console.log(data.result)
        $('#header .nav>ul').html(template('template_1', data.result))
    }
})


// 导航数据请求的结束