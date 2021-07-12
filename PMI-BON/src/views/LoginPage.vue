<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <img src="../image/blood.jpg" alt="" />
      <ion-grid>
        <ion-row>
          <p>Username</p>
        </ion-row>
        <ion-row class="input-login">
          <ion-input placeholder="Email" type="text"></ion-input>
          <ion-icon :icon="person" />
        </ion-row>
        <ion-row>
          <p>Username</p>
        </ion-row>
        <ion-row class="input-login">
          <ion-input placeholder="Password" type="password"></ion-input>
          <ion-icon :icon="key" />
        </ion-row>
        <ion-row>
          <ion-button color="danger" class="btn-login">Login</ion-button>
        </ion-row>
        <ion-row>
          <ion-button color="primary" class="btn-login" href="/tabs/register"
            >Register</ion-button
          >
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonInput,
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
} from "@ionic/vue";

import { person, key } from "ionicons/icons";
export default {
  name: "loginPage",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonInput,
    IonGrid,
    IonRow,
    IonIcon,
    IonButton,
  },
  data() {
    return {
      person,
      key,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 12px !important;
  margin-left: 21px;
}
.input-login {
  border-bottom: 1px solid rgb(109, 106, 106);
  margin: auto !important;
  width: 90% !important;
}
.btn-login {
  width: 90% !important;
  margin: 8px auto;
}
img {
  height: 40%;
  margin: auto;
  display: block;
}
</style>
