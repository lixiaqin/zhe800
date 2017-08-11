<template>
    <div class="time-down">
        <i v-for="item in timeArr" :class="{maohao: item ==':' }">{{item | timeNum}}</i>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'timeDown',
  props: {
      endTime: {
          default: ''
      }
  },
  data () {
    return {
        timeArr: [],
        timeInter: ''
    }
  },
  created () {
      const that = this;
      this.timeInter = setInterval(function(){
        that.setTimeDown();
      },1000)
  },
  methods: {
    setTimeDown () { 
        let time = +new Date();
        let distance = this.endTime-time;

        this.timeArr = this.getTimeArr( distance )
    },

    getTimeArr ( timeStr ) {
        let miao = parseInt( timeStr / 1000 );
        let fen = 0;
        let shi = 0;

        if( miao > 60 ){
            fen = parseInt(miao/60);
            miao = miao%60;
            if( fen > 60 ){
                shi = parseInt(fen/60)
                fen = fen%60;
            }
        }
        return [ shi,':',fen,':',miao ];
    }
  },

  destroyed () {
    clearInterval( this.timeInter )
  }
}
</script>

<style scoped lang="less">
.time-down{
    z-index:1000;
    i:not(.maohao){
        height: 0.25rem;
        width: 0.25rem;
        background: #666;
        color: #fff;
        display: inline-block;
        text-align: center;
        line-height: 0.25rem;
        border-radius: 3px;
    }
}
</style>
