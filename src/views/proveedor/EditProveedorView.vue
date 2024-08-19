<template>
    <div>
      <h1>Editar Proveedores</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="empresa">Nombre de la empresa:</label>
          <input type="text" id="empresa" v-model="form.empresa" :class="{ 'is-invalid': errors.empresa }"
            placeholder="Ingrese el empresa" />
          <div v-if="errors.empresa" class="invalid-feedback">{{ errors.empresa }}</div>
        </div>

        <div class="form-group">
          <label for="encargado">Nombre del Encargado:</label>
          <input type="text" id="encargado" v-model="form.encargado" :class="{ 'is-invalid': errors.encargado }"
            placeholder="Ingrese el encargado" />
          <div v-if="errors.encargado" class="invalid-feedback">{{ errors.encargado }}</div>
        </div>


        <div class="form-group">
          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" v-model="form.telefono" :class="{ 'is-invalid': errors.telefono }"
            placeholder="Ingrese el teléfono" />
          <div v-if="errors.telefono" class="invalid-feedback">{{ errors.telefono }}</div>
        </div>

        <div class="form-group">
          <label for="correo">Correo electrónico:</label>
          <input type="text" id="correo" v-model="form.correo" :class="{ 'is-invalid': errors.correo }"
            placeholder="Ingrese el correo" />
          <div v-if="errors.correo" class="invalid-feedback">{{ errors.correo }}</div>
        </div>
  
        <div class="form-group">
          <label for="direccion">Dirección:</label>
          <textarea id="direccion" v-model="form.direccion" :class="{ 'is-invalid': errors.direccion }"
            placeholder="Ingrese la dirección"></textarea>
          <div v-if="errors.direccion" class="invalid-feedback">{{ errors.direccion }}</div>
        </div>

        <div class="form-group">
          <label for="suministrados">Nombre del medicamento suministrado:</label>
          <input type="text" id="suministrados" v-model="form.suministrados" :class="{ 'is-invalid': errors.suministrados }"
            placeholder="Ingrese el suministrados" />
          <div v-if="errors.suministrados" class="invalid-feedback">{{ errors.suministrados }}</div>
        </div>

        <div class="form-group">
          <label for="pagos">Formas de pagos:</label>
          <input type="text" id="pagos" v-model="form.pagos" :class="{ 'is-invalid': errors.pagos }"
            placeholder="Ingrese el pagos" />
          <div v-if="errors.pagos" class="invalid-feedback">{{ errors.pagos }}</div>
        </div>
  
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
    
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    encargado: 'EditProveedor',
    data() {
      return {
  
        errors: {}
      };
    },
    props: ['item'],
    methods: {
      ...mapActions(['increment']),
      validateForm() {
        this.errors = {};
  
        if (!this.item.empresa) {
          this.errors.empresa = 'El nombre es obligatorio.';
        }
        if (!this.form.encargado) {
          this.errors.encargado = 'La fecha es obligatorio.';
        }
        if (!this.item.telefono) {
          this.errors.telefono = 'El teléfono es obligatorio.';
        } else if (!/^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?\d{1,4}([-.\s]?\d{1,9})+$/.test(this.item.telefono)) {
          this.errors.telefono = 'El teléfono no es válido.';
        }
        if (!this.item.correo) {
          this.errors.correo = 'El correo electrónico es obligatorio.';
        }
  
        if (!this.item.direccion) {
          this.errors.direccion = 'La dirección es obligatoria.';
        }

        if (!this.item.suministrados) {
          this.errors.suministrados = 'Los medicamentos suministrados son obligatorios.';
        }

        if (!this.item.pagos) {
          this.errors.pagos = 'Las formas de pagos son obligatorios.';
        }
  
        return Object.keys(this.errors).length === 0;
      },
  
      submitForm() {
        if (this.validateForm()) {
          // Enviar los datos al servidor
          this.save();
          // Reiniciar el formulario   
        }
      },
      save() {
        const vm = this;
        this.axios.patch(this.baseUrl + "/proveedor/" + this.item.id, this.form)
          .then(function (response) {
            if (response.status == '200') {
              vm.$emit('on-update', response.data);
            }
            console.log(response); vm.itemList = response.data;
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
      },
      form() {
        return Object.assign({}, this.item);
      }
    },
  }
  </script>
    
  <style scoped></style>
    