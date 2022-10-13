import { defineStore } from 'pinia';
import { ref } from 'vue';
import ingredients from '/src/data/contents/ingredients'

export const ingredientStore = defineStore('ingredients', () => {
  const ingredientArray = ref(ingredients)
  return { ingredientArray };
})
