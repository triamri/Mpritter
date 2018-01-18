<template>
  <div style="padding-top: 20px;">
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
    ]),
    getHastag () {
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
