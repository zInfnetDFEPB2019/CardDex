<template>
  <div class="home">
    <div class="wrapper">
      <ul class="sideMenu">
        <li class="sideMenuItem"><a href="">Mostrar mais detalhes</a></li>
        <li class="sideMenuItem"><a href="">Salvar Pokemon</a></li>
        <li class="sideMenuItem"><a href="">Meu Time</a></li>
      </ul>
      <div class="details">
        <div id="detailsRow1"><p class="detailsText" id="details1"></p><p class="detailsText" id="details2"></p></div>
        <div id=" detailsRow2"><p class="detailsText" id="details3"></p><p class="detailsText" id="details4"></p></div>
      </div>
      <div class="visual">
        <div class="visual1">
          <div class="superiorVisualbtn-wrapper">
            <div class="superiorVisualbtn"></div>
            <div class="superiorVisualbtn"></div>
          </div>
        </div>
        <div class="visual2"></div>
        <div class="visual3">
          <div class="visualBtn-wrapper">
            <div class="visualBtn"></div>
          </div>
          <div class="speakers-wrapper">
            <div class="speakers"></div>
            <div class="speakers"></div>
            <div class="speakers"></div>
          </div>
          
        </div>
      </div>
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

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding: 0 5px;
  }
  .home::before, .home::after {
    content: "";
    display: block;
    background-color: rgba(0, 0, 0, .4);
    width: 2%;
    height: 100%;
  }

  .sideMenu {
    display: flex;
    flex-direction: column;
    height: 60%;
    justify-content: space-between;
  }

  .sideMenuItem {
    background-color: #27a5f4;
    height: 100px;
    width: 200px;
    line-height: 100px;
  }

  .sideMenu a {
    color: black;
    text-decoration: none;
    text-align: center;
  }
  .details {
    background-color: gray;
    height: 300px;
    width: 500px;

  }

  .detailsText {
    padding: 2px;
    min-width: 200px;
    min-height: 50px;
    border-radius: 10px;
  }

  .visual {
    width: 700px;
    height: 500px;
    position: relative;
    display: flex;
    background-color: #dedede;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .visual1 {
    width: 15%;
    height: 12.5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .visual2 {
    height: 75%;
    width: 80%;
    background-color: gray;
  }

  .visual3{
    width: 75%;
    height: 12.5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .speakers-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .speakers {
    background: #494949;
    height: 3px;
    width: 165px;
    margin-bottom: 5px;
    border-radius: 30px;
  }

  .visualBtn {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-image: linear-gradient(top, #c00d0d 0%, #8b0000 80%)
  }

  .superiorVisualbtn-wrapper{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .superiorVisualbtn {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-image: linear-gradient(top, #c00d0d 0%, #8b0000 80%)
  }
</style>