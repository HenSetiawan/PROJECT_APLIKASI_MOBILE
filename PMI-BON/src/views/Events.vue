<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="new-background-color">
        <ion-title>Agenda</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item v-for="event in eventsData" :key="event.id">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-label>
                  <h2>{{ event.judul_agenda }}</h2></ion-label
                >
              </ion-col>
              <ion-col size="4">
                <ion-label>
                  <h2 class="waktu">{{ event.waktu }}</h2></ion-label
                >
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <p class="desc">{{ event.deskripsi }}</p>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="navigateCircle"></ion-icon>
              </ion-col>
              <ion-col>
                <ion-label>
                  <p>{{ event.lokasi }}</p>
                </ion-label>
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
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from "@ionic/vue";
import { navigateCircle } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },

  data() {
    return {
      eventsData: [],
      navigateCircle,
    };
  },
  created() {
    this.getEventsData();
  },
  methods: {
    getEventsData() {
      const API = process.env.VUE_APP_API;
      fetch(`${API}/v1/events`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.eventsData = data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
ion-list {
  border-radius: 5px;
}
ion-title {
  color: #ffffff;
  font-family: sans-serif;
  font-weight: bold;
}
.waktu {
  margin-right: 8px !important;
}
p {
  color: #666 !important;
  font-size: 12px;
}
.desc {
  margin-right: 8px !important;
  color: #666 !important;
}
.new-background-color {
  --background: #ce0013;
}
</style>
