/** 
 * @Author: YISHI 
 * @Date: 2019-06-23 09:21:12 
 * @Desc:  用 Vue 模板做为弹窗内容 测试
 */

var vm = new Vue({
    el: '#app',
    data: {
        msg: 'xfj'
    }
});



layui.use(['laypage', 'layer'], function () {

    var layer = layui.layer,
        $ = layui.jquery;

    
    $('body').on('click', '*[ys-event]', function (e) {
        var othis = $(this), methid = othis.attr('ys-event');
        // 调用事件表
        events[methid] ? events[methid].apply(this, [othis, e]) : '';
    });
    // 事件表里面存放动作
    var events = {
        alert: function (othis, e) {
            layer.open({
                type: 1,
                content: $('#app')
            });
        }
    };
});