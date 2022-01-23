<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>

    <h2 class="centralizado">{{image.title}}</h2>

    <h2 v-if="image._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <form id="form-registration-image" @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">Título</label>
        <input
          id="title"
          autocomplete="off"
          placeholder="Informe um título para imagem"
          v-model.lazy="image.title"
        />
      </div>

      <div class="controle">
        <label for="url">Url</label>
        <input
          id="url"
          autocomplete="off"
          placeholder="Informe a url para imagem"
          v-model.lazy="image.url"
        />
        <image-responsive
          v-show="image.url"
          :url="image.url"
          :title="image.title"
        />
      </div>

      <div class="controle">
        <label for="descricao">Descrição</label>
        <textarea
          id="description"
          autocomplete="off"
          v-model="image.description"
        ></textarea>
      </div>

      <div class="centralizado">
        <my-button
          label="Salvar"
          title="Salvar"
          type="submit"
          classButton="default"
        />
        <router-link :to="{ name: 'home' }">
          <my-button
            label="Voltar"
            title="Voltar"
            type="button"
            classButton="come-back"
        />
        </router-link>
      </div>
    </form>
  </div>
</template>


<script>
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import Image from "../../domain/image/Image";
import ImageService from "../../domain/image/ImageService";

export default {
  components: {
    "image-responsive": ImageResponsive,
    "my-button": Button,
  },

  data() {
    return {
      image: new Image(),
      id: this.$route.params.id,
    };
  },
  methods: {
    save() {
      this.service
        .created(this.image)
        .then(() => {
          (this.id) ? this.$router.push({name: 'home'}) : ''
          this.image = new Image();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.service = new ImageService(this.$resource)

    if (this.id) {
      this.service
      .searchImageUpdated(this.id)
      .then(image => this.image = image)
    }
  }

};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>