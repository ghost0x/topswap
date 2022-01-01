<template>
  <div class="hello">
    <h2 class="text-2xl mb-4">Pools</h2>
  
    <div v-if="pools.length > 0" class="text-lg">Found {{pools.length}} pools.</div>
    <div v-if="pools.length == 0">Loading data, please wait...</div>

    <div v-if="pools.length > 0" class="row-auto"><input type="checkbox" @change="refresh($event)" v-model="hideLowLiquidity" /> Hide pools with &lt; low liquidity</div>
    <div v-if="pools.length > 0" class="row-auto"><input type="checkbox" @change="refresh($event)" v-model="hideLowFees" /> Hide pools with &lt; low fees</div>

  <table class="mt-4" v-if="pools.length > 0">
    <thead>
      <tr>
        <th></th>
        <th>Pool</th>
        <th>TVL</th>
        <th>Fees</th>
        <th>Fee/TVL Ratio</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="(pool, index) in pools" :key="pool.id">
          <td>{{index + 1}}</td>
          <td><a target="_blank" :href="'https://info.uniswap.org/#/pools/' + pool.pool.id">{{ pool.pool.token0.name }}/{{ pool.pool.token1.name }}</a></td>
          <td>${{parseFloat(pool.tvlUSD).toLocaleString()}}</td>
          <td>${{parseFloat(pool.feesUSD).toLocaleString()}}</td>
          <th>{{pool.feeTvlRatio}}</th>
        </tr>
    </tbody>
  </table>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      pools: Array,
      rawPoolData: Array,
      hideLowLiquidity: true,
      hideLowFees: true
    }
  },
  methods: {
    refresh() {
      console.log("Refresh");
      var pools = [];
      for(let i = 0; i < this.rawPoolData.length; i++) {
        var pool = this.rawPoolData[i];
        if (this.hideLowLiquidity && pool.tvlUSD < 2000000) continue;
        if (this.hideLowFees && pool.feesUSD < 5000) continue;
        pool.feeTvlRatio = ((parseFloat(pool.feesUSD) / parseFloat(pool.tvlUSD)) * 100).toFixed(4);
        pools.push(pool);
      }
      pools.sort((a, b) => (a.feeTvlRatio < b.feeTvlRatio) ? 1 : -1)
      this.pools = pools;
    },
  },
  mounted() {
    this.pools = [];
    var dateOffset = (24*60*60*1000) * 1; //1 days
    var timestamp = new Date();
    timestamp.setTime(timestamp.getTime() - dateOffset);
    timestamp = parseInt(timestamp.getTime() / 1000);
    this.axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', 
    { 
      query: '{    poolDayDatas(first: 1000, orderBy: feesUSD, orderDirection: desc, where:{ date_gt:' + timestamp + ' })  { id,  pool {     id ,   feesUSD, token0 { name }   ,  token1 { name }   }  , tvlUSD  , feesUSD  } }' })
    .then((response) => {
      this.rawPoolData = response.data.data.poolDayDatas;
      this.refresh();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
