<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <img src="../image/blood.jpg" alt="" />
      <form action="">
        <ion-grid>
          <ion-row>
            <p>Username</p>
          </ion-row>
          <ion-row class="input-login">
            <ion-input
              placeholder="Username"
              type="text"
              min="5"
              v-model="form.username"
            ></ion-input>
            <ion-icon :icon="person" />
          </ion-row>
          <ion-row>
            <p>Email</p>
          </ion-row>
          <ion-row class="input-login">
            <ion-input
              placeholder="Email"
              type="email"
              v-model="form.email"
            ></ion-input>
            <ion-icon :icon="mail" />
          </ion-row>
          <ion-row>
            <p>No Telephone</p>
          </ion-row>
          <ion-row class="input-login">
            <ion-input
              placeholder="+62"
              type="text"
              v-model="form.no_hp"
            ></ion-input>
            <ion-icon :icon="phonePortraitOutline" />
          </ion-row>
          <ion-row>
            <p>Password</p>
          </ion-row>
          <ion-row class="input-login">
            <ion-input
              placeholder="Password"
              type="password"
              v-model="form.password"
            ></ion-input>
            <ion-icon :icon="key" />
          </ion-row>
          <ion-row>
            <p>Konfirmasi Password</p>
          </ion-row>
          <ion-row class="input-login">
            <ion-input
              placeholder="Password"
              type="password"
              v-model="form.confirm_password"
            ></ion-input>
            <ion-icon :icon="key" />
          </ion-row>
          <ion-row>
            <ion-button color="danger" class="btn-login" @click="registerUser"
              >Register</ion-button
            >
          </ion-row>
        </ion-grid>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
} from "@ionic/vue";
import { person, key,mail,phonePortraitOutline } from "ionicons/icons";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonIcon,
    IonButton,
    IonInput,
  },
  data() {
    return {
      person,
      key,
      mail,
      phonePortraitOutline,
      form: {
        username: "",
        email: "",
        no_hp: "",
        password: "",
        confirm_password: "",
      },
      API: process.env.VUE_APP_API,
    };
  },
  methods: {
    registerUser() {
      const data = this.form;
      console.log(data);
      fetch(`${this.API}/v1/auth/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result);
          this.$router.push("/tabs/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
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
  height: 30%;
  margin: auto;
  display: block;
}
</style>
