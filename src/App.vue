<template>
  <Menu>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <!-- <router-link to="/inventario" v-if="canSee(['administrador','farmaceutico','cajero'])">Inventario</router-link> -->
    <router-link to="/medicamento" v-if="canSee(['administrador','farmaceutico','cajero'])">Medicamentos</router-link>
    <router-link to="/paciente" v-if="canSee(['administrador','farmaceutico'])">Pacientes</router-link>
    <router-link to="/proveedor" v-if="canSee(['administrador'])">Proveedores</router-link>
    <!-- <router-link to="/usuario" v-if="canSee(['administrador'])">Usuarios</router-link>
    <router-link to="/venta" v-if="canSee(['administrador','farmaceutico','cajero'])">Ventas</router-link> -->
  </Menu>
  <router-view />
</template>

<script>
import {mapGetters } from 'vuex'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Menu
  },
  methods: {
    canSee(roles) {
      console.log('canSee', this.rol);
      return roles.includes(this.rol);
      // return true;
    }
  },
  computed: {
    ...mapGetters(['rol'])
  }
}
</script>

<style lang="scss"></style>
