<template>
  <td v-for="(option, key) of datas">
    <a href="#" v-if="key == 'id'">{{ option }}</a>
    <span v-else>{{ option }}</span>
  </td>
</template>

<script>
export default {
  name: "col",
  props: ["datas"],
};
</script>
