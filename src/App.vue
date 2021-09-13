<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="fitro" v-on:input="filtro = $event.target.value" placeholder="Filtro pelo titulo">
    <ul class="lista-fotos">
      <li v-for="foto of fotosComFiltro" class="lista-fotos-item">

        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" :title="foto.titulo"/>
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel";

export default {
  components: {
    'meu-painel': Painel
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

.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;

}

.fitro {
  display: block;
  width: 100%;
}
</style>