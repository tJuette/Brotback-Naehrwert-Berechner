<template>
  <ion-app>
    <ion-router-outlet />
    <FooterNavBar />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import FooterNavBar from '/src/components/molecules/FooterNavBar.vue';

defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>
