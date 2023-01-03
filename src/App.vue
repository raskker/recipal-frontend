<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecipeCreationForm",
  data() {
    return {
      drawer: false,
    };
  },
});
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          class="hidden-sm-and-down"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Recipal</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          prepend-icon="mdi-silverware-fork-knife"
          title="Rezepte"
          value="recipes"
          :to="{ path: '/' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-heart"
          title="Favorites"
          value="favorites"
          :to="{ name: 'favorites' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-basket"
          title="Einkaufsliste"
          value="shopping-list"
          :to="{ name: 'shopping-list' }"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Profil"
          value="profile"
          :to="{ name: 'profile' }"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-bottom-navigation class="hidden-md-and-up" :elevation="3" grow>
      <v-btn value="recent" :to="{ path: '/' }">
        <v-icon>mdi-silverware-fork-knife</v-icon>

        Rezepte
      </v-btn>

      <v-btn value="favorites" :to="{ name: 'favorites' }">
        <v-icon icon="mdi-heart" />

        Favorites
      </v-btn>

      <v-btn value="shopping-list" :to="{ name: 'shopping-list' }">
        <v-icon>mdi-basket</v-icon>

        Einkauf
      </v-btn>

      <v-btn value="profile" :to="{ name: 'profile' }">
        <v-icon>mdi-account</v-icon>

        Profil
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style scoped></style>
