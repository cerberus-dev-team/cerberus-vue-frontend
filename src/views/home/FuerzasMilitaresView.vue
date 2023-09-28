<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Fuerzas Militares
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          Listado de las fuerzas militares registradas en el sistema
        </p>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Nombre
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <template v-if="militaryForces.length">
                <tr
                  v-for="militaryForce in militaryForces"
                  :key="militaryForce.id"
                >
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <img
                          class="w-10 skeleton"
                          :src="militaryForce.image_url"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900 skeleton">
                          {{ militaryForce.id }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 skeleton">
                      {{ militaryForce.name }}
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 skeleton"
                  >
                    {{ militaryForce.role }}
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="index in 4" :key="index">
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="h-11 w-11 flex-shrink-0">
                        <div
                          class="w-10 h-10 bg-gray-200 rounded-full animate-pulse"
                        ></div>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900 animate-pulse">
                          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 animate-pulse">
                      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 animate-pulse"
                  >
                    <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

const militaryForces = computed(() => store.state.militaryForces);

const getMilitaryForces = () => store.dispatch("GET_MILITARY_FORCES");

onMounted(() => {
  getMilitaryForces();
});
</script>