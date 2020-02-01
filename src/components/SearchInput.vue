<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      :value="value"
      @input="handleCHange"
    />
  </div>
</template>

<script>

export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
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
  color: #2F4F5B;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  height: 30 px;
  border: 0;
  background: none;
  border-bottom: 1px solid #2F4F5B;
  transition: box-shadow .5s ease-out;

  @media(min-width: 1024px) {
      font-weight: 400;
  }
}
input:focus{
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255,255,255, .5);
}
</style>
