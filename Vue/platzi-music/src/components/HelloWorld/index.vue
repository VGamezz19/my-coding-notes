<template>
    <div class="hello">
    <h1>PlatziMusci TEST {{ hey }}</h1>
        <li v-for='(artist, index) in artists' :key='index'> {{ artist.name }}</li>
    </div>
</template>

<style src="./HelloWorld.css" scoped></style>
<script>
export default {
  name: "HelloWorld",
  props: {
     artists: [ ]
    //   { name: "David Bowie" },
    //   { name: "David Bowie" },
    //   { name: "David Bowie" },
    //   { name: "David Bowie" },
    //   { name: "David Bowie" },
    //   { name: "David Bowie" },
    //   { name: "David Bowie" }
    // ]
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->