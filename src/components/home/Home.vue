<template>
  <div>
    <h1 class="centralizado">{{ firstTitle }}</h1>

    <input
      type="search"
      class="filtro"
      v-on:input="filtro = $event.target.value"
      placeholder="Pesquisa por uma palavra chave"
    />
    <ul class="lista-fotos">
      <p v-show="message" class="message-centralizado"></p>
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
          />
          <my-button
            type="button"
            label="Remover foto"
            :confirmation="true"
            classButton="danger"
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

export default {
  components: {
    "my-panel": Painel,
    "image-responsive": ImageResponsive,
    "my-button": Button,
  },

  data() {
    return {
      firstTitle: "Project Vue",
      images: [],
      filtro: "",
      message: "",
    };
  },

  computed: {
    imagesWithFilter() {
      if (!this.filtro) {
        return this.images;
      } else {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.images.filter((foto) => exp.test(foto.title));
      }
    },
  },

  methods: {
    deleteImage(image) {
      this.resource
        .delete({
          id: image._id,
        })
        .then((response) => {
          {
            let indice = this.images.indexOf(image);
            this.images.splice(indice, 1);
            this.message = "Foto removida com sucesso!";
          }
        })
        .catch((error) => {
          this.message = "Erro ao remover a foto!";
        });
    },
  },

  created() {
    this.resource = this.$resource("v1/fotos{/id}");

    this.resource
      .query()
      .then((res) => res.json())
      .then(
        (images) => (this.images = images),
        (err) => console.log(err)
      );
  },
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

.filtro {
  display: block;
  width: 100%;
  border-radius: 5px;
}
</style>