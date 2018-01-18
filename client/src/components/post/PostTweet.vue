<template>
  <fieldset style="padding-bottom: 30px;">
    <legend>Post</legend>
    <div class="form-group">
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Tweet's" type="text" v-model="tweet.post">
    </div>
    <button type="submit" class="btn btn-primary" @click="submitPost">Submit</button>
  </fieldset>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      tweet: {
        post: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'postTweet'
    ]),
    submitPost () {
      if (this.tweet.post.length <= 140) {
        this.postTweet(this.tweet)
      } else {
        this.tweet.post = 'harus 140'
      }
    }
  }
}
</script>
