import Vue from 'vue'
import Vuex from 'vuex'
//importacion de firebase
import {auth} from '../firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario:null,
    error:null
  },
  mutations: {
    //metodo que cambia el esto de la variable usuario
    setUsuario(state,payload){
      state.usuario = payload
    },
    //metodo que cambia el esto de la variable error
    setError(state,payload){
      state.error = payload
    }
  },
  actions: {
    CrearUsuario({commit},usuario){
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
          .then(res => {
            console.log(res)
            // se crea un usuario con la respuesta de la api
            const UsuarioCreado = {
              email: res.user.email,
              uid: res.user.uid
            }
            //modifica el metodo de la mutacion
            commit('setUsuario',UsuarioCreado)
          })
          .catch(error =>{
            console.log(error)
            commit('setError',error)
          })

    }
  },
  modules: {
  }
})
