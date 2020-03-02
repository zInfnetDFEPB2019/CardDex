<template>
  <div class="home">
    <div class="wrapper"></div>
      <ul class="sideMenu">
        <li class="sideMenuItem"><a href="">Mostrar mais detalhes</a></li>
        <li class="sideMenuItem"><a href="">Salvar Pokemon</a></li>
        <li class="sideMenuItem"><a href="">Meu Time</a></li>
      </ul>
      <div class="details">
        <div id="detailsRow1"><p class="detailsText" id="details1"></p><p class="detailsText" id="details2"></p></div>
        <div id=" detailsRow2"><p class="detailsText" id="details3"></p><p class="detailsText" id="details4"></p></div>
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

  .details {
    background-color: gray;
    

  }

  .detailsText {
    padding: 2px;
    min-width: 200px;
    min-height: 50px;
    border-radius: 10px;
  }
</style>