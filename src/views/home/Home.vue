<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue';
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import {getHomeMultidata} from 'network/home.js';
// import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
name:"Home",
components:{
    NavBar,
    HomeSwiper,
    RecommendView
},
data(){
    return{
        banners:[],
        recommends:[]

    }
},
created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
        // console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
        
    }).catch((err) => {
        
    });
},
}
</script>

<style>
.home-nav {
    background-color: var(--color-tint);
    color:#fff ;
}
</style>