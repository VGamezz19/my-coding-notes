const yo = require('yo-yo');
const layout = require('../layout')
let picture = require('../picture-card')
const translate = require('../translate').message
const request = require ('superagent')
module.exports = function(pictures) {
    let le =  yo `
        <div class = 'container timeline'>
            <div class="row">
                <div class="col s12 m10 offset-1 l8 offset-l2 center-align">
                    <form enctype="multipart/form-data" id='formUpload' class ='form-upload' onsubmit=${onsubmit}>
                        <div id ='fileName' class ='fileUpload waves-effect waves-light btn cyan'>
                            <span> 
                                <i class="fa fa-camera" aria-hidden="true"></i>
                                ${translate('upload-picture')}
                            </span>
                            <input type="file" name='picture' id='file' class ='upload' onchange= ${onchange} />
                        </div>
                        <button id='btnUpload' type='submit' class ='waves-effect waves-light btn cyan hide'>
                            ${translate('upload')}
                        </button>
                        <button id='btnCancel' type='button' class = 'btn btn-flat red hide' onclick= ${cancel}>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div class = 'row'> 
                <div class="col s12 m10 l6 offset-m1 offset-l3">
                ${pictures.map((pic)=>{
                    return picture(pic);
                })}
                </div>
            </div>
        </div>`

    function toggleButtons() {
        document.getElementById('fileName').classList.toggle('hide')
        document.getElementById('btnUpload').classList.toggle('hide')
        document.getElementById('btnCancel').classList.toggle('hide')
    }

    function cancel(){
        toggleButtons()
        document.getElementById('formUpload').reset() //Resetea el FORMULARIO
    }

    function onchange(){
        toggleButtons()
    }

    function onsubmit(ev) {
        ev.preventDefault() //No se ara ese request del FORM

        var data = new FormData(this) //Este this son los datos del FORM
        request
            .post('/api/pictures')
            .send(data)
            .end((err,res) => {
                console.log(arguments)
            })
    }

    
    return layout(le)
}

