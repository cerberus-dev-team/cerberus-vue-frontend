<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-50 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div
                  class="absolute left-full top-0 flex w-16 justify-center pt-5"
                >
                  <button
                    type="button"
                    class="-m-2.5 p-2.5"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div
                class="flex grow flex-col gap-y-5 overflow-y-auto bg-CerberusLightBlue-default px-6 pb-4"
              >
                <div class="flex h-16 shrink-0 items-center">
                  <img class="h-8 w-auto" src="../assets/CerberusIcon.svg" />
                  <p class="pl-4 font-medium text-xl text-white">Cerberus</p>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <router-link
                            :key="item.name"
                            :to="item.href"
                            :class="[
                              router.currentRoute.value.path === item.href
                                ? 'bg-CerberusDarkBlue-default text-white'
                                : 'text-white hover:text-white hover:bg-CerberusDarkBlue-default',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium',
                            ]"
                          >
                            <component
                              :is="item.icon"
                              :class="[
                                router.currentRoute.value.path === item.href
                                  ? 'text-white'
                                  : 'text-white group-hover:text-white',
                                'h-6 w-6 shrink-0',
                              ]"
                              aria-hidden="true"
                            />
                            {{ item.name }}
                          </router-link>
                        </li>
                      </ul>
                    </li>
                    <!-- <li>
                      <div
                        class="text-xs font-medium leading-6 text-white"
                      >
                        Your teams
                      </div>
                      <ul role="list" class="-mx-2 mt-2 space-y-1">
                        <li v-for="team in teams" :key="team.name">
                          <a
                            :href="team.href"
                            :class="[
                              team.current
                                ? 'bg-CerberusDarkBlue-default text-white'
                                : 'text-white hover:text-white hover:bg-CerberusDarkBlue-default',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium',
                            ]"
                          >
                            <span
                              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                              >{{ team.initial }}</span
                            >
                            <span class="truncate">{{ team.name }}</span>
                          </a>
                        </li>
                      </ul>
                    </li> -->
                    <li class="mt-auto">
                      <a
                        href="#"
                        class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 text-white hover:bg-CerberusDarkBlue-default hover:text-white"
                      >
                        <Cog6ToothIcon
                          class="h-6 w-6 shrink-0 text-white group-hover:text-white"
                          aria-hidden="true"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-CerberusLightBlue-default px-6 pb-4"
      >
        <div class="flex h-16 pt-2 shrink-0 items-center">
          <img
            class="h-14 w-auto"
            src="..//assets/CerberusIcon.svg"
            alt="Your Company"
          />
          <p class="pl-4 font-medium text-xl text-white">Cerberus</p>
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <router-link
                    :key="item.name"
                    :to="item.href"
                    :class="[
                      router.currentRoute.value.path === item.href
                        ? 'bg-CerberusDarkBlue-default text-white'
                        : 'text-white hover:text-white hover:bg-CerberusDarkBlue-default',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        router.currentRoute.value.path === item.href
                          ? 'text-white'
                          : 'text-white group-hover:text-white',
                        'h-6 w-6 shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- <li>
              <div class="text-xs font-medium leading-6 text-white">
                Your teams
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                <li v-for="team in teams" :key="team.name">
                  <a
                    :href="team.href"
                    :class="[
                      team.current
                        ? 'bg-CerberusDarkBlue-default text-white'
                        : 'text-white hover:text-white hover:bg-CerberusDarkBlue-default',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-medium',
                    ]"
                  >
                    <span
                      class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white"
                      >{{ team.initial }}</span
                    >
                    <span class="truncate">{{ team.name }}</span>
                  </a>
                </li>
              </ul>
            </li> -->
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 text-white hover:bg-CerberusDarkBlue-default hover:text-white"
              >
                <Cog6ToothIcon
                  class="h-6 w-6 shrink-0 text-white group-hover:text-white"
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Separator -->
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

        <div class="flex justify-end flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <div class="flex items-center gap-x-2 lg:gap-x-6">
            <button
              type="button"
              class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Separator -->
            <div
              class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
              aria-hidden="true"
            />

            <!-- Profile dropdown -->
            <Menu as="div" class="relative">
              <MenuButton
                v-if="basicInfo"
                class="-m-1.5 flex items-center p-1.5"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  :src="basicInfo.image_url"
                  alt=""
                />
                <span class="hidden lg:flex lg:items-center">
                  <span
                    class="ml-4 text-sm font-medium leading-6 text-gray-900"
                    aria-hidden="true"
                    >{{ basicInfo.name }} {{ basicInfo.last_name }}</span
                  >
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>

              <MenuButton
                v-else
                class="-m-1.5 flex items-center p-1.5 animate-pulse"
              >
                <span class="sr-only">Open user menu</span>
                <div class="h-8 w-8 rounded-full bg-gray-300"></div>
                <span class="hidden lg:flex lg:items-center">
                  <div class="ml-4 text-sm font-medium leading-6 text-gray-300">
                    <div
                      class="bg-gray-300 h-3 w-32 rounded-md animate-pulse"
                    ></div>
                  </div>
                  <ChevronDownIcon
                    class="ml-2 h-5 w-5 text-gray-400 animate-pulse"
                    aria-hidden="true"
                  />
                </span>
              </MenuButton>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active }"
                  >
                    <router-link
                      :to="item.href"
                      :class="[
                        active ? 'bg-gray-50' : '',
                        'block px-3 py-1 text-sm leading-6 text-gray-900',
                      ]"
                      >{{ item.name }}</router-link
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import router from "../router/index";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  EyeIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  PresentationChartBarIcon,
  PlusCircleIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
  CameraIcon
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/vue/20/solid";

const navigation = [
  { name: "Home", href: "/home", icon: HomeIcon, current: true },
  { name: "Camaras", href: "/home/cams", icon: EyeIcon, current: false },
  {
    name: "Estadisticas",
    href: "/home/estadisticas",
    icon: PresentationChartBarIcon,
    current: false,
  },
  {
    name: "Practicas Poligonos",
    href: "/home/practicas-poligonos",
    icon: PlusCircleIcon,
    current: false,
  },
  { name: "Personal", href: "/home/personal", icon: UsersIcon, current: false },
  {
    name: "Fuerzas Militares",
    href: "/home/fuerzas-militares",
    icon: ShieldCheckIcon,
    current: false,
  },
  {
    name: "Nodos de Seguridad",
    href: "/home/nodos-seguridad",
    icon: CameraIcon,
  }
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "/home/perfil" },
  { name: "Sign out", href: "#" },
];

const store = useStore();

const sidebarOpen = ref(false);

const basicInfo = computed(() => store.getters.basicInfo);

const getBasicInfo = () => store.dispatch("GET_BASIC_INFO");

onMounted(() => {
  getBasicInfo();
});
</script>
