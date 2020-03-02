<template>
  <div class="home">
    <div class="wrapper"></div>
      <ul class="sideMenu">
        <li class="sideMenuItem"><a href="">Mostrar mais detalhes</a></li>
        <li class="sideMenuItem"><a href="">Salvar Pokemon</a></li>
        <li class="sideMenuItem"><a href="">Meu Time</a></li>
      </ul>
      <div class="details">

      </div>
      <div class="information">
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<style >
  .home {
    padding: 0 10px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
  }

  .home::before, .home::after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, .4);
    width: 2%;
    height: 100%;
  }
</style>