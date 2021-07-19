<template>
  <ion-page>
    <ion-router-outlet> </ion-router-outlet>
    <ion-tabs>
      <ion-tab-bar>
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Beranda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/voluntter">
          <ion-icon :icon="people" />
          <ion-label>Relawan</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/blogs">
          <ion-icon :icon="newspaper" />
          <ion-label>Artikel</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/events">
          <ion-icon :icon="calendar" />
          <ion-label>Agenda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/login">
          <ion-icon :icon="person" />
          <ion-label>Akun</ion-label>
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
import {
  home,
  person,
  people,
  logIn,
  newspaper,
  calendar,
} from "ionicons/icons";
import { Storage } from "@ionic/storage";

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
      person,
      people,
      logIn,
      newspaper,
      calendar,
    };
  },
  methods: {
    async isLogin() {
      const store = new Storage();
      await store.create();
      const token = await store.get("accessToken");
      return token;
    },
  },
};
</script>
<style scoped></style>
