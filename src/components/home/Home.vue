<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="fitro" v-on:input="filtro = $event.target.value"
           placeholder="Pesquisa por uma palavra chave">
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" class="lista-fotos-item">

        <my-panel :titulo="foto.titulo">
          <image-responsive :url="foto.url" :title="foto.titulo"></image-responsive>
        </my-panel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";

export default {

  components: {
    'my-panel': Painel,
    'image-responsive': ImageResponsive
  },

  data() {
    return {
      titulo: 'Project Vue',
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (!this.filtro) {
        // Filtrar
        return this.fotos
      } else {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.fotos.filter(foto => exp.test(foto.titulo))
      }
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(fotos => this.fotos = fotos, err => console.log(err)
        )

  }

};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.fitro {
  display: block;
  width: 100%;
}
</style>