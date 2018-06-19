<template>
    <div class="cardview">
       <div class="ui stackable one column centered cards" v-for="item in list" :key="item.index">
          <a class="ui card">
            <div class="content">
              <img class="right floated centered mini ui circular image" src="static/img/icons/flight.png">
                <div class="header">{{item.outbound.airline}}</div>
                 <div class="meta">
                   {{item.outbound.takeOffTime.hourOfDay+':'+ item.outbound.takeOffTime.minute + 
                   '->' + item.outbound.landingTime.hourOfDay+':'+ item.outbound.takeOffTime.minute}}
                </div>
                <div class="description">
                   {{'Price: £'+ item.outbound.price }}
                </div>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cardview',
  data () {
    return {
      msg: 'Hello world',
      list: []
    }
  },
  async created () {
    try {
      let response = await axios.get('https://phiyawat-comsci.herokuapp.com/list')
      this.list = response.data
    } catch (e) {
      console.log('Error: ' + e)
    }
  }
}
</script>

<style>

</style>

