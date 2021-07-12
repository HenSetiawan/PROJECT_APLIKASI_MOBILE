<template>
  <ion-page>
    <ion-router-outlet> </ion-router-outlet>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="home" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="people" />
          <ion-label>Relawan</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="newspaper" />
          <ion-label>Artikel</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="calendar" />
          <ion-label>Agenda</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { home, people, newspaper, calendar } from "ionicons/icons";

export default {
  name: "Tabs",
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  data() {
    return {
      home,
      people,
      newspaper,
      calendar
    };
  },
};
</script>
