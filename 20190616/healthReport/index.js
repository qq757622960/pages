var text = '正常';
var green = '#76d864';

var vm = new Vue({
    el: '#app',
    data: {
        field: null,
        basedata: null,
        bmi: {
            text: text,
            color: green,
            isShow: true
        }
    },
    methods: {
        progress: function (value, type) {
            this['_' + type + 'Progress']
                ? this['_' + type + 'Progress'](value)
                : '';
        },
        _bmiProgress: function(value) {
            this.bmi.text = value.text;
            this.bmi.color = value.color;
        },
        _slowProgress: function(value) {
            this.slow.text = value.text;
            this.slow.color = value.color;
        },
        bmiToggle() {
            this.bmi.isShow = !this.bmi.isShow;
        }
    },
    created: function() {
        this.bmiProgressObj = progressTable.bmi
    }
});


layui.use(['form', 'layedit', 'laydate'], function () {
    var form = layui.form;

    setTimeout(() => {
        vm.basedata = {
            bmi: '12',
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