<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form id="form-registration-image" @submit.prevent="save()">
      <div class="controle">
        <label for="titulo">Título</label>
        <input
          id="titulo"
          autocomplete="off"
          placeholder="Informe um título para imagem"
          @input="foto.title = $event.target.value"
          :value="foto.title"
        />
      </div>

      <div class="controle">
        <label for="url">Url</label>
        <input
          id="url"
          autocomplete="off"
          placeholder="Informe a url para imagem"
          @input="foto.url = $event.target.value"
          :value="foto.url"
        />
        <image-responsive url="" title="" />
      </div>

      <div class="controle">
        <label for="descricao">Descrição</label>
        <textarea
          id="description"
          autocomplete="off"
          @input="foto.description = $event.target.value"
          :value="foto.description"
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

export default {
  components: {
    "image-responsive": ImageResponsive,
    "my-button": Button,
  },

  data() {
    return {
      foto: {
        title: "",
        url: "",
        descrition: "",
      },
    };
  },
  methods: {
    save() {
      console.log('titulo foto:' + this.foto.title + ' url foto:' + this.foto.title + ' description foto:' + this.foto.descrition);
      this.foto = {
        title: '',
        url: '',
        descrition: ''
      }
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