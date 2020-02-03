<template>
  <div :class="[{flexStart: step === 1}, 'wrapper' ]">
    <transition name="slide">
      <img src="@/assets/logo.png" class="logo" v-if="step === 1">
    </transition>
    <transition name="fade">
      <HeroImage v-if="step === 0"/>
    </transition>
    <Claim v-if="step === 0"/>
    <SearchInput v-model="searchValue" @input="handleInput"
      :dark="step === 1"/>
      <div class="results" v-if="results && !loading && step === 1">
        <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id"
          @click.native="handleModalOpen(item)"/>
      </div>
      <div class="loader" v-if="step === 1 && loading" />
      <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false"/>
  </div>
</template>

<script>

import axios from "axios";
import debounce from "lodash.debounce";
import Claim from "@/components/Claim.vue";
import SearchInput from "@/components/SearchInput.vue";
import HeroImage from "@/components/HeroImage.vue";
import Item from "@/components/Item.vue";
import Modal from "@/components/Modal.vue";


const API = "https://images-api.nasa.gov/search";

export default {
  name: "Search",
  compontents: {
    Claim,
    Modal,
    Item,
    SearchInput,
    HeroImage
  },
  data() {
    return {
      modalOpen: false,
      modalItem: null,
      loading: false,
      step: 0,
      searchValue: "",
      results: []
    };
  },
  methods: {
    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
    },

    handleInput: debounce(function () {
      this.loading = true;
      console.log(this.searchValue);
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500)
  }
};
</script>
<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: margin-top .3s ease;
}

.slide-enter, .slide-leave-to {
  opacity: -50px;
}

.wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin: 0;
  min-height: 100vh;
  height: 100vh;
  padding: 30px;
  width: 100%;
  justify-content: center;

  &.flexStart {
    justify-content: flex-start;
  }
}

.loader {
  margin-top: 100px;
  display: inline-block;
  width: 80px;
  height: 80px;

  @media(min-width: 768){
    width: 90px;
    height: 90px;
  }
}
.loader:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #2F4F5B;
  border-color: #2F4F5B transparent #2F4F5B transparent;
  animation: loading 1.2s linear infinite;

  @media(min-width: 768){
    width: 90px;
    height: 90px;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


.logo{
  position: absolute;
  top: 10px;
  z-index: -1;
  width: 5%;
  height: 5%;
}

.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media(min-width: 768px) {
    grid-template-columns: 1fe 1fe 1fr;
  }
}

</style>
