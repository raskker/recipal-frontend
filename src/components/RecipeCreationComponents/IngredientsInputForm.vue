<script lang="ts">
import { stringifyExpression } from "@vue/compiler-core";
import { defineComponent } from "vue";
import Ingredient from "../../types/Ingredient";

export default defineComponent({
  name: "IngredientsInputForm",
  data() {
    return {
      ingredients: [{ name: "", amount: 0 }] as Ingredient[],
      numberRules: [
        (v: any) =>
          (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "Must be a number",
      ],
      requiredRules: [(v: any) => !!v || "Name is required"],
    };
  },

  methods: {
    add() {
      this.ingredients.push({
        name: "",
        amount: 0,
      });
    },

    remove(index: number) {
      this.ingredients.splice(index, 1);
    },
  },
});
</script>

<template>
  <div v-for="(ingredient, i) in ingredients" :key="i" class="text-fields-row">
    <v-text-field
      class="mr-5"
      label="Zutat"
      v-model="ingredient.name"
    ></v-text-field>

    <v-text-field
      :rules="numberRules"
      label="Anzahl"
      v-model="ingredient.amount"
    ></v-text-field>

    <v-btn
      variant="text"
      icon="mdi-delete"
      @click="remove(i)"
      class="error"
    ></v-btn>
  </div>
  <div class="plus-button">
    <v-btn @click="add" class="primary">
      <v-icon class="mr-2" icon="mdi-plus"></v-icon>
      Zutat hinzufügen
    </v-btn>
  </div>
</template>

<style scoped>
.text-fields-row {
  display: flex;
}
.plus-button {
  display: flex;
  justify-content: flex-end;
}
</style>
