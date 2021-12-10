<template>
  <div class="hello">
    <h2 class="text-2xl mb-4">Pools</h2>
  
    <span class="text-lg">Found {{pools.length}} pools.</span>

  <table class="mt-4">
    <thead>
      <tr>
        <th></th>
        <th>Pool</th>
        <th>TVL</th>
        <th>Fees</th>
        <th>Fee:TVL Ratio</th>
      </tr>
    </thead>
      <tbody>
        <tr v-for="(pool, index) in pools" :key="pool.id">
          <td>{{index + 1}}</td>
          <td><a target="_blank" :href="'https://info.uniswap.org/#/pools/' + pool.pool.id">{{ pool.pool.token0.name }}/{{ pool.pool.token1.name }}</a></td>
          <td>${{parseFloat(pool.feesUSD).toLocaleString()}}</td>
          <td>${{parseFloat(pool.tvlUSD).toLocaleString()}}</td>
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
      pools: Array
    }
  },
  mounted() {
    this.pools = [];
    var dateOffset = (24*60*60*1000) * 5; //5 days
    var timestamp = new Date();
    timestamp.setTime(timestamp.getTime() - dateOffset);
    //timestamp = timestamp.getTime() / 1000;
    timestamp = parseInt(timestamp.getTime() / 1000);
    this.axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', 
    { 
      query: '{    poolDayDatas(first: 1000, orderBy: feesUSD,      orderDirection: desc, where:{        date_gt:' + timestamp + ' })  {      id,   pool {     id ,    token0 { name }   ,  token1 { name }   }  , tvlUSD  , feesUSD  } }' })
    .then((response) => {
      var pools = response.data.data.poolDayDatas;
      for(let i = 0; i < pools.length; i++) {
        pools[i].feeTvlRatio = (parseFloat(pools[i].feesUSD) / parseFloat(pools[i].tvlUSD)).toFixed(3);
      }
      pools.sort((a, b) => (a.feeTvlRatio < b.feeTvlRatio) ? 1 : -1)
      this.pools = pools;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
