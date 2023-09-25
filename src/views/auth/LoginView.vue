<template>
  <form
    @submit.prevent="submitForm"
    ref="loginForm"
    method="post"
    class="space-y-6"
  >
    <InputField
      label="Correo electronico"
      id="email"
      type="email"
      placeholder="Ingrese su correo electronico"
      v-model="email"
      :required="true"
    />

    <div>
      <InputField
        label="Contraseña"
        id="password"
        type="password"
        placeholder="•••••••••"
        v-model="email"
        :required="true"
      />
    </div>
    <div class="pt-3">
      <Button class="text-white ">Ingresar</Button>
    </div>
  </form>
  <div class="pt-4">
    <a>
      <p class="text-CerberusLightBlue-default text-center">
        ¿Olvidaste tu contraseña?
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
