<template>
  <button
    class="flex w-full justify-center rounded-md transition ease-in-out duration-500 transform bg-CerberusLightBlue-default px-3 py-1.5 text-base font-medium leading-6 shadow-sm hover:bg-CerberusDarkBlue-default focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 pt-2 focus-visible:outline-indigo-600"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    label: String,
    primary: Boolean,
    type: String,
  },
};
</script>
