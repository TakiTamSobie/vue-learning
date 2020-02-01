<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
    />
  </div>
</template>

<script>

export default {
  name: "SearchInput"
};
</script>
<style lang="scss" scoped>
.searchWrapper {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 300px;
}

input {
  height: 30 px;
  border: 0;
  background: none;
  border-bottom: 1px solid #927C3D;
}
</style>
