<template>
    <div>
      <h1>Editar Medicamento</h1>
      <form @submit.prevent="submitForm" v-if="form">

        <div class="form-group">
            <div class="form-group">
        <label for="nom_medicamento">Nombre del medicamento:</label>
        <input type="text" id="nom_medicamento" v-model="form.nom_medicamento" :class="{ 'is-invalid': errors.nom_medicamento }"
          placeholder="Ingrese el nombre del medicamento" />
        <div v-if="errors.nom_medicamento" class="invalid-feedback">{{ errors.nom_medicamento }}</div>
      </div>

      <div class="form-group">
        <label for="descripcion">Descripcion:</label>
        <input type="text" id="descripcion" v-model="form.descripcion" :class="{ 'is-invalid': errors.descripcion }"
          placeholder="Ingrese la descripcion" />
        <div v-if="errors.descripcion" class="invalid-feedback">{{ errors.descripcion }}</div>
      </div>

      <div class="form-group">
      <label for="categoria">Categoría:</label>
      <select id="categoria" v-model="form.categoria" :class="{ 'is-invalid': errors.categoria }">
        <option :value="categoria" v-for="(categoria, index) in categoriaList" :key="`categoria-${index}`">{{ categoria }}</option>
      </select>
      <div v-if="errors.categoria" class="invalid-feedback">{{ errors.categoria }}</div>
    </div>

    <div class="form-group">
        <label for="composicion">Composición:</label>
        <input type="text" id="composicion" v-model="form.composicion" :class="{ 'is-invalid': errors.composicion }"
          placeholder="Ingrese la composicion" />
        <div v-if="errors.composicion" class="invalid-feedback">{{ errors.composicion }}</div>
      </div>

      <div class="form-group">
        <label for="concentracion">Concentración:</label>
        <input type="text" id="concentracion" v-model="form.concentracion" :class="{ 'is-invalid': errors.concentracion }"
          placeholder="Ingrese la concentracion" />
        <div v-if="errors.concentracion" class="invalid-feedback">{{ errors.concentracion }}</div>
      </div>

      <div class="form-group">
        <label for="presentacion">Presentación:</label>
        <input type="text" id="presentacion" v-model="form.presentacion" :class="{ 'is-invalid': errors.presentacion }"
          placeholder="Ingrese el presentacion disponible" />
        <div v-if="errors.presentacion" class="invalid-feedback">{{ errors.presentacion }}</div>
      </div>


      <div class="form-group">
        <label for="precio">Precio de venta:</label>
        <input type="number" id="precio" v-model="form.precio" :class="{ 'is-invalid': errors.precio }"
          placeholder="Ingrese el precio de venta" />
        <div v-if="errors.precio" class="invalid-feedback">{{ errors.precio }}</div>
      </div>

      <div class="form-group">
        <label for="stock">Stock disponible:</label>
        <input type="text" id="stock" v-model="form.stock" :class="{ 'is-invalid': errors.stock }"
          placeholder="Ingrese la stock" />
        <div v-if="errors.stock" class="invalid-feedback">{{ errors.stock }}</div>
      </div>

      <div class="form-group">
      <label for="fecha_caducidad">Fecha de Caducidad:</label>
      <input type="date" id="fecha_caducidad" v-model="form.fecha_caducidad" :class="{ 'is-invalid': errors.fecha_caducidad }"
        placeholder="Ingrese la fecha_caducidad" />
      <div v-if="errors.fecha_caducidad" class="invalid-feedback">{{ errors.fecha_caducidad }}</div>
    </div>

    <label for="proveedor">proveedor:</label>
          <select id="proveedor" v-model="form.proveedorId" :class="{ 'is-invalid': errors.proveedorId }">
            <option :value="proveedor.id" v-for="(proveedor, index) in proveedorList" :key="`proveedor-${index}`">{{ proveedor.empresa }}
            </option>
          </select>
          <div v-if="errors.proveedorId" class="invalid-feedback">{{ errors.proveedorId }}</div>
        </div>

      <div class="form-group">
        <label for="codigo_barras">Código de barras:</label>
        <input type="number" id="codigo_barras" v-model="form.codigo_barras" :class="{ 'is-invalid': errors.codigo_barras }"
          placeholder="Ingrese codigo de barras" />
        <div v-if="errors.codigo_barras" class="invalid-feedback">{{ errors.codigo_barras }}</div>
      </div>

       <div class="form-group">
        <label for="receta_medica">Requiere receta médica si/no:</label>
        <input type="text" id="receta_medica" v-model="form.receta_medica" :class="{ 'is-invalid': errors.receta_medica }"
          placeholder="Ingrese si se requiere o no receta medica" />
        <div v-if="errors.receta_medica" class="invalid-feedback">{{ errors.receta_medica }}</div>
      </div>

        <button type="submit" class="btn btn-primary">Registrar</button>
      </form>
    </div>
  </template>
    
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'EditMedicamentoView',
    data() {
      return {
        proveedorList: [],
        categoriaList: [
          "Analgésico",
          "Antibiótico",
          "Antiinflamatorio",
          "Antihistamínico",
          "Antiulceroso",
          "Broncodilatadores",
          "Antidepresivos"
        ],
        errors: {}
      };
    },
    methods: {
      ...mapActions(['increment']),
      validateForm() {
        this.errors = {};
        if (!this.form.nom_medicamento) {
          this.errors.nom_medicamento = 'El nombre del medicamento es obligatorio.';
        }
  
        if (!this.form.descripcion) {
          this.errors.descripcion = 'La descripción es obligatoria.';
        }
  
        if (!this.form.categoria) {
          this.errors.categoria = 'La categoría es obligatorio.';
        }
  
        if (!this.form.composicion) {
          this.errors.composicion = 'La composición es obligatoria.';
        }
        if (!this.form.concentracion) {
          this.errors.concentracion = 'El concentración es obligatorio.';
        }
        if (!this.form.presentacion) {
          this.errors.presentacion = 'El presentación es obligatorio.';
        }
  
        if (!this.form.precio) {
          this.errors.precio = 'El Precio de venta es obligatorio.';
        }

        if (!this.form.stock) {
          this.errors.stock = 'El stock disponible es obligatorio.';
        }

        if (!this.form.fecha_caducidad) {
          this.errors.fecha_caducidad = 'El fecha de caducidad es obligatoria.';
        }

        if (!this.form.proveedorId) {
          this.errors.proveedorId = 'El proveedor es obligatoria.';
        }

        if (!this.form.codigo_barras) {
          this.errors.codigo_barras = 'El código de barras es obligatorio.';
        }

        if (!this.form.receta_medica) {
          this.errors.receta_medica = 'Si es o no es con receta medica es obligatorio mencionarlo.';
        } 
       
  
        return Object.keys(this.errors).length === 0;
      },
  
      submitForm() {
        if (this.validateForm()) {
          // Enviar los datos al servidor
          this.save();
          // Reiniciar el formulario
          this.form = {
            nom_medicamento: '',
            descripcion: '',
            categoria: '',
            composicion: '',
            concentracion: '',
            presentacion: '',
            precio: '',
            stock: '',
            fecha_caducidad: '',
            proveedorId: null,
            codigo_barras: '',
            receta_medica: ''
          };
        }
      },
      save() {
        const vm = this;
        this.axios.patch(this.baseUrl + "/medicamento/" + this.item.id, this.form)
          .then(function (response) {
            if (response.status == '200') {
              vm.$emit('on-update', response.data);
            }
            vm.itemList = response.data;
          })
          .catch(function (error) {
            console.error(error);
          });
      },
      getProveedorList() {
        const vm = this;
        this.axios.get(this.baseUrl + "/proveedor")
          .then(function (response) {
            vm.proveedorList = response.data;
          })
          .catch(function (error) {
            console.error(error);
          });
      },
    },
    computed: {
      // propiedades computadas que dependen de otras propiedades reactivas
      ...mapState(['count']),
      ...mapGetters(['doubleCount', 'getBaseUrl']),
      baseUrl() {
        return this.getBaseUrl
      },
      form() {
        return Object.assign({},this.item);
      }
    },
    mounted() {
      this.getProveedorList();
    },
    props: ['item']
  }
  </script>
    
  <style scoped></style>
    
