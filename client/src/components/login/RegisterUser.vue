<template>
  <div>
  <fieldset>
    <legend>Register</legend>
    <div class="form-group">
      <label for="exampleInputEmail1">First Name</label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="text" v-model="formData.first_name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Last Name</label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Last Name" type="text" v-model="formData.last_name">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" type="email" v-model="formData.email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input class="form-control" id="exampleInputPassword1" placeholder="Password" type="password" v-model="formData.password">
    </div>
    <button type="submit" class="btn btn-primary" @click="addRegiter(formData)">Submit</button>
  </fieldset>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addRegiter'
    ])
  }
}
</script>
