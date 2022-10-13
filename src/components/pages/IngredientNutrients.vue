<template>
  <IonPage>
    <IonContent>
      <div class="page-layout p-4">
        <div class="grid grid-layout p-2" v-for="itm in ingredients" :key="itm.name">
          <div class="text-4xl">{{ itm.name }}</div>
          <input class="text-md pl-2" :value="itm.gewicht"/>
          <div class="text-xl text-center pl-2">g</div>
        </div>
      </div>
      <FooterNavBar class="footer-nav-bar" />
    </IonContent>
  </IonPage>
</template>

<script  lang="ts" setup>
  import { ref } from 'vue';
  import { IonPage, IonContent } from '@ionic/vue';
  import FooterNavBar from '/src/components/molecules/FooterNavBar.vue';
  import { ingredientStore } from '/src/stores/ingredients.js';
  const store = ingredientStore();
  const ingredients = ref(store.ingredientArray)
</script>

<style scoped>
  .grid-layout {
    grid-template-columns: 70% 20% 10%;
    grid-template-rows: auto;
  }
</style>
