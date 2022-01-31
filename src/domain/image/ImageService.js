import {error} from "vue-resource/src/util";

export default class ImageService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    list() {
        return this._resource
            .query()
            .then(res => res.json(), error => {
                console.error(error)
                throw new Error('Não foi possível exibir a lista de imagens !')
            })
    }

    created(image) {

        if (image._id) {
            return this._resource
                .update({id: image._id}, JSON.stringify(image))
        } else {
            return this._resource.save(image)
        }
    }

    delete(image) {
        console.log('image:' + image)
        return this._resource
            .delete({
                id: image._id
            })
            .then(res => {
                msg: 'Foto removida com sucesso!'
                type: 'success'
                status: 200
            }, error => {
                console.error(error)
                throw new Error('Error ao tentar excluir a imagem !')
            })
    }

    searchImageUpdated(id) {
        return this._resource
            .get({
                id: id
            })
            .then(res => res.json(), error => {
                console.error(error)
                throw new Error('Imagem não encontrada na base de dados !')
            })
    }
}


