const yo = require('yo-yo');
const translate = require('../translate')

module.exports = function layout (content){
    return yo `
        <div class = 'content'>
            ${content}
        </div>
    `;

}
