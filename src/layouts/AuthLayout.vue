<template>
  <div class="flex flex-1 min-h-screen">
    <div
      class="flex flex-1 bg-white flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24"
    >
      <div class="w-full mx-auto">
        <div class=" flex justify-center">
          <img
            class="w-20 md:w-20 lg:w-20 xl:w-20 2xl:w-20"
            src="..//assets/CerberusIcon.svg"
          />
        </div>
        <div>
          <h1 class="text-xl font-bold text-center text-CerberusDarkBlue-default">CERBERUS</h1>
        </div>
        <div>
          <h2 class="text-CerberusLightBlue-default leading-6 text-base pt-6 font-medium text-center">Autenticación requerida</h2>
          <h2 class="text-CerberusLightBlue-default text-base   font-medium text-center">Manteniendo la línea de defensa fuerte</h2>
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
          src="https://res.cloudinary.com/di3jir3qe/image/upload/v1695907457/backgrounds/login_picture_jzvhta.webp"
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
