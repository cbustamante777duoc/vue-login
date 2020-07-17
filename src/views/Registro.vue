<template>
    <div>
        <h1>Registro de usuario</h1>
        <form @submit.prevent="CrearUsuario({email: email, password:pass1})">
            <input 
            type="email" 
            placeholder="ingrese su correo"
            v-model="email"
            >
            <input 
            type="password" 
            placeholder="ingrese su contraseña"
            v-model="pass1"
            >
            <input 
            type="password" 
            placeholder="repita su contraseña"
            v-model="pass2"
            >
            <button type="submit">Registrar usuario</button>
        </form>
        <p>{{error.message}}</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Registro',
    data() {
        return {
            //datos que van a hacer los mismo que en el formulario
            email:'',
            pass1:'',
            pass2:''
        }
    },
    created(){

    },
    methods:{
        //metodo que va a hacer ocupado dentro del formulario
        ...mapActions(['CrearUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>