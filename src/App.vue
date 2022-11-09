<template>
  <rows v-bind:table_items="table_items" />
</template>

<script>
import rows from "@/components/rows";
export default {
  name: "App",
  data() {
    return {
      table_items: [
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Alex",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Alena",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 2323,
          name: "Mark",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
        {
          id: 24455,
          name: "Lana",
          article: "2323355",
          category: "new",
          weith: "250",
          cost: "1000",
          quality: "A",
          date_add: "08.11.2022",
        },
      ],
    };
  },
  components: {
    rows,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
