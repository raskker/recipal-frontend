<script lang="ts">
import { defineComponent } from "vue";
import Recipe from "../types/Recipe";

export default defineComponent({
  name: "RecipeCreationForm",
  data() {
    return {
      currentRecipe: {} as Recipe,
      step: 1,
    };
  },
  methods: {},
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Grundlegende Rezeptdaten";
        case 2:
          return "Zutaten & Beschreibung";
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

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Rezeptname"
            placeholder="Spaghetti Carbonara"
          ></v-text-field>
          <span class="text-caption text-grey-darken-1">
            Der Name des Rezepts
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field label="Password" type="password"></v-text-field>
          <v-text-field label="Confirm Password" type="password"></v-text-field>
          <span class="text-caption text-grey-darken-1">
            Please enter a password for your account
          </span>
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

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn v-if="step > 1" variant="text" @click="step--"> Back </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
