

<template>
   <div class="classify-page">
     <HeaderBar class='header'>
        <div class="header-left" slot="header-left"><i></i></div>
        <div class="header-center" slot="header-center"><p>连衣裙</p></div>
     </HeaderBar>
     <TabList :classifyList='classifyList'>
        <div slot="classif">sdfdsfds</div>
        <div slot="sale">sdfsdfds</div>
     </TabList>
     
   </div>
</template>

<script>
import HeaderBar from '@/components/Header'
import TabList from '@/components/Wrap/compontent/tablist'
export default {
  name: 'Classify',
  data () {
    return {
     classifyList:[{
        name:'分类',
        component:'classif'
      },{
        name:'在售品牌',
        component:'sale'
      }],
    }
  },
  components:{
      HeaderBar,
      TabList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classify-page{
   .header-bar{
    border-bottom:.01rem solid #ccc;
    justify-content: flex-start;
  }
}

.header-left{
     width: .1rem;
     height: .1rem;
     margin-right:.1rem;
    i{
        display: block;
        width: .1rem;
        height: .1rem;
        border-bottom: .02rem solid #2b2929;
        border-left: .02rem solid #2b2929;
        -webkit-transform: rotate(45deg)
    }
}
.header-center{
    width:2.6rem;
    p{  
       
        height:.24rem;
        background:#eeeeee;
        border-radius:.1rem;
        font-size: 10px;
        display: flex;
        align-items: center;
        &:before{
            content:'';
            width:.14rem;
            height:.14rem;
            display:inline-block;
            border:.01rem solid #b5b5b5;
            border-radius:50%;
            margin:0 .06rem;
        }
    }
}
.classtabs{
    width:100%;
    height:.6rem;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content: center;
    align-items: center;
    .classList{
        border:1px solid #ef4949;
        border-radius:.05rem;
        display:flex;
        justify-content: center;
        align-items: center;
         color:#ef4949;
        .classify{
            &:first-child{
            background:#ef4949;
            color:#fff;
         }
        }
      span{
          display:inline-block;
           padding:.1rem .2rem;
           
            
      }
            
    }
}
</style>

