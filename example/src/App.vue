<template>
  <div id="app">
    <AccordionMenu :contents="contents"></AccordionMenu>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      contents: [
      {
        title: 'How are you?',
        msg: 'Test for fun!',
      },
      {
        title: 'Who let the dog out?',
        msg: 'I do not know, dude.',
      },
      {
        title: '肚子好餓?',
        msg: '吃芭樂啦！',
      },
      {
        title: 'Find hotels?',
        msg: 'Trivago！',
      },
      ],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
