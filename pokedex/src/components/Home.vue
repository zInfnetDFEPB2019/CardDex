<template>
  <div class="home">
    <h1 class="box"> </h1>
    <nav id="bckdrkred">
      <ul>
        <li><a href="#">Files</a></li>
        <li><a href="#">Edit</a></li>
        <li><a href="#">View</a></li>
        <li><a href="#">Help</a></li>
      </ul>
      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Ola, faça sua busca aqui"/>
        <button id="btnBusca">Buscar</button>
      </div>
    </nav>
  <div>
    <div class="column" id="dark">a
    </div>
    <div class="column" id="light">a
      <div>
        <button id="butaun">Buscar</button>
        <button id="butaun">Buscar</button>
        <button id="butaun">Buscar</button>
      </div>
      <div class="block">

      </div>
      <div class="bigblock">
        <div class="block2">
        </div>
      </div>
    </div>
    <div class="column" id="dark">a

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

#bckdrkred{
  display: flex;
  justify-content: space-between;
  margin-top: 8%;
  background-color: #900C22;
  height: 50px;
  font-size: 25px;
  font-weight: normal;
  text-decoration: none;
  text-align: left;
}
ul {
  list-style-type: none;
  padding: -90px;
  text-decoration: none;
}
li {
  display: inline-block;
  margin: -80px 20px;
  text-decoration-style: none;
}
a {
  color: black;
  text-decoration: none;
}
.column{
  display: flex;
  flex-wrap: wrap;  
}
#dark{
background-color: #900C22;
float: left;
  width: 1%;
  padding: 5px;
  height: 700px;
}
#dark2{
  background-color: #900C22;
float: right;
  width: 1%;
  padding: 5px;
  height: 700px;
}
#light{
  justify-content: space-between;
  background-color: #de1537;
  float: left;
  width: 96.3%;
  padding: 5px;
  height:700px;
}
.box {
width: 100px;
height: 100px;
position: absolute;
left: 12%;
top: 22%;
margin: -200px 0 0 -200px;
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
h1{
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}
#divBusca{
  background-color:white;
  border:solid 1px;
  border-radius:15px;
  width:300px;
  height: 70%;
display: flex;
justify-content: space-around;

}
 
#txtBusca{
  float:left;
  background-color:transparent;
  padding-left:5px; 
  font-size:18px;
  border:none;
  height:32px;
  width:100%;

}
#btnBusca{
  border:none;
  float:left;
  height:35px;
  width:100px;
  font-weight:bold;
  background:#4BA358;
}
.block{
  display: block;
  border:none;
  float:left;
  height: 450px;
  width:500px;
  font-weight:bold;
  background:#655C5C;
}
.bigblock{
display: block;
  border:none;
  float:left;
  height:490px;
  width:600px;
  font-weight:bold;
  background: #DEDEDE;
}
.block2{
  display: block;
  border:none;
  float:left;
  height: 450px;
  width:500px;
  font-weight:bold;
  background:#655C5C;
  justify-content: center;
}
#butaun{
  border:none;
  float:left;
  height:35px;
  width:100px;
  font-weight:bold;
  background:#27A5F4;
}

</style>
