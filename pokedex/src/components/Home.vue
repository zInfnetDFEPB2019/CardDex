<template>
  <div class="home">
    <div id="middle_column">
      <div class="column_type1"></div>
      <div class="column_type2"></div>
      <div class="column_type3"></div>
      <div class="column_type2"></div>
      <div class="column_type3"></div>
      <div class="column_type2"></div>
      <div class="column_type1"></div>
    </div>
    <div class="wrapper">
      <div id="search_component">
          <div class="visual" >
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
          
        <div class="search_subcomponent">
          <input type="submit" id="searchBtn" value="Buscar">
          <input type="text" id="searchField" placeholder="Nome ou número">
        </div>
        <div class="search_subcomponent">
          <p id="pokemonDisplayName">Pikachu</p>
        </div>
      </div>
      <div id="info_and_option">
        <div id="info_wrapper">
          <div class="info">
            <p class="info_title">Height</p>
            <p class="info_value">0.4 m</p>
          </div>
          <div class="info">
            <p class="info_title">Category</p>
            <p class="info_value">Mouse</p>
          </div>
          <div class="info">
            <p class="info_title">Weight</p>
            <p class="info_value">6.0 kg</p>
          </div>
          <div class="info">
            <p class="info_title">Ability</p>
            <p class="info_value">Static</p>
          </div>
          <div class="info">
            <p class="info_title">Type</p>
            <p class="info_value">Eletric</p>
          </div>
          <div class="info">
            <p class="info_title">Weakness</p>
            <p class="info_value">Ground</p>
          </div>
        </div>
        <div id="option_wrapper">
          <a href="" class="option_button">Salvar Pokemon</a>
          <a href="" class="option_button">Mostrar Time</a>
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
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    position: relative;
  }

  #middle_column {
    display: none;
  }

  .wrapper {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    padding: 0 5px;
    flex-direction: column;
  }

  #search_component {
    width: 100%;
  }

  .search_subcomponent {
    display: flex;
    justify-content: space-around;
    align-items: center;
  } 

  #searchBtn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    
  }

  #searchField {
    height: 50%;
    border-radius: 5px;
    padding-left: 10px;
  }

  #pokemonDisplayName {
    background: lightgreen;
    width: 50%;
    border-radius: 20px;
    border: 1px solid green;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }

  #info_and_option {
    width: 100%;
  }

  #info_wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: black;
  }

  .info {
    width: 40%;
  }

  .info_title {
    color: chartreuse;
  }

  .info_value {
    color: green;
  }

  #option_wrapper {
    margin: 20px 0;
    display: flex;
    justify-content: space-around;

  }

  .option_button {
    text-decoration: none;
    color: white;
    background-color: steelblue;
    width: 40%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;

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
    width: 100%;
    max-width: 700px;
    height: 300px;
    max-height: 500px;
    position: relative;
    display: flex;
    background-color: #dedede;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 5px;
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
    height: 33px;
    width: 33px;
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

  @media only screen and (min-width: 1200px) {
    
    #middle_column {
      width: 50px;
      display: block;
      height: 100%;
      background-color: rgba(0,0,0, 0.4);
      position: absolute;
      top: 0;
      left: 50%;
    }
    .home {
      margin-top: 0px;
    }
    .wrapper {
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
    }

    .visual{
      height: 400px;
    }
    #search_component {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 46%;
    }

    .search_subcomponent {
      width: 100%;
      max-width: 700px;
    }

    #searchField {
      width: 50%;
      height: 50px;
      border-radius: 21px;
    }

    #searchBtn {
      width: 92px;
      height: 92px;
    }

    #pokemonDisplayName {
      width: 35%;
    }

    #info_and_option {
      width: 44%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #info_wrapper{
      width: 100%;
    }

    #option_wrapper {
      width: 100%;
    }
  }
</style>