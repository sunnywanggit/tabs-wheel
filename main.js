$('.tabs').each(function (index, ele) {
    $(ele).children('.tabs-bar').children('li').eq(0).addClass('active')
    $(ele).children('.tabs-content').children('li').eq(0).addClass('active')

})


$('.tabs').on('click', '.tabs-bar>li', function (e) {
    var $li = $(e.currentTarget)
    $li.addClass('active').siblings().removeClass('active')

    var index = $li.index()

    var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)

    $content.addClass('active').siblings().removeClass('active')

})
