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
        })
      }else{
        $(el).css({
          "position": "static",
          "z-index":100,
        })
      }
    })
  },
  unbind:function () {
    $(document).off("scroll")
  }
}
export default Affix

