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
          bricks[i].style.position = 'static';
        }

        var columnHeights = {};
        for (var i=0; i<bricks.length; i++){
          columnHeights[bricks[i].offsetLeft] = 0;
        }
        //restack bricks
        var containerHeight = 0;
        for (var i=0; i<bricks.length; i++){
          var shortCol = null;
          for (var j in columnHeights){
            if (shortCol == null || columnHeights[shortCol] > columnHeights[j]){
              shortCol = j;
            }
          }

          var brick = bricks[i];
          brick.style.position = 'absolute';
          brick.style.left = shortCol + 'px';
          brick.style.top = columnHeights[shortCol] + 'px';

          var style = brick.currentStyle || window.getComputedStyle(brick);
          columnHeights[shortCol] += brick.offsetHeight + parseInt(style.marginBottom);
          containerHeight = Math.max(containerHeight, columnHeights[shortCol]);
          if (!brick.className.match(/loaded/)) brick.className = brick.className + ' loaded';
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