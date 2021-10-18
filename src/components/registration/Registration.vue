<template>

  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form id="form-registration-image">
      <div class="controle">
        <label for="titulo">Título</label>
        <input id="titulo" autocomplete="off" placeholder="Informe um título para imagem">
      </div>

      <div class="controle">
        <label for="url">Url</label>
        <input id="url" autocomplete="off" placeholder="Informe a url para imagem">
        <image-responsive url="" title=""/>
      </div>

      <div class="controle">
        <label for="descricao">Descrição</label>
        <textarea id="descricao" autocomplete="off"></textarea>
      </div>

      <div class="centralizado">
        <my-button label="Salvar" title="Salvar" type="submit" classButton="default"/>
        <router-link to="/"><my-button label="Voltar" title="Voltar" type="button" classButton="come-back" /></router-link>
      </div>

    </form>
  </div>
</template>


<script>

import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";

export default {

  components: {
    'image-responsive': ImageResponsive,
    'my-button': Button
  }

}

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

.controle label + input, .controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px
}

.centralizado {
  text-align: center;
}

</style>