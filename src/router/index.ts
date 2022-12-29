import { createRouter, createWebHashHistory } from "vue-router";

import RecipesView from '../views/RecipesView.vue';
import FavoritesView from "../views/FavoritesView.vue";
import ShoppingListView from "../views/ShoppingListView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "recipes",
    component: RecipesView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/shopping-list",
    name: "shopping-list",
    component: ShoppingListView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
