<script lang="ts">
import { ref } from "vue";
import { defineComponent } from "vue";
import IngredientService from "../services/IngredientService";
import Ingredient from "../types/Ingredient";
import ResponseData from "../types/ResponseData";

export default defineComponent({
  name: "Ingredient-list",
  data() {
    return {
      index: 0,
      ingredients: [] as Ingredient[],
      currentIngredient: {} as Ingredient,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveIngredients() {
      IngredientService.getAll()
        .then((response: ResponseData) => {
          this.ingredients = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },

    newIngredient() {
      this.retrieveIngredients();

      let data = {
        name: "Test" + this.index,
        amount: this.index,
      };
      this.index++;

      IngredientService.create(data)
        .then((response: ResponseData) => {
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveIngredients();
  },
});
</script>

<template>
  <div class="card">
    <v-list lines="one">
      <v-list-item
        v-for="item in ingredients"
        :key="item.name"
        :title="item.name"
        :subtitle="item.amount"
      ></v-list-item>
    </v-list>
    <v-btn @click="newIngredient" rounded="lg" color="primary">
      Rounded Button
    </v-btn>
  </div>
</template>

<style scoped></style>
