/**
 * @description 鏍囬鑷姩鐢熸垚瀵艰埅jQuery灏忔彃浠�
 * @author zhangxinxu(.com)
 * @version v1.0.0
 * @createtime 2018-04-27
 * @license MIT 鍙互澶嶅埗鍜屽晢鐢紝浣嗛渶瑕佷繚鐣欐娈电増鏉冪敵鏄�
 */


/**
 * 鏍囬鑷姩鐢熸垚瀵艰埅jQuery灏忔彃浠�
 * @param  Object options 鍙€夊弬鏁�
 * @return {[type]}         [description]
 */
$.fn.titleNav = function (options) {
    var defaults = {
        // 榛樿瀵艰埅鍏冪礌
        nav: null,
        // 婊氬姩瀹瑰櫒
        container: $(window),
        // fix瀹氫綅鏃跺€欒窛绂婚《閮ㄧ殑楂樺害
        offsetTop: 20
    };

    var params = $.extend({}, defaults, options || {});

    // 鍒囨崲绫诲悕
    var ACTIVE = 'active';

    // 鏍囬鍏冪礌鍜屽鑸厓绱�
    var elTitles = $(this);
    var elNav = params.nav;
    // 婊氬姩瀹瑰櫒
    var elContainer = params.container;
    // 瀵艰埅鍥哄畾瀹氫綅鐨勫亸绉婚珮搴�
    var offsetTop = params.offsetTop;

    if (!elContainer.length) {
        return elTitles;
    }

    var isContainerWindow = (elContainer[0] == window);

    if (!elNav) {
        elNav = $('<div class="title-nav-ul"></div>');
    }
    if (elNav.html() == '') {
        // 濡傛灉鏄┖瀵艰埅锛岃嚜鍔ㄥ垱寤�
        elTitles.each(function () {
            var id = this.id;
            var href = id ? ('#' + id) : 'javascript:';
            elNav.append($('<a href="' + href + '" class="title-nav-li" title="' + (this.textContent || this.innerHTML) + '">' + this.innerHTML + '</a>').data('target', $(this)));
        });
    }

    // 瀵艰埅append鍒伴〉闈腑
    if (document.body.contains(elNav[0]) == false) {
        if (isContainerWindow) {
            $('body').append(elNav);
        } else {
            elContainer.append(elNav);
        }
    }
    // 鍋忕Щ浣嶇疆
    var defaultOffsetTop = elNav.offset().top;



    // 婊氬姩琛屼负
    elContainer.on('scroll', function () {
        var indexNav = 0;
        var rectTopContainer = isContainerWindow ? 0 : elContainer[0].getBoundingClientRect().top;
        // 鐩墠婊氬姩鐨勯珮搴�
        var scrollTop = $(this).scrollTop();
        // 婊氬姩鍒板簳閮紝涓€瀹氭槸鏈€鍚庝竴涓�
        // 瀹瑰櫒鍐呴儴楂樺害
        var scrollHeight = document.body.scrollHeight;
        if (!isContainerWindow) {
            scrollHeight = elContainer[0].scrollHeight;
        }
        if (elContainer.height() + scrollTop >= scrollHeight - 1) {
            indexNav = elTitles.length - 1;
        } else {
            // 閬嶅巻姣忎釜鏍囬璺濈娴忚鍣ㄧ獥浣撲笂杈圭紭鐨勪綅缃�
            elTitles.each(function (index) {
                var distanceToTop = this.getBoundingClientRect().top - rectTopContainer;
                if (distanceToTop >= 0 || index === elTitles.length - 1) {
                    indexNav = index;
                    return false;
                }
            });
        }

        // 鑾峰彇鐩墠闇€瑕侀珮浜殑瀵艰埅鍏冪礌
        var elNavs = elNav.children();
        var elTargetNav = elNavs.eq(indexNav);
        if (elTargetNav.hasClass(ACTIVE) == false) {
            elNavs.removeClass(ACTIVE);
            elTargetNav.addClass(ACTIVE);
        }

        // 瀵艰埅鐨刦ixed琛屼负
        // 濡傛灉婊氬姩瓒冲澶氾紝鍥哄畾瀹氫綅
        if (scrollTop - defaultOffsetTop > -1 * offsetTop) {
            elNav.css({
                top: offsetTop,
                position: 'fixed'
            });
        } else {
            elNav.css({
                top: '',
                position: ''
            });
        }
    });

    // 瀵艰埅鐐瑰嚮琛屼负
    elNav.on('click', 'a', function (event) {
        var href = $(this).attr('href');
        var target = $(this).data('target') || $(href);
        // 瀵艰埅绱㈠紩
        var indexNav = elNav.find('a').index($(this));
        if (!target.length) {
            target = elTitles.eq(indexNav);
        }
        if (/^#/.test(href)) {
            event.preventDefault();
        }

        var scrollHeight = document.body.scrollHeight;
        if (!isContainerWindow) {
            scrollHeight = elContainer[0].scrollHeight;
        }

        var rectTopContainer = isContainerWindow ? 0 : elContainer[0].getBoundingClientRect().top;
        var scrollTop = target.offset().top - rectTopContainer;
        // 涓€灞忔湁澶氫釜鏍囬锛屽悓鏃舵粴鍔ㄥ埌搴曢儴鐨勫鐞�
        if (scrollTop + elContainer.height() > scrollHeight - 2 && indexNav !== elNav.find('a').length - 1) {
            scrollTop = scrollHeight - elContainer.height() - 2;
        }

        var scrollContainer = isContainerWindow ? $('html, body') : elContainer;

        // 浠ュ姩鐢绘柟寮忔粴鍔ㄥ畾浣�
        scrollContainer.animate({
            scrollTop: scrollTop
        });
    });

    elContainer.trigger('scroll');

    return elTitles;
};