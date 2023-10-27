<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Personal</h1>
        <p class="mt-2 text-sm text-gray-700">
          Una lista de todos los usuarios de su cuenta incluyendo su nombre,
          cargo, correo electrónico.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-CerberusDarkBlue-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agregar militar
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <!-- Esqueleto de carga -->
          <div v-if="isLoading" class="animate-pulse">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Nombre
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Rango
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="n in 5" :key="n">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <div class="h-11 w-11 bg-gray-200 rounded-full"></div>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900 bg-gray-200 h-4 w-20"></div>
                        <div class="mt-1 text-gray-500 bg-gray-200 h-4 w-32"></div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 bg-gray-200 h-4 w-16"></div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <span
                      class="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-300"
                    >Loading</span>
                  </td>
                  <td
                    class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                  >
                    <div class="h-4 w-12 bg-gray-200"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Datos reales -->
          <table v-else class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Rango
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Status
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="MilitaryUser in MilitaryUsers" :key="MilitaryUser.email">
                <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div class="flex items-center">
                    <div class="h-11 w-11 flex-shrink-0">
                      <img
                        class="h-11 w-11 rounded-full"
                        :src="MilitaryUser.image_url"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-gray-900">
                        {{ MilitaryUser.name }}
                      </div>
                      <div class="mt-1 text-gray-500">
                        {{ MilitaryUser.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <div class="text-gray-900">
                    {{ MilitaryUser.MilitaryPerson.MilitaryGrade.name }}
                  </div>
                </td>
                <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                  <span
                    class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                  >Active</span>
                </td>
                <td
                  class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                >
                  <a
                    href="#"
                    class="text-indigo-600 hover:text-CerberusDarkBlue-default"
                  >
                    Edit<span class="sr-only">, {{ MilitaryUser.name }}</span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const isLoading = ref(true)

const MilitaryUsers = computed(() => store.state.militaryUsers);

const getMilitaryUsers = () => store.dispatch("GET_ALL_USERS");

onMounted(async() => {
 await getMilitaryUsers();
 isLoading.value = false
});
</script>
