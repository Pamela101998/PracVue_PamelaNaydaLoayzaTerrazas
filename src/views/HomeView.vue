<template>
  <div>
  
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img alt="farmacia logo" src="../assets/images.png">
          </div>
          <div class="header-title">
            <h1>Farmacia Salud y Bienestar</h1>
          </div>
         
        </div>
      </div>
    </header>

  
    <main class="about-content">
      <div class="container">
        <section class="intro">
          <h2>Sobre Nosotros</h2>
          <p>
            En Farmacia Salud y Bienestar, nos dedicamos a ofrecer productos y servicios de la más alta calidad para cuidar de tu salud y la de tu familia. Con más de 20 años de experiencia, somos una farmacia de confianza en la comunidad.
          </p>
        </section>

        <section class="history">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en el año 2000, nuestra farmacia comenzó como un pequeño negocio familiar con el objetivo de proporcionar atención farmacéutica personalizada. A lo largo de los años, hemos crecido y nos hemos adaptado a las necesidades cambiantes de nuestros clientes, siempre manteniendo nuestros valores fundamentales.
          </p>
        </section>

        <section class="mission-vision">
          <div class="mission">
            <h3>Misión</h3>
            <p>
              Nuestra misión es mejorar la calidad de vida de nuestros clientes a través de un servicio farmacéutico de excelencia, proporcionando productos seguros y efectivos, y ofreciendo asesoramiento profesional en el cuidado de la salud.
            </p>
          </div>
          <div class="vision">
            <h3>Visión</h3>
            <p>
              Ser reconocidos como la farmacia líder en la región por nuestra dedicación a la salud y el bienestar de la comunidad, manteniendo un compromiso constante con la innovación y el servicio al cliente.
            </p>
          </div>
        </section>

        <section class="values">
          <h2>Valores</h2>
          <ul>
            <li><strong>Compromiso:</strong> Estamos comprometidos con la salud y bienestar de nuestros clientes.</li>
            <li><strong>Calidad:</strong> Ofrecemos productos y servicios de la más alta calidad.</li>
            <li><strong>Integridad:</strong> Operamos con honestidad y ética en todas nuestras interacciones.</li>
            <li><strong>Innovación:</strong> Nos mantenemos a la vanguardia de la industria farmacéutica.</li>
          </ul>
        </section>
      </div>
    </main>

    <!-- Pie de Página -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Farmacia Salud y Bienestar. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<script>

</script>

<style scoped>
/* Estilos generales */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Cabecera */
.header {
  margin-top: 40px;
  background-color: #f4f4f4;
  padding: 15px 0;
  border-bottom: 2px solid #ccc;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.images img {
  width: 100px;
}

.header-title h1 {
  font-size: 24px;
  color: #333;
  margin: 0;
}

.nav-menu ul {
  list-style-type: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}

.nav-menu ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.nav-menu ul li a:hover {
  color: #007bff;
}

/* Contenido Principal */
.about-content {
  padding: 40px 0;
}

.about-content h2, .about-content h3 {
  color: #333;
}

.about-content p {
  color: #555;
  line-height: 1.6;
}

.mission-vision {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.mission, .vision {
  flex: 1;
}

.values ul {
  list-style-type: disc;
  padding-left: 20px;
}

.values ul li {
  margin-bottom: 10px;
}

/* Pie de Página */
.footer {
  background-color: #f4f4f4;
  padding: 20px 0;
  text-align: center;
  border-top: 2px solid #ccc;
}
</style>





<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
