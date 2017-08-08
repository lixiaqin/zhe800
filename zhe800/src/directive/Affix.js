var Affix={
  inserted:function (el,binding) {
    let elTop=$(el).offset().top;
    console.log(elTop)
    $(document).scroll(function(){
      if($(document.body).scrollTop()>elTop){
        $(el).css({
          "position":"fixed",
          "top":binding.value,
          "left":0,
          "z-index":100,
        }).parent().css({
          "padding-top":elTop
        })
      }else{
        $(el).css({
          "position": "relative",
          "z-index":100,
        }).parent().css({
          "padding-top":0
        })
      }
    })
  },
  unbind:function () {
    $(document).off("scroll")
  }
}
export default Affix

