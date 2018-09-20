import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }
})


// export const store = new Vuex.Store({
//   state: {
//     user: {
//       id: 'ajaldslfalsk12',
//       registeredMeetups: ['aadsfhbkhlk1241']
//     }
//   },
//   mutations: {},
//   actions: {},
//   getters: {
//     // loadedMeetups (state) {
//     //   return state.loadedMeetups.sort((meetupA, meetupB) => {
//     //     return meetupA.date > meetupB.date
//     //   })
//     // },
//     featuredMeetups (state, getters) {
//       return getters.loadedMeetups.slice(0, 5)
//     },
//     loadedMeetup (state) {
//       return (meetupId) => {
//         return state.loadedMeetups.find((meetup) => {
//           return meetup.id === meetupId
//         })
//       }
//     }
//   }
// })