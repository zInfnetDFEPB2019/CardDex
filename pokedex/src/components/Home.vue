<template>
  <div class="home">
    <div id="ball-wrapper">
      <div id="ball"></div>
    </div>
    <ul class="shadow shadow-bottom-z-2">
      <li><a class="active">CardDex</a></li>
    </ul>
    <div class="row">
      <div class="column">
        <div >

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


        </div>
        <br />
        <div class="divBuscar">
            <button type="submit" class="button" onClick="return false;">Buscar</button>
          <input class="buscarPoke" />
        </div>
        <div>
          <input class="nomePoke" value="Pikachu" disabled />
        </div>
      </div>
      <div class="column" style="height: 700px; border-left: 30px solid rgb(180, 2, 2);">
        <div
          style="width: 80%; height: 35%; margin-left: 10%; margin-top: 10%; background-color:#1e1e1e;"
          class="shadow shadow-bottom-z-2"
        ></div>

        <div id="outer" style="padding-top: 5%;">
          <div class="inner">
            <button type="submit" class="msgBtn" onClick="return false;">
              Mais Detalhes
            </button>
          </div>
          <div class="inner">
            <button type="submit" class="msgBtn" onClick="return false;">
              Salvar Pokemon
            </button>
          </div>
          <div class="inner"><button class="msgBtn">Meu Time</button></div>
        </div>
        <div id="outer" style="padding-top: 2%;">
          <div class="inner">
            <button type="submit" class="msgBtn" onClick="return false;">
              Em breve
            </button>
          </div>
          <div class="inner">
            <button type="submit" class="msgBtn" onClick="return false;">
              Em breve
            </button>
          </div>
          <div class="inner"><button class="msgBtn">Em breve</button></div>
        </div>
        <section class="container">
          <div class="one" ></div>
          <div class="two"></div>
        </section>
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


<style>

  * {
    box-sizing: border-box;
  }
  body {
    background: rgb(235,0,0);
    background: linear-gradient(90deg, rgba(235,0,0,1) 31%, rgba(218,5,27,1) 50%, rgba(199,3,3,1) 71%);
  
  }
  .column {
    float: left;
    width: 50%;
    padding: 10px;
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #1e1e1e;
  }
  li {
    float: left;
  }
  li a {
    display: block;
    color: white;
    font-size: 25px;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  li a:hover {
    background-color: #111;
  }
  .button:hover,
  .button:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    transition: 0.2s
  }
  .button {
    background-color: #1e1e1e;
    border-color: rgb(59, 54, 54);
    color: white;
    padding: 20px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 60%;
    height: 80px;
    outline:none
  }
  .button:hover{
    background-color: #111;
  }
  .buscarPoke {
    width: 60%;
    height: 30px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    margin-left: 4%;
  }
  .nomePoke {
    width: 40%;
    height: 40px;
    background-color: #49b15c;
    border-color: #4c8356;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 40px;
    color: white;
    text-align: center;
    font-size: 120%;
    margin-left: 35.5%;
  }
  .divBuscar {
    padding-left: 10%;
    padding-top: 0%;
  }
  #outer {
    width: 100%;
    text-align: center;
  }
  .inner {
    display: inline-block;
  }
  .msgBtn {
    width: 150px;
    height: 50px;
    background-color: #1779ba;
    border-color: #125e90;
    color: white;
    font-size: 15px;
  }
  .msgBtn:hover,
  .msgBtn:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    transition: 0.2s
  }
  .container {
    width: 70%;
    height: 200px;
    margin: auto;
    padding: 10px;
  }
  .one {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    width: 200px;
    height: 40%;
    background: #1e1e1e;
    float: left;
    margin-top: 40px;
  }
  .two {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
    width: 200px;
    height: 40%;
    background: #1e1e1e;
    float: right;
    margin-top: 40px;
  }
  #ball-wrapper {
    position: relative;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  #ball {
    box-shadow: 0px 0px 20px 0px  rgb(42, 170, 255);
    width: 80px;
    height: 80px;
    left: 10%;
    top: 20%;
    border-radius: 50%;
    background: -webkit-radial-gradient(
      65% 15%,
      circle,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
    background: -moz-radial-gradient(
      65% 15%,
      circle,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
    background: -o-radial-gradient(
      65% 15%,
      circle,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
    background: radial-gradient(
      circle at 65% 15%,
      white 1px,
      aqua 3%,
      darkblue 60%,
      aqua 100%
    );
  }
  .visual {
    margin-top: 5%;
    margin-left: 5%;
    width: 90%;
    height: 400px;
    position: relative;
    display: flex;
    background-color: #dedede;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
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
  .shadow {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: inherit;
  }
  .shadow-bottom-z-1 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  }
  .shadow-top-z-1 {
    box-shadow: none;
  }
  .shadow-bottom-z-2 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3);
  }
  .shadow-top-z-2 {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  }
</style>