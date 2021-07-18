<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <ion-avatar>
                  <img src="../image/user.svg" />
                </ion-avatar>
              </ion-col>
              <ion-col>
                <h3 class="name">{{ name }}</h3>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="mail" />
              </ion-col>
              <ion-col size="4">
                <ion-label>Email</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ email }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="phonePortraitOutline" />
              </ion-col>
              <ion-col size="4">
                <ion-label>Nomor HP</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>{{ phone }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-button @click="logOutUser" color="danger" size="small">
          <ion-icon :icon="logOut" />
          <p>Keluar</p>
        </ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonButton,
  IonAvatar,
} from "@ionic/vue";
import { mail, phonePortraitOutline, logOut } from "ionicons/icons";
import { Storage } from "@ionic/storage";

export default {
  name: "profile",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonLabel,
    IonButton,
    IonAvatar,
  },
  data() {
    return {
      mail,
      phonePortraitOutline,
      logOut,
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async getUserData() {
      const store = new Storage();
      await store.create();
      const token = await store.get("accessToken");

      const API = process.env.VUE_APP_API;
      const response = await fetch(`${API}/v1/user/`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer  ${token}`,
        },
      });

      const result = await response.json();
      return result;
    },
    async logOutUser() {
      const store = new Storage();
      await store.create();
      await store.remove("accessToken");
      this.$router.push("/tabs/home");
    },
  },
  created() {
    this.getUserData().then((response) => {
      this.name = response.data.username;
      this.email = response.data.email;
      this.phone = response.data.no_hp;
    });
  },
};
</script>

<style scoped>
ion-list {
  padding: 20px 0px 268px 0px;
}

ion-avatar {
  height: 72px;
  width: 72px;
  border: 1px solid white;
  margin: 10px 0px;
}

ion-grid {
  padding: 20px;
}

ion-col {
  margin: auto;
}

ion-button {
  margin-left: 40px;
}

p {
  margin-left: 10px;
}
.name {
  text-transform: uppercase;
}
</style>
