<template>
<div class="text-CerberusDarkBlue-default text-center mb-8 text-3xl font-medium">
  <p>
    <span v-if="basicInfo">{{ basicInfo.MilitaryPerson.MilitaryGrade.name }}</span>
    <span v-else class="animate-pulse bg-gray-300 h-5 w-72 rounded-md inline-block"></span>
  </p>
  <p>
    <span v-if="basicInfo">{{ basicInfo.name }} {{ basicInfo.last_name }}</span>
    <span v-else class="animate-pulse bg-gray-300 h-5 w-32 rounded-md inline-block"></span>
  </p>
  <div class="flex object-center justify-center items-center pt-2">
    <img
      class="item w-10"
      :src="basicInfo ? basicInfo.MilitaryPerson.MilitaryGrade.image_url : ''"
      v-if="basicInfo"
    />
    <span
      v-else
      class="animate-pulse bg-gray-300 h-10 w-10 rounded-full inline-block"
    ></span>
  </div>
  <div class="text-xl"></div>
</div>
  <div
    class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl"
    style="min-height: 19rem"
  >
    <div
      class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg"
      style="min-height: 19rem"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover object-center"
        src="../../assets/Banner.webp"
        alt=""
      />
      <div
        class="absolute inset-0 w-full h-full bg-CerberusDarkBlue-default opacity-70"
      ></div>
      <div
        class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white"
      >
        <p class="text-5xl font-medium"></p>
      </div>
    </div>
    <div
      class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg"
    >
      <div class="p-12 md:pr-24 md:pl-16 md:py-12">
        <p class="text-gray-600">
          En <span class="text-gray-900">Cerberus</span> nuestra misión es
          llevar la seguridad perimetral a un nivel superior. Somos la respuesta
          a tus necesidades de seguridad, ofreciendo una plataforma integral que
          combina tecnología de vanguardia con un sistema de gestión de personal
          militar y de seguridad de última generación. Si buscas una solución
          completa para proteger tu entorno, has llegado al lugar adecuado.
        </p>
        <a
          class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
          href=""
        >
          <span>Aprende mas de nostros</span>
          <span class="text-xs ml-1">&#x279c;</span>
        </a>
      </div>
      <svg
        class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
    </div>
    <button
      class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline"
    >
      <span class="block" style="transform: scale(-1)">&#x279c;</span>
    </button>
    <button
      class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline"
    >
      <span class="block" style="transform: scale(1)">&#x279c;</span>
    </button>
  </div>

  <!-- Carousel Tabs -->
  <div class="flex items-center pt-5 justify-between">
    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
      <img class="w-full" alt="" style="max-height: 60px" />
    </button>
    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
      <img class="w-full" alt="" style="max-height: 60px" />
    </button>
    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
      <img class="w-full" alt="" style="max-height: 60px" />
    </button>
    <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
      <img class="w-full" alt="" style="max-height: 60px" />
    </button>
    <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
      <img class="w-full" alt="" style="max-height: 60px" />
    </button>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();


const basicInfo = computed(() => store.getters.basicInfo);


const getBasicInfo = () => store.dispatch("GET_BASIC_INFO");

onMounted(() => {
  getBasicInfo();
  
});
</script>

<style></style>
