<script lang="ts">
import { defineComponent } from "vue";
import Recipe from "../types/Recipe";
import EDifficulty from "../types/enums/EDifficulty";

export default defineComponent({
  name: "RecipeCreationForm",
  data() {
    return {
      valid: true,
      currentRecipe: {} as Recipe,
      step: 1,
      recipeName: "",
      caloriesValue: 0,
      recipeDesc: "",
      portionValue: 0,
      cookingTime: 0,
      workTime: 0,
      difficulty: { diff: EDifficulty.Easy, name: EDifficulty.Easy.toString() },
      difficulties: [
        { diff: EDifficulty.Easy, name: EDifficulty.Easy.toString() },
        { diff: EDifficulty.Normal, name: EDifficulty.Normal.toString() },
        { diff: EDifficulty.Hard, name: EDifficulty.Hard.toString() },
      ],
      recipeNameRules: [(v: any) => !!v || "Name is required"],
      numberRules: [
        (v: any) =>
          (!isNaN(parseFloat(v)) && !isNaN(v - 0)) || "Must be a number",
      ],
    };
  },
  methods: {
    async validate() {
      const { valid } = await (this.$refs.form as any).validate();

      if (!valid) this.step--;
    },
    next() {
      this.validate();
      this.step++;
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Grundlegende Rezeptdaten";
        case 2:
          return "Zutaten & Zubereitung";
        default:
          return "Rezept erstellt";
      }
    },
  },
});
</script>

<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar color="primary" size="24" v-text="step"></v-avatar>
    </v-card-title>

    <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
              :rules="recipeNameRules"
              v-model="recipeName"
              required
              label="Rezeptname"
              placeholder="Spaghetti Carbonara"
            ></v-text-field>
            <v-text-field
              v-model="portionValue"
              label="Portionen"
              :rules="numberRules"
            ></v-text-field>
            <v-text-field
              v-model="caloriesValue"
              label="Kalorien"
              suffix="kcal"
              :rules="numberRules"
            ></v-text-field>
            <v-text-field
              v-model="cookingTime"
              label="Kochzeit/Backzeit"
              suffix="Minuten"
              :rules="numberRules"
            ></v-text-field>
            <v-text-field
              v-model="workTime"
              label="Gesamtzeit"
              suffix="Minuten"
              :rules="numberRules"
            ></v-text-field>
            <v-select
              v-model="difficulty"
              :items="difficulties"
              label="Schwierigkeit"
              item-title="name"
              item-value="diff"
            ></v-select>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="2">
          <v-card-text>
            <v-textarea
              name="recipeDesc"
              variant="filled"
              label="Zubereitungsbeschreibung"
              auto-grow
              v-model="recipeDesc"
            ></v-textarea>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center">
            <v-img
              class="mb-4"
              contain
              height="128"
              src="https://cdn.vuetifyjs.com/images/logos/v.svg"
            ></v-img>
            <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
            <span class="text-caption text-grey">Thanks for signing up!</span>
          </div>
        </v-window-item>
      </v-window>

      <v-card-actions class="align-end mt-16">
        <v-btn bottom v-if="step > 1" variant="text" @click="step--">
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn v-if="step < 3" color="primary" variant="flat" @click="next">
          Next
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>
