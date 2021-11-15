<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

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
        <image-responsive v-show="image.url" :url="image.url" :title="image.title" />
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
        <router-link to="/"
          ><my-button
            label="Voltar"
            title="Voltar"
            type="button"
            classButton="come-back"
        /></router-link>
      </div>
    </form>
  </div>
</template>


<script>
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import Image from "../../domain/image/Image";

export default {
  components: {
    "image-responsive": ImageResponsive,
    "my-button": Button,
  },

  data() {
    return {
      image: new Image(),
    };
  },
  methods: {
    save() {
      console.log(
        "titulo foto:" +
          this.image.title +
          " url foto:" +
          this.image.title +
          " description foto:" +
          this.image.descrition
      );
      this.image = new Image()
    },
  },
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