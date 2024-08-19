<template>
    <div>
      <h1>Editar Pacientes</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nombre Completo:</label>
          <input type="text" id="name" v-model="form.nombre" :class="{ 'is-invalid': errors.nombre }"
            placeholder="Ingrese el nombre" />
          <div v-if="errors.nombre" class="invalid-feedback">{{ errors.nombre }}</div>
        </div>
  
        <div class="form-group">
            <label for="fecha">Fecha de nacimiento:</label>
            <input type="date" id="fecha" v-model="form.fecha" :class="{ 'is-invalid': errors.fecha }"
            placeholder="Ingrese la fecha" />
            <div v-if="errors.fecha" class="invalid-feedback">{{ errors.fecha }}</div>
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
  
        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
    
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'EditPaciente',
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
  
        if (!this.item.nombre) {
          this.errors.nombre = 'El nombre es obligatorio.';
        }
        if (!this.form.nacimiento) {
          this.errors.fecha = 'La fecha es obligatorio.';
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
        this.axios.patch(this.baseUrl + "/paciente/" + this.item.id, this.form)
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
    