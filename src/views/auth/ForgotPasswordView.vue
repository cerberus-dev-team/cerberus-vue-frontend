<template>
  <form
    @submit.prevent="submitForm"
    ref="loginForm"
    method="post"
    class="space-y-6"
  >
    <div>
      <p class="text-base text-gray-400">
        Si tienes una cuenta con Cerberus, se te enviara un mensaje a tu bandeja
        de correo para que puedas recuperar tu contraseña
      </p>
    </div>
    <div>
      <InputField
        label="Correo electronico"
        id="email"
        type="email"
        placeholder="Ingrese su correo electronico"
        v-model="email"
        :required="true"
      ></InputField>
    </div>
    <div class="pt-3">
      <Button class="text-white">Recuperar contraseña</Button>
    </div>
  </form>
  <div class="flex pt-4 tex text-center">
    <p class="text-gray-600">
      ¿Tienes problemas intentando recuperar tu contraseña?
      <a
        target="_blank"
        href="#"
        class="text-CerberusDarkBlue-default hover:text-CerberusLightBlue-default hover:underline"
        >Contacta con nuestro soporte</a
      >
    </p>
  </div>
</template>

<script>
import InputField from "../../components/common/InputField.vue";
import Button from "../../components/common/Button.vue";

export default {
  components: {
    InputField,
    Button,
  },
};
</script>

<style></style>
