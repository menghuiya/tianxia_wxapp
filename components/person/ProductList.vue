<template>

    <view class="waterfull">
      <view class="column">
        <product-card
          v-for="(item, index) in col1"
          :key="index"
          :imginfo="item"
					:userdata="user"
        ></product-card>
      </view>
      <view class="column">
        <product-card
          v-for="(item, index) in col2"
          :key="index"
          :imginfo="item"
					:userdata="user"
        ></product-card>
      </view>
    </view>

</template>

<script>
import ProductCard from './ProductCard';
export default {
	props:['imgdata','user'],
  data() {
    return {
      isLoading: false,
			// imgdata:['1','2','2','2','2','2']
    };
  },
  components: {
    ProductCard,
  },
  computed: {
    col1() {
      let col = [];
      for (let i = 0; i < this.imgdata.length; i += 2) {
        let good = this.imgdata[i];
        col.push(good);
      }
      return col;
    },
    col2() {
      let col = [];
      for (let i = 1; i < this.imgdata.length; i += 2) {
        col.push(this.imgdata[i]);
      }
      return col;
    },
  },
};
</script>

<style lang="less" scoped>
.waterfull {
  display: flex;
  min-height: 100%;
  display: -webkit-flex;
  margin: 0 1vw;
	
}
.column {
    flex-grow: 1;
    padding: 1vw;
    min-height: 100%;
    flex: 1;
  }
</style>
