<template>
  <div>
    <h1 class="centralizado">{{ firstTitle }}</h1>
    <p v-show="message" class="message-centralizado">{{ message }}</p>

    <input
        type="search"
        class="filtro"
        v-on:input="filterSearch = $event.target.value"
        placeholder="Pesquisa por uma palavra chave"
    />

    <ul class="lista-fotos">
      <li v-for="image of imagesWithFilter" class="lista-fotos-item">
        <my-panel :titulo="image.title">
          <image-responsive
              v-my-tranform="{
              typeAnimate: 'scale',
              rotation: 90,
              timeTransition: 3,
              animate: true,
            }"
              :url="image.url"
              :title="image.title"
              :classStyle="`imagem-responsiva-card`"
          />
          <router-link :to="{name : 'updated_image', params: {id : image._id} }">
            <my-button
                type="button"
                label="Alterar foto"
                title="Alterar foto"
                classButton="btn-actions-image btn btn-secondary"
                @buttonActive=""
            />
          </router-link>
          <my-button
              type="button"
              label="Remover foto"
              title="Remover foto"
              :confirmation="true"
              classButton="btn-actions-image btn btn-danger "
              @buttonActive="deleteImage(image)"
          />
        </my-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel";
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import ImageService from "../../domain/image/ImageService";

export default {
  components: {
    "my-panel": Painel,
    "image-responsive": ImageResponsive,
    "my-button": Button,
  },

  data() {
    return {
      message: false,
      firstTitle: "Project Vue",
      images: [],
      filterSearch: "",
    };
  },

  computed: {
      /**
       * List image with filter or not filter
       */
    imagesWithFilter() {
      if (!this.filterSearch) {
        return this.images;
      } else {
        let exp = new RegExp(this.filterSearch.trim(), "i");
        return this.images.filter((image) => exp.test(image.title));
      }
    },
  },

  methods: {
    deleteImage(image) {
      this.service = new ImageService(this.$resource)
          .delete(image)
          .then(() => {
                let indice = this.images.indexOf(image);
                this.images.splice(indice, 1);
                this.message = "Foto removida com sucesso!";
              }
              ,() => {
                this.message = "Não foi possível remover a foto!";
              }
          )
    },
  },

  created() {
    this.service = new ImageService(this.$resource)

    this.service
        .list()
        .then(images => this.images = images, error => {
          this.message = error.message;
        });
  },
};
</script>

<style>

.message-centralizado {
  text-align: center;
  font-weight: bold;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
  border-radius: 5px;
}
</style>