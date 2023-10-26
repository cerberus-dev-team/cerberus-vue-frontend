<template>
  <div class="container my-5 p-2 md:mx-3">
    <div class="md:flex no-wrap">
      <div class="w-full mr-20 md:w-3/12">
        <div class="p-4 rounded-full">
          <img
            class="w-44 md:w-44 sm:w-48 lg:w-auto xl:w-52 mx-auto rounded-full"
            :src="basicInfo ? basicInfo.image_url : ''"
            draggable="false"
          />
        </div>
        <div class="text-2xl font-medium text-center text-gray-800">
          {{ basicInfo ? basicInfo.name : "" }}
          {{ basicInfo ? basicInfo.last_name : "" }}
        </div>
        <div class="text-xl font-medium text-center text-gray-400">
          {{ basicInfo ? basicInfo.MilitaryPerson.MilitaryGrade.name : "" }}
        </div>
      </div>
      <div class="w-full md:w-9/12 mx-3 h-64">
        <div class="justify-center object-center align-middle">
          <div
            class="p-0 md:p-2 sm:p-2 lg:p-2 xl:p-6 xl:text-left pt-8 text-center"
          >
            <h1 class="text-2xl pb-5">Informacion de usuario</h1>
            <div class="w-3/6">
              <label class="flex text-lg text-gray-800 p3t-4">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                :value="basicInfo ? basicInfo.name : ''"
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="basicInfo ? basicInfo.name : ''"
              />
              <label class="flex text-lg text-gray-800 pt-4">Apellido</label>
              <input
                type="text"
                name="apellido"
                id="apellido"
                :value="basicInfo ? basicInfo.last_name : ''"
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="basicInfo ? basicInfo.last_name : ''"
              />
              <label class="flex text-lg text-gray-800 pt-4"
                >Correo electronico</label
              >
              <input
                type="email"
                name="correo"
                id="correo"
                :value="basicInfo ? basicInfo.email : ''"
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="basicInfo ? basicInfo.email : ''"
              />
              <label class="flex text-lg text-gray-800 pt-4">Rango</label>
              <input
                type="text"
                name="rango"
                id="rango"
                :value="
                  basicInfo ? basicInfo.MilitaryPerson.MilitaryGrade.name : ''
                "
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="
                  basicInfo ? basicInfo.MilitaryPerson.MilitaryGrade.name : ''
                "
              />
              <div class="w-8">
                <label class="flex text-lg text-gray-800 pt-4">Insignia</label>
                <img
                  draggable="false"
                  class="pt-2"
                  :src="
                    basicInfo
                      ? basicInfo.MilitaryPerson.MilitaryGrade.image_url
                      : ''
                  "
                />
              </div>
              <label class="flex text-lg text-gray-800 pt-4">Instalacion</label>
              <input
                type="text"
                name="rango"
                id="rango"
                :value="
                  basicInfo
                    ? basicInfo.MilitaryPerson.MilitaryInstallation.name
                    : ''
                "
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="
                  basicInfo ? basicInfo.MilitaryPerson.MilitaryGrade.name : ''
                "
              />
              <label class="flex text-lg text-gray-800 pt-4"
                >Fuerza militar</label
              >
              <input
                type="text"
                name="rango"
                id="rango"
                :value="
                  basicInfo
                    ? basicInfo.MilitaryPerson.MilitaryInstallation
                        .MilitaryForce.name
                    : ''
                "
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="
                  basicInfo
                    ? basicInfo.MilitaryPerson.MilitaryInstallation
                        .MilitaryForce.name
                    : ''
                "
              />
              <label class="flex text-lg text-gray-800 pt-4"
                >Tipo de sangre</label
              >
              <input
                type="text"
                name="correo"
                id="correo"
                :value="
                  basicInfo ? basicInfo.MilitaryPerson.BloodType.type : ''
                "
                disabled=""
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                :placeholder="
                  basicInfo ? basicInfo.MilitaryPerson.BloodType.type : ''
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputField from "../../components/common/InputField.vue";
import Button from "../../components/common/Button.vue";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";

const store = useStore();
const basicInfo = computed(() => store.getters.basicInfo);
const getBasicInfo = () => store.dispatch("GET_BASIC_INFO");

onMounted(() => {
  getBasicInfo();
});
</script>
