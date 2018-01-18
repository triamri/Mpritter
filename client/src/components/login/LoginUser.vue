<template>
  <div>
  <fieldset>
    <legend>Login</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email" v-model="formData.email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password" v-model="formData.password">
    </div>
    <button type="submit" class="btn btn-primary" @click="userLogin(formData)">Submit</button>
  </fieldset>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'userLogin'
    ])
  }
}
</script>
