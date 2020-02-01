<template>
  <div class="heroWrapper">

  </div>
</template>

<script>

export default {
  name: "HeroImage"
};
</script>
<style lang="scss" scoped>
.heroWrapper{
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/maxresdefault.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;
}
.heroWrapper::after{
    content: '';
    background: rgba(0,0,0, .2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
}
</style>
