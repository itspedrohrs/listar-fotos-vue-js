<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>

    <h2 class="centralizado">{{ image.title }}</h2>

    <h2 v-if="image._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <ValidationObserver ref="observerFormImage" v-slot="{ invalid }">
      <form id="form-registration-image" @submit.prevent="save()">
        <div class="controle">
          <label for="titulo">Título</label>
          <ValidationProvider rules="required|caracter_max_min:10,30" v-slot="{errors}">
            <input
                class="form-input"
                id="title"
                name="title"
                autocomplete="off"
                placeholder="Informe um título para imagem"
                v-model.lazy="image.title"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="controle">
          <label for="url">Url</label>
          <ValidationProvider rules="required" v-slot="{errors}">
            <input
                class="form-input"
                id="url"
                name="url"
                autocomplete="off"
                placeholder="Informe a url para imagem"
                v-model.lazy="image.url"
            />
            <span class="message-error">{{ errors[0] }}</span>
          </ValidationProvider>
          <image-responsive
              v-show="image.url"
              :url="image.url"
              :title="image.title"
          />
        </div>

        <div class="controle">
          <label for="descricao">Descrição</label>
          <textarea
              class="text-area-form"
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
    </ValidationObserver>
  </div>
</template>


<script>
import ImageResponsive from "../shared/image-responsive/ImageResponsive";
import Button from "../shared/button/Button";
import Image from "../../domain/image/Image";
import ImageService from "../../domain/image/ImageService";
import {error} from "vue-resource/src/util";

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

    // async onSubmit () {
    //   const isValid = await this.$refs.observer.validate();
    //   if(!isValid) {
    //     console.log("Formulário inválido");
    //   }
    // },

    save() {
      this.$refs.observerFormImage.validate().then(success => {
            if (success) {
              this.service
                  .created(this.image)
                  .then(() => {
                    (this.id) ? this.$router.push({name: 'home'}) : ''
                    this.image = new Image();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            }
          }, error => {
            console.error(error);
          },
      );


      // if(!isValid) {
      //   return false;
      //   console.log("Formulário inválido");
      // } else{
      //   try {
      //     console.log("Formulário válido");
      //     return true
      //   } catch (error) {
      //       console.log(error);
      //     return false
      //     }
      // }

      // this.service
      //     .created(this.image)
      //     .then(() => {
      //       (this.id) ? this.$router.push({name: 'home'}) : ''
      //       this.image = new Image();
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });

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

.form-input {
  width: 100%;
  height: 20px;
  border-radius: 5px;
  margin-top: 5px;
}

.text-area-form {
  border-radius: 5px;
  margin-top: 5px;
}

.message-error {
  color: red;
}
</style>