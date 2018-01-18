<template>
  <div style="padding-top: 20px;">
    {{ $route.query }}
    <time-summary v-for="tweet in getStak" :key="tweet._id" :tweet="tweet"></time-summary>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import TimeSummary from './TimeSummary'
export default {
  components: {
    TimeSummary
  },
  computed: {
    ...mapState([
      'tweetList'
    ]),
    getStak () {
      return this.tweetList.filter(function (obj) {
        return obj.hastag === '#done'
      })
    }
  },
  methods: {
    ...mapActions([
      'getAllTweet'
    ])
  },
  created () {
    this.getAllTweet()
  }
}
</script>
