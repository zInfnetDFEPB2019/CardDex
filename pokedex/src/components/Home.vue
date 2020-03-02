<template>
  <div class="home">
    <header>
      <div id="ball-wrapper"></div>
    </header>
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
    padding: 10px;
    position: relative;
  }
  #ball-wrapper {

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
</style>