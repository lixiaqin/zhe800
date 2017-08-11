<template>
  <div class="home-page">
    <HeaderBar title="//status.tuanimg.com/statics/mz/common/img/logo116x45.png">
      <div class="header-center" slot="header-center"></div>
      <div class="header-right" slot="header-right">
        <router-link to="/classify">
          <img src="//status.tuanimg.com/statics/mz/index/img/category-icon.png" />
        </router-link>
      </div>
    </HeaderBar>
    <div>
      <NavTab :navList="navList"></NavTab>
      <Carousel :bannerList="bannerList"></Carousel>
      <MenuList :menuList="menuList"></MenuList>
      <ActiveItem :activeItem="activeItem">
        </ActiveItem><TimeDown endTime="1502542800000" class="timedown"/>
      
    </div>
  
    <wrap></wrap>
    <FooterBar></FooterBar>
  
  </div>
</template>

<script>
import HeaderBar from '../../components/Header'
import FooterBar from '@/components/Footer-bar'
import wrap from '@/components/Wrap'
import NavTab from '@/components/NavTab'
import Carousel from '@/components/Carousel'
import MenuList from '@/components/MenuList'
import ActiveItem from '@/components/ActiveItem'
import TimeDown from '@/components/TimeDown'

export default {
  name: 'home',
  components: {
    HeaderBar,
    FooterBar,
    NavTab,
    Carousel,
    MenuList,
    ActiveItem,
    TimeDown,
    wrap
  },
  data() {
    return {
      navList: [{
        name: '女装'
      }, {
        name: '鞋包'
      }, {
        name: '居家'
      }, {
        name: '母婴儿童'
      }, {
        name: '美妆'
      }, {
        name: '男装'
      }, {
        name: '内衣'
      }, {
        name: '配饰'
      }],

      bannerList: [],
      menuList: [],
      activeItem: {
        image:'//z11.tuanimg.com/imagev2/wxyy/750x210.0c68689180d3f829af45494526673fad.png',
        src:'#'
      }
    }
  },
  created() {
    var that = this
    this.$axios.get('/classType').then(function (res) {
      that.$store.dispatch('route/setRouter', res.data)
    })
    this.$axios.get('/priceData').then((res)=>{
        console.log(res)
        that.bannerList=res.data.bannerList;
        that.menuList=res.data.itemList;
        // that.newPeopleimg=res.data.newPeopleimg;
        // that.threeList=res.data.threeList;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home-page {
  margin-bottom: .4rem;
}
.header-right {
  width: .2rem;
  height: .18rem;
  img {
    width: 100%;
  }
}
</style>

