<template>
  <div id="app">
    <header>
      <div id="ball-wrapper">
        <div id="ball"></div>
      </div>
      <div id="sub-menu">
        <ul id="nav-bar">
          <li><a href="">File</a></li>
          <li><a href="">Edit</a></li>
          <li><a href="">View</a></li>
          <li><a href="">Help</a></li>
        </ul>
        <div id="search-bar">
          <input type="text" id="inputBusca">
          <input type="submit" id="btnsubmit" value="Buscar">
        </div>
      </div>
    </header>
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>

html{
  min-height: 100vh;
  font-family: 'VT323', monospace;
   font-size: 22px;
}

#app {
   font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
  margin-top: 10px;
  background-color: #de1537;
}

#ball-wrapper {
    position: relative;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  #ball {

    width: 100px;
    height: 100px;
    left: 10%;
    top: 20%;
    border-radius: 50%;
    background: -webkit-radial-gradient(65% 15%, circle, white 1px, aqua 3%,
    darkblue 60%, aqua 100%);
    background: -moz-radial-gradient(65% 15%, circle, white 1px, aqua 3%, darkblue
    60%, aqua 100%);
    background: -o-radial-gradient(65% 15%, circle, white 1px, aqua 3%, darkblue
    60%, aqua 100%);
    background: radial-gradient(circle at 65% 15%, white 1px, aqua 3%, darkblue
    60%, aqua 100%);

  }
  ul {
    list-style-type: none;
    display: flex;
  }

  #search-bar {
    width: 35%;
    display: flex;
  }

  #inputBusca {
    width: 400px;
    border-radius: 10px;
    margin-right: 20px;

  }
  #btnsubmit {
    height: 40px;
    background-color: #4ba358;
    border: 0;
  }
  #nav-bar {
    width: 40%;
    display: flex;
    justify-content: space-around;
  }
  #nav-bar li {
    margin-right: 5px;
  }

  #nav-bar li a {
    color: black;
    text-decoration: none;
    transition: all ease .5s;
  }

  #nav-bar li a:hover{
    color: gray;
  }
  .home {
    position: relative;
  }

  #sub-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0, 0, 0, .4);
    padding: 0 10px;
  }
</style>
