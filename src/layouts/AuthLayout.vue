<template>
  <div class="flex flex-1 min-h-screen">
    <div
      class="flex flex-1 bg-white flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24"
    >
      <div class="w-full mx-auto">
        <div class=" flex justify-center">
          <img
            class="w-24 md:w-24 lg:w-24 xl:w-24 2xl:w-24"
            src="..//assets/CerberusIcon.svg"
          />
        </div>
        <div>
          <h1 class="text-2xl font-bold text-center text-CerberusDarkBlue-default">CERBERUS</h1>
        </div>
        <div>
          <h2 class="text-CerberusLightBlue-default leading-6 text-lg pt-6 font-medium text-center">Autenticación requerida</h2>
          <h2 class="text-CerberusLightBlue-default text-lg  font- font-medium text-center">Manteniendo la línea de defensa fuerte</h2>
        </div>
      </div>

      <div class="mx-auto w-full pt-10 max-w-sm lg:w-96">
        <router-view />
      </div>
    </div>

    <div
      class="hidden bg-CerberusLightGray-default object-center w-screen lg:block"
    >
      <!-- <div class="fixed top-3 right-4 flex items-center">

      </div> -->
      <div class="w-full h-full flex justify-center object-center items-center">
        <img
          src="../assets/Banner2.jpg"
          alt=""
          draggable="false"
          class="transition duration-200 ease-in-out max-h-screen w-full    object-left object-cover"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
