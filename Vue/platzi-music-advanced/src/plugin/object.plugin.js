const objectPlugin = { }

objectPlugin.install = function (Vue) {
  Vue.prototype.$helper = {

    object: {
      isEmpty: function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
      },

      clone: function (obj) {
        return Object.assign({}, obj)
      }
    }
  }
}

export default objectPlugin
