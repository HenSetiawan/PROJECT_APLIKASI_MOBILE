<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Agenda</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item href="/tabs/tab3" v-for="event in eventsData" :key="event.id">
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2>{{ event.judul_agenda }}</h2>
                </ion-col>
                <ion-col size="1.3">
                  <h2 class="waktu">{{ event.waktu }}</h2>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-label>
                  <p class="desc">{{ event.deskripsi }}</p>
                </ion-label>
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
          </ion-label>
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
.waktu {
  text-align: end;
}
p {
  margin-left: 10px;
}
ion-row {
  margin: 5px;
}
.desc {
  width: 100% !important;
  height: 100% !important;
}
</style>
