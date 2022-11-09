<template>
  <tr v-for="item of table_items">
    <column v-bind:datas="item" />
  </tr>
</template>

<script>
import column from "@/components/column";
export default {
  props: ["table_items"],
  components: {
    column,
  },
};
</script>
