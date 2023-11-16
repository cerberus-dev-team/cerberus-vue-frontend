<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">
          Nodos de seguridad
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          Listado de los nodos de seguridad registrados en el sistema asociados
          a la instalaicón militar
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Agregar nodo
        </button>
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
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Ubicación
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <template v-if="securityNodes.length">
                <tr
                  v-for="securityNode in securityNodes"
                  :key="securityNode.id"
                >
                  <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="font-medium text-gray-900 skeleton">
                          {{ hideId(securityNode.id) }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 skeleton">
                      {{ securityNode.name }}
                    </div>
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm text-gray-500 skeleton"
                  >
                    {{ securityNode.location }}
                  </td>
                  <td
                    class="whitespace-nowrap px-3 py-5 text-sm flex justify-center skeleton"
                  >
                    <button
                      @click.prevent="
                        publish(ping, securityNode.id);
                        suscribeDevicePinged();
                      "
                      type="button"
                      class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    >
                      Ping
                    </button>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="index in 4" :key="index">
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 animate-pulse">
                      <div class="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 animate-pulse">
                      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </td>

                  <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                    <div class="text-gray-900 animate-pulse">
                      <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
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

const PUB_TOPICS = { ping: "ping" };
const { ping } = PUB_TOPICS;

const securityNodes = computed(() => store.state.securityNodes);

const getSecurityNodes = () => store.dispatch("GET_SECURITY_NODES");

const publish = (topic, msg) => store.dispatch("PUBLISH", { topic, msg });

const suscribeDevicePinged = () =>
  store.dispatch("SUBSCRIBE", { topic: "pinged" });

const hideId = (uuid) => {
  return (
    uuid.substring(0, 8) +
    "*".repeat(uuid.length - 12) +
    uuid.substring(uuid.length - 4)
  );
};

onMounted(() => {
  getSecurityNodes();
});
</script>

