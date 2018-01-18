<template>
  <div>
    <time-summary v-for="tweet in tweetList" :key="tweet._id" :tweet="tweet"></time-summary>
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
    ])
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
