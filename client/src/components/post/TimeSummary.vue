<template>
  <div>
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">Tweet's </div>
      <div class="card-body text-primary">
        <!-- <h4 class="card-title">{{ tweet.userID.first_name }}</h4> -->
        <p class="card-text">{{ tweet.post }}</p>
        <i v-if="user._id === tweet.userID._id" class="fa fa-trash cursor" @click="removeTweet(tweet)">hapus</i>
        <br />
        <i v-for="hastag in tweet.hastag" :key="hastag" style="padding-left:5px;">
          <a :href="'/hastag/'+hastag">{{ hastag }}</a>
        </i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: ['tweet'],
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'removeTweet',
      'getUser'
    ])
  },
  created () {
    this.getUser()
  }
}
</script>
<style>
.cursor {
  cursor: pointer;
}
</style>
