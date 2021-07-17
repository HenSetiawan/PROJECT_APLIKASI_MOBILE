<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detail Relawan</ion-title>
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
                <h3 class="name">Nama Relawan</h3>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="water" />
              </ion-col>
              <ion-col size="4">
                <ion-text>Gol. Darah</ion-text>
              </ion-col>
              <ion-col>
                <ion-text>A</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="calendar" />
              </ion-col>
              <ion-col size="4">
                <ion-text>Tanggal Lahir</ion-text>
              </ion-col>
              <ion-col>
                <ion-text>23-01-1999</ion-text>
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
                <ion-text>Email</ion-text>
              </ion-col>
              <ion-col>
                <ion-text>relawan123@gmail.com</ion-text>
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
                <ion-text>Nomor HP</ion-text>
              </ion-col>
              <ion-col>
                <ion-text>083654435555</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row class="alamat">
              <ion-col size="1">
                <ion-icon :icon="map" />
              </ion-col>
              <ion-col size="4">
                <ion-text>Alamat</ion-text>
              </ion-col>
              <ion-col>
                <ion-text>Jl. Malioboro no 23 Bondowoso</ion-text>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
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
  IonAvatar,
  IonText,
} from "@ionic/vue";
import { mail, phonePortraitOutline, calendar, water, map } from "ionicons/icons";

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
    IonAvatar,
    IonText,
  },
  data() {
    return {
      mail,
      phonePortraitOutline,
      calendar,
      water,
      map
    };
  },
};
</script>

<style scoped>
ion-list {
  padding: 20px 0px 120px 0px;
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
.name{
  text-transform: uppercase;
}
.alamat {

}
</style>
