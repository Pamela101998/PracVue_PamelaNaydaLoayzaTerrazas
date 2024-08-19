import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventarioView from '../views/inventario/InventarioView'
import MedicamentoView from '../views/medicamento/MedicamentoView'
import PacienteView from '../views/paciente/PacienteView'
import ProveedorView from '../views/proveedor/ProveedorView'
import UsuarioView from '../views/usuario/UsuarioView'
import VentaView from '../views/venta/VentaView'

import LoginView from '../views/LoginView'
import store from '../store/index'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: InventarioView,
    meta: { requiresAuth: true, role: ['administrador','farmaceutico','cajero'] } 
  },
  {
    path: '/medicamento',
    name: 'medicamento',
    component: MedicamentoView,
    meta: { requiresAuth: true, role: ['administrador','farmaceutico','cajero'] } 
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: PacienteView,
    meta: { requiresAuth: true, role: ['administrador','farmaceutico'] } 
  },
  {
    path: '/proveedor',
    name: 'proveedor',
    component: ProveedorView,
    meta: { requiresAuth: true, role: ['administrador'] } 
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: UsuarioView,
    meta: { requiresAuth: true, role: ['administrador'] } 
  },
  {
    path: '/venta',
    name: 'venta',
    component: VentaView,
    meta: { requiresAuth: true, role: ['administrador','farmaceutico','cajero'] } 
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requiresAuth)) {
    const userRole = store.getters.rol;
    console.log('guard', userRole);
    if (to.meta.role.includes(userRole)) {
      next();
    } else {
      next('/login'); // Redirigir a la página de inicio si no tiene permisos
    }
  } else {
    next(); // Asegúrate de llamar a next()
  }
});

export default router
