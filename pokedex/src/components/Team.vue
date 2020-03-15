<template>
  <div>
   <div id="ball-wrapper">
      <div id="ball"></div>
    </div>

    <ul class="shadow shadow-bottom-z-2">
      <li><a class="active">CardDex</a></li>
    </ul>
    <div>
      <h1 class="myteam">Meu Time</h1>
    </div>
    <div class="container">
        <div class="row">
          
          <div class="col-xs-12 col-sm-4">
              <div class="box">
                  <div class="card" style="width: 18rem;">
                      <h4 class="card-title">Card title</h4>
                      <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                      <div class="card-body">
                        <a href="#" class="btn btn-primary">Editar</a>
                        <a href="#" class="btn btn-primary">Excluir</a>
                      </div>
                    </div>
              </div>
          </div>
          
          <div class="col-xs-12 col-sm-4">
              <div class="box">
                  <div class="card" style="width: 18rem;">
                      <h4 class="card-title">Card title</h4>
                      <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                      <div class="card-body">
                        <a href="#" class="btn btn-primary">Editar</a>
                        <a href="#" class="btn btn-primary">Excluir</a>
                      </div>
                    </div>
              </div>
          </div>
          
          <div class="col-xs-12 col-sm-4">
              <div class="box">
                  <div class="card" style="width: 18rem;">
                      <h4 class="card-title">Card title</h4>
                      <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                      <div class="card-body">
                        <a href="#" class="btn btn-primary">Editar</a>
                        <a href="#" class="btn btn-primary">Excluir</a>
                      </div>
                    </div>
              </div>
          </div>
          
        </div>
      </div>
      

      <div class="container">
          <div class="row">
            
            <div class="col-xs-12 col-sm-4">
                <div class="box">
                    <div class="card" style="width: 18rem;">
                        <h4 class="card-title">Card title</h4>
                        <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                        <div class="card-body">
                          <a href="#" class="btn btn-primary">Editar</a>
                          <a href="#" class="btn btn-primary">Excluir</a>
                        </div>
                      </div>
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-4">
                <div class="box">
                    <div class="card" style="width: 18rem;">
                        <h4 class="card-title">Card title</h4>
                        <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                        <div class="card-body">
                          <a href="#" class="btn btn-primary">Editar</a>
                          <a href="#" class="btn btn-primary">Excluir</a>
                        </div>
                      </div>
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-4">
                <div class="box">
                    <div class="card" style="width: 18rem;">
                        <h4 class="card-title">Card title</h4>
                        <img class="card-img-top" src="https://i1.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/pikachu-pokemon-go-seniors.png?w=696&ssl=1" alt="Card image cap">
                        <div class="card-body">
                          <a href="#" class="btn btn-primary">Editar</a>
                          <a href="#" class="btn btn-primary">Excluir</a>
                        </div>
                      </div>
                </div>
            </div>
            
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team',
  props: {
    msg: String
  }
}
</script>

<style >
  body {
    background: rgb(235,0,0);
    background: linear-gradient(90deg, rgba(235,0,0,1) 31%, rgba(218,5,27,1) 50%, rgba(199,3,3,1) 71%);
  }
  .card-img-top{
    max-width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .card-title{
    text-align: center;
    background-color: rgba(230, 230, 230, 0.658);
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.15);
    color: black;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
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
  body {
    text-align: center;
    text-transform: uppercase;
    padding: 20px 0;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 255, 255);
    margin: 20px 0;
    padding: 10px;
    width: 100%;
    min-height: 200px;
    border: 2px #ccc solid;
    color: rgb(0, 0, 0);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
  .myteam{
    font-weight: bold;
    padding-top: 30px;
  }
</style>