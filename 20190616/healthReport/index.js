
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

var vm = new Vue({
    el: '#app',
    data: {
        field: null,
        basedata: null
    }
});


layui.use(['form', 'layedit', 'laydate'], function () {
    var form = layui.form;

    setTimeout(() => {
        vm.basedata = {
            username: '张某某',
            gender: '女',
            age: 26,
            stature: 170,
            goal: 50
        }
    }, 500);

    form.on('submit(demo)', function (data) {
        console.log(data.field);
        vm.field = data.field;
        return false;
    });
});