<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="fitro" v-on:input="filtro = $event.target.value"
           placeholder="Pesquisa por uma palavra chave">
    <ul class="lista-fotos">
      <li v-for="image of images" class="lista-fotos-item">

        <my-panel :titulo="image.title">
          <image-responsive v-my-tranform="{typeAnimate: 'scale', rotation: 90, timeTransition: 3, animate: true}"
                            :url="image.url"
                            :title="image.title"/>
          <my-button type="button" label="Remover foto" :confirmation="true" classButton="danger"
                     @buttonActive="deleteImage(image)"/>
        </my-panel>

      </li>
    </ul>
  </div>
</template>

<script>

import Painel from "../shared/painel/Painel";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";

export default {

  components: {
    'my-panel': Painel,
    'image-responsive': ImageResponsive,
    'my-button': Button
  },

  data() {
    return {
      titulo: 'Project Vue',
      images: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro() {
      if (!this.filtro) {
        // Filtrar
        return this.images
      } else {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.images.filter(foto => exp.test(foto.titulo))
      }
    }
  },

  methods: {
    deleteImage(image) {
      alert('Removida foto: ' + image.title)
    }
  },

  created() {

    this.$http.get('http://localhost:3000/v1/fotos')
        .then(res => res.json())
        .then(images => this.images = images, err => console.log(err)
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
  border-radius: 5px;
}

</style>