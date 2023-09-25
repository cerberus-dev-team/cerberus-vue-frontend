<template>
    <form
      @submit.prevent="submitForm"
      ref="loginForm"
      method="post"
      class="space-y-6"
    >
      <InputField
        label="Ingresa tu nueva contraseña"
        id="password"
        type="password"
        placeholder="•••••••••"
        v-model="password"
        :required="true"
      />
  
      <div>
        <InputField
          label="Confirma tu contraseña"
          id="ConfirmPassword"
          type="password"
          placeholder="•••••••••"
          v-model="ConfirmPassword"
          :required="true"
        />
      </div>
      <div class="pt-3">
        <Button class="text-white ">Establecer contraseña</Button>
      </div>
    </form>
    <div class=" pt-4">
      <a>
        <p class="text-CerberusLightBlue-default text-center">
          Contacta a soporte técnico
        </p>
      </a>
    </div>
  </template>

<script>
import InputField from "../../components/common/InputField.vue";
import Button from "../../components/common/Button.vue";

export default {
  components: {
    InputField,
    Button
  },
};
</script>

