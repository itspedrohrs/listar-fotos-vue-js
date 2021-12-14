export default class FotoService {
    constructor(resource) {
        this._resource = resource('v1/fotos{/id}')
    }

    list(){
        return this._resource
            .query()
            .then(res => res.json())
    }

    created(image) {
        return this._resource
            .save(image)
    }

    delete(image) {
        console.log('image:'+image)
        return this._resource
            .delete({
                id: image._id
            })
            .then(res =>
            {
                msg: 'Foto removida com sucesso!'
                type: 'success'
                status: 200
            }
                , err => false)
    }
}


