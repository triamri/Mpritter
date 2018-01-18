import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tweetList: [],
    user: null,
    isLogin: false
  },
  mutations: {
    setLogin (state, payload) {
      state.user = payload
      state.isLogin = true
    },
    setList (state, payload) {
      state.tweetList = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    sendList (state, payload) {
      state.tweetList.push(payload)
    },
    removeList (state, payload) {
      let index = state.tweetList.indexOf(payload)
      state.tweetList.splice(index, 1)
    }
  },
  actions: {
    addRegiter ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/users/signup`, payload)
        .then(({ data }) => {
          router.push({
            name: 'Login'
          })
        })
        .catch(err => console.log(err))
    },
    userLogin ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/users/signin`, payload)
        .then(({ data }) => {
          localStorage.setItem('token', data.data)
          commit('setLogin', data.user)
          router.push({
            name: 'Dashboard'
          })
        })
        .catch(err => console.log(err))
    },
    getAllTweet ({ commit }) {
      axios.get(`http://localhost:3000/api/tweets/all`)
        .then(({ data }) => {
          console.log(data.data)
          commit('setList', data.data)
        })
        .catch(err => console.log(err))
    },
    getAllTweetUser ({ commit }) {
      axios.get(`http://localhost:3000/api/tweets/alluser`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('setList', data.data)
        })
        .catch(err => console.log(err))
    },
    getUser ({ commit }) {
      axios.get(`http://localhost:3000/api/users/user`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('setUser', data.data)
        })
        .catch(err => console.log(err))
    },
    postTweet ({ commit }, payload) {
      axios.post(`http://localhost:3000/api/tweets/tweet`, payload, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('sendList', data.data)
        })
        .catch(err => console.log(err))
    },
    removeTweet ({ commit }, payload) {
      axios.delete(`http://localhost:3000/api/tweets/remove/${payload._id}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('removeList', payload)
        })
        .catch(err => console.log(err))
    }
  }
})

export default store
