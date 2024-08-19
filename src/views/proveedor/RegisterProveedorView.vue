<template>
    <div>
      <h1>Registrar Proveedor</h1>
      <form @submit.prevent="submitForm()">
        <div class="form-group">
          <label for="empresa">Nombre de la empresa:</label>
          <input type="text" id="empresa" v-model="form.empresa" :class="{ 'is-invalid': errors.empresa }"
            placeholder="Ingrese el nombre de la empresa" />
          <div v-if="errors.empresa" class="invalid-feedback">{{ errors.empresa }}</div>
        </div>

        <div class="form-group">
          <label for="encargado">Nombre del encargado:</label>
          <input type="text" id="encargado" v-model="form.encargado" :class="{ 'is-invalid': errors.encargado }"
            placeholder="Ingrese el nombre del encargado" />
          <div v-if="errors.encargado" class="invalid-feedback">{{ errors.encargado }}</div>
        </div>

  
        <div class="form-group">
          <label for="phone">Teléfono:</label>
          <input type="tel" id="phone" v-model="form.telefono" :class="{ 'is-invalid': errors.telefono }"
            placeholder="Ingrese el teléfono" />
          <div v-if="errors.telefono" class="invalid-feedback">{{ errors.telefono }}</div>
        </div>
  
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="text" id="email" v-model="form.correo" :class="{ 'is-invalid': errors.correo }"
            placeholder="Ingrese el correo" />
          <div v-if="errors.correo" class="invalid-feedback">{{ errors.correo }}</div>
        </div>

        <div class="form-group">
          <label for="address">Dirección:</label>
          <textarea id="address" v-model="form.direccion" :class="{ 'is-invalid': errors.direccion }"
            placeholder="Ingrese la dirección"></textarea>
          <div v-if="errors.direccion" class="invalid-feedback">{{ errors.direccion }}</div>
        </div>

        <div class="form-group">
          <label for="suministrados">Medicamentos suministrados:</label>
          <input type="text" id="suministrados" v-model="form.suministrados" :class="{ 'is-invalid': errors.suministrados }"
            placeholder="Ingrese los medicamentos suministrados" />
          <div v-if="errors.suministrados" class="invalid-feedback">{{ errors.suministrados }}</div>
        </div>

        <div class="form-group">
          <label for="pagos">Formas de pagos:</label>
          <input type="text" id="pagos" v-model="form.pagos" :class="{ 'is-invalid': errors.pagos }"
            placeholder="Ingrese la forma de pago" />
          <div v-if="errors.pagos" class="invalid-feedback">{{ errors.pagos }}</div>
        </div>
  
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
    
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'RegisterProveedor',
    data() {
      return {
        form: {
          empresa: '',
          encargado: '',
          telefono: '',
          correo: '',
          direccion: '',
          suministrados: '',
          pagos: ''
        },
        errors: {}
      };
    },
    methods: {
      ...mapActions(['increment']),
      validateForm() {
        this.errors = {};
  
        if (!this.form.empresa) {
          this.errors.empresa = 'El nombre de la empresa es obligatorio.';
        }
        if (!this.form.encargado) {
          this.errors.encargado = 'El nombre del encargado es obligatorio.';
        }
        if (!this.form.telefono) {
          this.errors.telefono = 'El teléfono es obligatorio.';
        } else if (!/^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}([-.\s]?\d{1,9})+$/.test(this.form.telefono)) {
          this.errors.telefono = 'El teléfono no es válido.';
        }
        if (!this.form.correo) {
          this.errors.correo = 'El correo electrónico es obligatorio.';
        }
  
        if (!this.form.direccion) {
          this.errors.direccion = 'La dirección es obligatoria.';
        }
  
        if (!this.form.suministrados) {
          this.errors.suministrados = 'Los medicamentos suministrados son ibligatorios.';
        }

        if (!this.form.pagos) {
          this.errors.pagos = 'Las formas de pagos son obligatorios';
        }
        
        return Object.keys(this.errors).length === 0;
      },
  
      submitForm() {
        if (this.validateForm()) {
          // Enviar los datos al servidor
          this.save();
          // Reiniciar el formulario  
          this.form = {
            empresa: '',
            encargado: '',
            telefono: '',
            correo: '',
            direccion: '',
            suministrados: '',
            pagos: ''
          };
        }
      },
      save() {
        const vm = this;
        this.axios.post(this.baseUrl + "/proveedor", this.form)
          .then(function (response) {
            if (response.status == '201') {
              vm.$emit('on-register', response.data);
            }
            console.log(response);
            vm.itemList = response.data;
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    },
    computed: {
      // propiedades computadas que dependen de otras propiedades reactivas
      ...mapState(['count']),
      ...mapGetters(['doubleCount', 'getBaseUrl']),
      baseUrl() {
        return this.getBaseUrl
      }
    },
  }
  </script>
    
  <style scoped></style>
    