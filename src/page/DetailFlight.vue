<template>
  <div class="search">
    <header>
      <router-link to="/Flight">
        <span><i class="arrow left icon"></i> &nbsp;&nbsp; Search</span>
      </router-link>
    </header>
    <br><br>
    <CardView></CardView>
  </div>
</template>

<script>
import CardView from '@/components/CardView'
export default {
  name: 'search',
  components: {
    CardView
  },
  data () {
    return {
      msg: 'Hello world'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #1d1f2d;
    color: #ffffff;
}

span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
  color: white;
}

</style>
