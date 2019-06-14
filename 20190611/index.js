/** 
 * @Author: YISHI 
 * @Date:   2019-06-13 13:41:33 
 * @Desc:   质量检查类
 */


;(function() {

    layui.use(['laydate', 'jquery', 'laytpl'], function () {
        var laydate = layui.laydate,
            $ = layui.jquery,
            laytpl = layui.laytpl;
        
        //日期范围
        laydate.render({
            elem: '#customDate',
            range: true,
            theme: '#393D49',
            done: function (value, date, endDate) {
                var button = $('button[ys-filter="dayCustom"]');
                button.hasClass('layui-btn-disabled')
                    ? button.removeClass('layui-btn-disabled')
                    : '';
            }
        });

        var THIS = 'ys-this', SHOW = 'ys-show';

        var InforCheck = function() {
            $('body').on('click', '*[ys-event]', function(e) {
                var othis = $(this),
                    methoid = othis.attr('ys-event');
                events[methoid] ? events[methoid].call(this, othis, e) : '';
            });
        };

        var events = {
            common: function(othis) {
                othis.siblings().removeClass(THIS);
                othis.addClass(THIS);
            },  
            friend: function(othis, e) {
                events.common(othis);
                destory.all();

                show.history()
                data.history();
            },
            history: function(othis, e) {
                events.common(othis);
                destory.day();
                destory.chatRecord();
                show.day();
            },
            day: function(othis, e) {
                events.common(othis);
                destory.chatRecord();
                show.chatRecord();

                data.chatRecord();
            },
            dayCustom: function(othis, e) {
                destory.chatRecord();
                show.chatRecord();

                data.chatRecord();
            }
        };

        var destory = {
            common: function (filter) {
                var ul = $('div[ys-filter=' + filter + ']');
                ul.hasClass(SHOW) ? ul.removeClass(SHOW) : '';
            },
            history: function() {
                var ul = $('div[ys-filter="historyList"');
                ul.hasClass(SHOW) ? ul.removeClass(SHOW) : '';

                ul.find('.layim-list-history').remove();

                ul.find('li').each(function (index, item) {
                    return $(item).hasClass(THIS)
                        ? $(item).removeClass(THIS)
                        : '';
                });
            },
            day: function() {
                var ul = $('div[ys-filter="dayList"');
                ul.hasClass(SHOW) ? ul.removeClass(SHOW) : '';

                ul.find('li').each(function(index, item) {
                    return $(item).hasClass(THIS) 
                                ? $(item).removeClass(THIS) 
                                : '';
                });
            },
            chatRecord: function() {
                var ul = $('div[ys-filter="chatRecord"');
                ul.hasClass(SHOW) ? ul.removeClass(SHOW) : '';

                ul.find('.layim-chat-main').remove();
            },
            all: function() {
                destory.history()
                destory.day()
                destory.chatRecord()
            }
        };

        var show = {
            common: function(filter) {
                var ul = $('div[ys-filter=' + filter +']');
                ul.hasClass(SHOW) ? '' : ul.addClass(SHOW);
            },
            history: function() {
                show.common('historyList');
            },
            day: function () {
                show.common('dayList');
            },
            chatRecord: function() {
                show.common('chatRecord');
            }
        };

        var friends = [
            {
                "username": "贤心",
                "id": "100001",
                "avatar": "https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg",
                "sign": "这些都是测试数据，实际使用请严格按照该格式返回",
                "status": "online"
            }, {
                "username": "刘小涛"
                , "id": "100001222"
                , "sign": "如约而至，不负姊妹欢乐颂"
                , "avatar": "https://tva4.sinaimg.cn/crop.0.1.1125.1125.180/475bb144jw8f9nwebnuhkj20v90vbwh9.jpg"
            }, {
                "username": "谢小楠"
                , "id": "10034001"
                , "avatar": "https://tva2.sinaimg.cn/crop.1.0.747.747.180/633f068fjw8f9h040n951j20ku0kr74t.jpg"
                , "sign": ""
            }, {
                "username": "马小云"
                , "id": "168168"
                , "avatar": "https://tva1.sinaimg.cn/crop.0.0.180.180.180/7fde8b93jw1e8qgp5bmzyj2050050aa8.jpg"
                , "sign": "让天下没有难写的代码"
            }
        ];
        var chatRes = {
            code: 0
            , msg: ''
            , data: [{
                username: '纸飞机'
                , id: 100000
                , avatar: 'http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg'
                , timestamp: 1480897882000
                , content: 'face[抱抱] face[心] 你好啊小美女'
            }, {
                username: 'Z_子晴'
                , id: 108101
                , avatar: 'http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg'
                , timestamp: 1480897892000
                , content: '你没发错吧？face[微笑]'
            }, {
                username: 'Z_子晴'
                , id: 108101
                , avatar: 'http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg'
                , timestamp: 1480897898000
                , content: '你是谁呀亲。。我爱的是贤心！我爱的是贤心！我爱的是贤心！重要的事情要说三遍~'
            }, {
                username: 'Z_子晴'
                , id: 108101
                , avatar: 'http://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg'
                , timestamp: 1480897908000
                , content: '注意：这些都是模拟数据，实际使用时，需将其中的模拟接口改为你的项目真实接口。\n该模版文件所在目录（相对于layui.js）：\n/css/modules/layim/html/chatlog.html'
            }]
        }

        var friendsTpl = [
            '<ul class="layui-layim-list" ys-filter="friendList">'
                ,'{{# layui.each(d, function (index, item) { }}'
                    ,'<li ys-event="friend" data-id="{{ item.id }}">'
                        ,'<img src="{{ item.avatar }}" />'
                        ,'<span>{{ item.username }}</span>'
                        ,'<p>{{ item.sign }}</p>'
                    ,'</li>'
                ,'{{#  }); }}'
            ,'</ul>'
            ,'{{#  if(d.length === 0){ }}'
            ,   '<div class="no-data">'
            ,       '<p>暂无数据</p>'
            ,   '</div>'
            ,'{{#  } }}'
        ].join('');

        var historyTpl = [
            '<ul class="layui-layim-list layim-list-history">'
                ,'{{# layui.each(d, function (index, item) { }}'
                    ,'<li ys-event="history" data-id="{{ item.id }}">'
                        ,'<img src="{{ item.avatar }}" />'
                        ,'<span>{{ item.username }}</span>'
                        ,'<p>{{ item.sign }}</p>'
                    ,'</li>'
                ,'{{#  }); }}'
            ,'</ul>'
            ,'{{#  if(d.length === 0){ }}'
            ,   '<div class="no-data">'
            ,       '<p>暂无数据</p>'
            ,   '</div>'
            ,'{{#  } }}'
        ].join('');

        var chatRecordTpl = [
            ,'<div class="layim-chat-main">'
                ,'<ul id="LAY_view">'
                    ,'<li class="layim-chat-mine">'
                        ,'<div class="layim-chat-user">'
                            ,'<img src="https://tva3.sinaimg.cn/crop.0.0.512.512.180/8693225ajw8f2rt20ptykj20e80e8weu.jpg" />'
                            ,'<cite><i>2016-12-05 08:31:22</i>纸飞机</cite>'
                        ,'</div>'
                        ,'<div class="layim-chat-text">'
                            ,'你好啊小美女'
                        ,'</div>'
                    ,'</li>'
                ,'</ul>'
            ,'</div>'
            ,'<div class="no-data">'
                ,'<p>暂无数据</p>'
            ,'</div>'
        ].join('');

        var data = {
            friend: function() {
                var friend = $('#ys-friend');
                var loading = friend.find('.loading-container');
                loading.show();

                setTimeout(() => {
                    var html = laytpl(friendsTpl).render(friends);
                    friend.append(html);
                    loading.hide();
                }, 1000);
                
            },
            history: function() {
                var history = $('#ys-history');
                var loading = history.find('.loading-container');
                loading.show();

                setTimeout(() => {
                    var html = laytpl(historyTpl).render(friends);
                    history.append(html);
                    loading.hide();

                }, 1000);
            },
            chatRecord: function() {
                var chatRecord = $('#ys-chatRecord');
                var loading = chatRecord.find('.loading-container');
                loading.show();

                setTimeout(() => {
                    var html = laytpl(chatRecordTpl).render(chatRes);
                    chatRecord.append(html);
                    loading.hide();

                }, 1000);
            }
        };

        // 初始化接口
        data.friend();

        var inforCheck = new InforCheck();

    });

})();