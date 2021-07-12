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
          <ion-label>Voluntter</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/login">
          <ion-icon v-if="isUserLogin" :icon="person" />
           <ion-icon v-else :icon="logIn" />
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
  ellipse,
  square,
  triangle,
  home,
  person,
  people,
  logIn
} from "ionicons/icons";

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
      ellipse,
      square,
      triangle,
      home,
      person,
      people,
      logIn,
      isUserLogin:false
    };
  },
};
</script>
