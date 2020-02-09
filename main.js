function Tabs(selector) {
    this.element = $(selector)
    // 为什么这两个函数命名在下面才声明，这里却可以使用呢？
    // 你去回顾一下new那一章，new可以帮我们做很多事情
    // 其中一件事情就是帮你把原型链给绑上
    // this__proto__ === Tabs.prototype
    this.init()
    this.bindEvents()
}

//初始化
Tabs.prototype.init = function () {
    this.element.each(function (index, ele) {
        $(ele).children('.tabs-bar').children('li').eq(0).addClass('active')
        $(ele).children('.tabs-content').children('li').eq(0).addClass('active')

    })
}

//绑定事件
Tabs.prototype.bindEvents = function () {
    this.element.on('click', '.tabs-bar>li', function (e) {
        var $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
        var index = $li.index()
        var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
        $content.addClass('active').siblings().removeClass('active')
    })
}


var tabs = new Tabs('.tabs')