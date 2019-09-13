layui.use('form', function () {
    var form = layui.form;

    var els = document.querySelectorAll('input');
    els.forEach(function(item) {
        item.addEventListener('paste', function(e) {
            var type = this.getAttribute('type');
            var clipboardData = e.clipboardData;
            var textSelected = '';

            if (window.getSelection) {
                // 现代浏览器
                // 直接window.getSelection().toString()对于IE的输入框无效
                textSelected = this.value.slice(item.selectionStart, item.selectionEnd);
            } else if (document.selection) {
                // 旧IE浏览器
                textSelected = document.selection.createRange().text;
            }
            
            if (this.value.trim() === '' || textSelected === this.value) {

                e.preventDefault();
                e.stopPropagation();

                var paste = clipboardData.getData('text');

                if (type !== 'password') {
                    paste = paste.trim();
                }

                if (type === 'email') {
                    paste = paste.replace('#', '@');
                }

                this.value = paste;    
            }
            
        });
        item.addEventListener('drop', function (e) {
            var text = e.dataTransfer.getData('text');
            if (this.value == '' && text.match(/\d/g) && text.match(/\d/g).length == 11) {
                event.preventDefault();
                item.value = text.replace(/\D/g, '');
                item.select();
            }
        })
    });
});