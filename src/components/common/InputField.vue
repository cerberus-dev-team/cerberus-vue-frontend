<template>
  <div>
    <label
      :for="name"
      class="block text-base font-medium leading-6 text-gray-900"
      >{{ label }}</label
    >
    <div class="mt-1">
      <input
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        v-model="internalValue"
        :required="required"
        @input="$emit('update:modelValue', internalValue)"
        class="w-full block py-2 rounded-md border p-4 placeholder:text-gray-400 focus:ring-CerberusLightBlue-default placeholder-gray-600 text-base sm:text-base sm:leading-6"
        :readonly="readOnly"
        :class="{ 'bg-gray-100 text-gray-500 cursor-not-allowed': readOnly }"
        :maxlength="maxlength"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "label",
    "name",
    "type",
    "value",
    "required",
    "placeholder",
    "readOnly",
    "maxlength",
  ],
  data() {
    return {
      internalValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
