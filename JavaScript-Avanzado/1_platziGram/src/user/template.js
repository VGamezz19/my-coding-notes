const yo = require('yo-yo');
const layout = require('../layout')
let picture = require('../picture-card')
const translate = require('../translate').message
const request = require ('superagent')

module.exports = function(user) {
    console.log(user)
    let le =  yo `
        <div class = 'container user'>
            <div class="row">
                <div class="col m4 s4 l4">
                    ${user}
                </div>
                <div class="col m8 s8 l8">
                    <div class="row">
                        <div class="col m12 l12 s12">
                            Name - Le sigues - icon
                        </div>
                    </div>
                    <div class="row">
                        <div class="col m12 l12 s12">
                            Descripcion
                        </div>
                    </div>
                    <div class="row">
                        <div class="col m4 s4 l4">
                            Publicaciones
                        </div>
                        <div class="col m4 s4 l4">
                            Seguidores
                        </div>
                        <div class="col m4 s4 l4">
                            Seguidos
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                Las fotos del usuario
            </div>
        </div>`

    // function toggleButtons() {
    //     document.getElementById('fileName').classList.toggle('hide')
    //     document.getElementById('btnUpload').classList.toggle('hide')
    //     document.getElementById('btnCancel').classList.toggle('hide')
    // }

    // function cancel(){
    //     toggleButtons()
    //     document.getElementById('formUpload').reset() //Resetea el FORMULARIO
    // }

    // function onchange(){
    //     toggleButtons()
    // }

    // function onsubmit(ev) {
    //     ev.preventDefault() //No se ara ese request del FORM

    //     var data = new FormData(this) //Este this son los datos del FORM
    //     request
    //         .post('/api/pictures')
    //         .send(data)
    //         .end((err,res) => {
    //             console.log(arguments)
    //         })
    // }

    
    return layout(le)
}