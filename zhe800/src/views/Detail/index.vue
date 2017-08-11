<template>
  <div class="detail-page">
   <div class="detail-box">
     <div class="detailList">
         <swiper :options="swiperOption" ref="mySwiper" class='imgs'>
         <swiper-slide v-for='i in detailList.imgurls'>
           <img :src="i" alt="">
         </swiper-slide>  
         <div class="swiper-pagination"  slot="pagination"></div>     
       </swiper>
       <p class="introduce">{{detailList.introduce}}</p>
       <div class='privilege'>
         <span class="price">￥{{detailList.price}}</span>
         <span class="oldprice">￥{{detailList.oldPrice}}</span>
         <span class="postage">包邮</span>
         <span class="postage">{{detailList.man}}</span>
       </div>
       <p class="pattern">{{detailList.introduce}}</p>
     </div>
     <div class="sales">
         <div class="promotional">
             <span>促销</span>
             <div class='promot'>
                 <p><b>积分</b>购买最多送20积分</p>
                 <p class='arrows'></p>
            </div>
            
        </div>
        <div class='serverclass'>
            <span>服务</span>
                <div class='servers'>
                    <div>
                        <p class='p'>发货超时必赔,8天包退,退货补运费</p>
                        <p>支付花呗分期,人工验货,24小时发货</p>
                    </div>
                    <p class='arrows'></p>
                </div>
         </div>
     </div>
      <div class="particulars">
          <p>
              <span>请选择颜色</span>
              <span class="arrows"></span>
          </p>
          <p>
              <span>商品参数</span>
              <span class="arrows"></span>
          </p>
      </div>
    </div>
    <Footers :detailList="detailList"></Footers>
  </div>
    
</template>

<script>
    import weui from 'weui'
    import "@/static/lib/weui.min.css"
    import Footers from './component/footer'
    export default {
        name: 'detail',
        components:{
            Footers
        },
        data() {
            return {
                detailList: [],
                swiperOption: {
                    pagination: '.swiper-pagination'
                }
            }
        },
        created() {
            let that = this;
            this.$axios.get('/priceData').then((res) => {
                var data = res.data.explosionData;
                for (var i = 0; i < data.length; i++) {

                    if (data[i].id == this.$route.params.id) {
                        console.log(1)
                        that.detailList = data[i];
                    }
                }
            })

        }
    }
</script>

<style scoped lang='less'>
    .detail-box{
    margin-bottom:.5rem;
    background: #f8f8f8;
     height: 100%;
    }
    .detail-page {
        
      background: #f8f8f8; 
        
    }
    
    .detailList {
        background: #fff;
        .imgs {
            width: 100%;
            img {
                width: 100%;
            }
        }
        .introduce {
            height: .3rem;
            line-height: .3rem;
            padding-left: .1rem;
        }
        .privilege {
            width: 100%;
            height: .30rem;
            .price {
                font-size: .24rem;
                margin: 0 .05rem;
            }
            .oldprice {
                text-decoration: line-through;
                color: #ccc;
            }
            .postage {
                color: rgba( 230, 0, 68, 1);
                border: 1px solid rgba( 230, 0, 68, 1);
                margin-left: .05rem;
                font-size: .1rem;
            }
        }
        .pattern {
            font-size: .1rem;
            color: rgba( 230, 0, 68, 1);
            padding: .08rem .1rem;
        }
    }
    
    .sales {
        width: 100%;
        margin-top: .1rem;
        background: #fff;
        .promotional {
            width: 100%;
            border-bottom: .01rem solid #ccc;
            position: relative;
            padding: .14rem 0;
            span {
                position: absolute;
                display: block;
                height: 100%;
                width: .46rem;
                text-align: center;
                font-size: .14rem;
                color: #999999;
            }
            .promot {
                padding-left: .46rem;
                display: flex;
                justify-content: space-between;
                b {
                    color: #e60044;
                }
                p {
                    font-size: .12rem;
                    &:last-child {
                        padding-right: .1rem;
                        font-size: .2rem;
                    }
                }
            }
        }
        .serverclass {
            width: 100%;
            position: relative;
            padding: .14rem 0;
            span {
                position: absolute;
                display: block;
                height: 100%;
                width: .46rem;
                text-align: center;
                font-size: .14rem;
                color: #999999;
            }
            .servers {
                padding-left: .46rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 100%;
                div {
                    p {
                        font-size: .12rem;
                    }
                }
                .p {
                    margin-bottom: .1rem;
                }
                .arrows {
                    height: 100%;
                    padding-right: .1rem;
                    font-size: .2rem;
                }
            }
        }
    }
    
    .arrows {
        &::before {
            content: '';
            width: .12rem;
            display: block;
            height: .12rem;
            border-top: .01rem solid #ccc;
            border-right: .01rem solid #ccc;
            transform: rotate(45deg)
        }
    }
    
    .particulars {
        width: 100%;
        background: #fff;
        margin-bottom: .1rem;
        margin-top:.1rem;
        p {
            display: flex;
            justify-content: space-between;
            padding: .16rem 0;
            border-bottom: .01rem solid #ccc;
            &:last-child {
                border: none;
            }
            span {
                margin: 0 .1rem;
                &:first-child {
                    font-weight: bold;
                    font-size: .14rem;
                }
            }
        }
    }
</style>