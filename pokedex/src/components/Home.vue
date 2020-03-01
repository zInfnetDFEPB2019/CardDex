<template>
  <div class="home">
    <h1 class="box"></h1>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <div class="search-container">
        <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search">
          <button type="submit">GO</button>
        </form>
      </div>
    </div>
    <div>
      <div class="column" id="dark"></div>
      <div class="column" id="light">
        <div id="info">
          <div id="divBtn">
            <button class="butaun" id="btn">Buscar</button>
            <button class="butaun" id="btn">Buscar</button>
            <button class="butaun" id="btn">Buscar</button>
          </div>
          <div class="block"></div>
        </div>
        <div class="bigblock">
          <div class="block2"></div>
          <div id="visual">
            <div class="bolinha"></div>
            <div class="linha1"></div>
            <div class="linha1"></div>
            <div class="bolinha"></div>
          </div>
        </div>
      </div>
      <div class="column" id="dark"></div>
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
body {
  background-color: #de1537;
}
.topnav {
  margin-top: 125px;
  overflow: hidden;
  background-color: #900C22;
}
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  margin-left: 30px;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #2196F3;
  color: white;
}
.topnav .search-container {
  float: right;
  margin-right: 30px;
}
.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}
.topnav .search-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #4ba358;
  font-size: 17px;
  border: none;
  cursor: pointer;
}
.topnav .search-container button:hover {
  background: #ccc;
}
@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
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
  height: 1700px;
}
#dark2{
  background-color: #900C22;
  float: right;
  width: 1%;
  padding: 5px;
  height: 1700px;
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
  left: 10%;
  top: 20%;
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
  padding-left:5px; 
  font-size:18px;
  border:none;
  height:32px;
}
#btnBusca{
  border:none;
  height:35px;
  width:100px;
  font-weight:bold;
  background:#4BA358;
}
#info {
  display: flex;
}
#divBtn {
  margin-top: 105px;
  margin-left: 30px; 
  margin-right: 20%;
}
.block{
  margin-top: 150px;
  margin-left: 30px; 
  display: block;
  border:none;
  height: 300px;
  width:500px;
  font-weight:bold;
  background:#655C5C;
}
.bigblock{
  display: block;
  border:none;
  margin-top: 70px;
  margin-right: 50px;
  height:490px;
  width:600px;
  font-weight:bold;
  background: #DEDEDE;
}
#visual {
  display: flex;
  justify-content: space-around;
}
.bolinha {
  background: red;
  width: 20px;
  height: 20px;
  border: 1px solid;
  border-radius: 50%;
  margin-top: 2%;
}
.linha1 {
  background: darkgray;
  height: 5px;
  width: 165px;
  margin-top: 3%;

}
.block2{
  margin-left: 77px;
  margin-top: 30px;
  height: 400px;
  width:450px;
  font-weight:bold;
  background:#655C5C;
  justify-content: center;
}
.butaun{
  border:none;
  display: block;
  margin-top: 55px;
  height:50px;
  width:130px;
  font-size: 1.6em;
  font-weight:bold;
  background:#27A5F4;
  border-radius: 5px;
}
</style>