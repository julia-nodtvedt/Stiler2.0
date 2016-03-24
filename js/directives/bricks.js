angular.module("myApp").directive("bricks", function() {
  return {
    scope: {
    },
    link: function (scope, elm) {
      var adjustColumns = function(){
        var $ = angular.element;
        var bricks = elm[0].querySelectorAll('.masonry-brick');
        if (bricks.length == 0) return;
        for (var i=0; i<bricks.length; i++){
          bricks[i].style.top = 0;
        }

        var columns = {};
        for (var i=0; i<bricks.length; i++){
          var column = columns[bricks[i].offsetLeft] = columns[bricks[i].offsetLeft] || [];
          column.push(bricks[i]);
        }

        var containerHeight = 0;
        for (var i in columns){
          var height = 0;
          for (var j in columns[i]){
            var brick = columns[i][j];
            brick.style.top = (height - brick.offsetTop) + 'px';
            var style = brick.currentStyle || window.getComputedStyle(brick);
            height += brick.offsetHeight + parseInt(style.marginBottom);
            if (!brick.className.match(/loaded/)) brick.className = brick.className + ' loaded';
          }
          containerHeight = Math.max(containerHeight, height);
        }
        elm[0].style.height = containerHeight + 'px';
      }

      setTimeout(function(){
        var imgs = elm.find('img');
        var completeImgs = 0;
        var checkImg = function(){
          completeImgs += 1;
          if (completeImgs >= imgs.length)
            adjustColumns();
        }
        for (var i=0;i<imgs.length;i++){
          if (imgs[i].complete){
            completeImgs += 1;
          }else{
            imgs[i].addEventListener('load', checkImg);
            imgs[i].addEventListener('error', checkImg);
          }
        }
        if (completeImgs == imgs.length){
          adjustColumns();
        }
      }, 500);
      window.addEventListener('resize', adjustColumns);
    }
  }
}
);