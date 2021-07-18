<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profil Saya</ion-title>
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
                <h3 class="name">{{ volunteerData.username }}</h3>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-icon :icon="water" />
                <ion-text>Gol. Darah :</ion-text>
              </ion-col>
              <ion-col size="6">
                <ion-text>{{ volunteerData.gol_darah }}</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-icon :icon="calendar" />
                <ion-text>Tanggal Lahir :</ion-text>
              </ion-col>
              <ion-col size="6">
                <ion-text>{{ volunteerData.tanggal_lahir }}</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-icon :icon="mail" />
                <ion-text>Email :</ion-text>
              </ion-col>
              <ion-col size="6">
                <ion-text>{{ volunteerData.email }}</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="6">
                <ion-icon :icon="phonePortraitOutline" />
                <ion-text>Nomor HP</ion-text>
              </ion-col>
              <ion-col size="6">
                <ion-text>{{ volunteerData.no_hp }}</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row class="alamat">
              <ion-col size="6">
                <ion-icon :icon="map" />
                <ion-text>Alamat</ion-text>
              </ion-col>
              <ion-col size="6">
                <ion-text>{{ volunteerData.alamat }}</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
      <ion-button @click="logOutVolunteer" color="danger" size="small">
        <ion-icon :icon="logOut" />
        <p>Keluar</p>
      </ion-button>
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
  IonAvatar,
  IonText,
  IonButton,
} from "@ionic/vue";
import {
  mail,
  phonePortraitOutline,
  calendar,
  water,
  map,
  logOut,
} from "ionicons/icons";
import { Storage } from "@ionic/storage";

export default {
  name: "profile",
  components: {
    IonButton,
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
    IonAvatar,
    IonText,
  },
  props: ["id"],
  data() {
    return {
      mail,
      phonePortraitOutline,
      calendar,
      water,
      map,
      logOut,
      volunteerData: "",
    };
  },
  methods: {
    async getVolunteerData() {
      const store = new Storage();
      await store.create();
      const tokenUser = await store.get("accessUser");
      const tokenVolunteer = await store.get("accessVolunteer");
      let token;

      if (tokenUser) {
        token = tokenUser;
      } else if (tokenVolunteer) {
        token = tokenVolunteer;
      }

      if (!token) {
        this.$router.push("/tabs/login/");
      }

      const API = process.env.VUE_APP_API;
      const response = await fetch(`${API}/v1/volunteer`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer  ${token}`,
        },
      });

      if (response.status == 401) {
        this.$router.push("/tabs/login/");
        return;
      }

      const result = await response.json();
      return result;
    },
    async logOutVolunteer() {
      const API = process.env.VUE_APP_API;
      const store = new Storage();
      await store.create();
      const token = await store.get("accessVolunteer");
      const response = await fetch(`${API}/v1/auth/volunteer/logout`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer  ${token}`,
        },
      });

      if (response.status == 200) {
        await store.remove("accessVolunteer");
        this.$router.push("/tabs/home");
      }
    },
  },
  created() {
    this.getVolunteerData().then((response) => {
      this.volunteerData = response.data;
    });
  },
};
</script>

<style scoped>
ion-list {
  padding: 20px 0px 20px 0px;
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
  display: flex !important;
  align-items: center !important;
}

ion-button {
  margin-left: 40px;
}

ion-text,
ion-icon {
  margin: 2px;
  font-size: 15px;
}

p {
  margin-left: 10px;
}
.name {
  text-transform: uppercase;
  font-size: 18px;
}
</style>
