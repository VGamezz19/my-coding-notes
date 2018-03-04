function apiDraagu() {
  return {
    __call : function(path){
      return fetch(path)
      .then(res => res.json())
    },
    getPage : function(num) {
      return this.__call(`https://demo.wp-api.org/wp-json/wp/v2/posts?per_page=${num}`)
    }
  }
}

export { apiDraagu }