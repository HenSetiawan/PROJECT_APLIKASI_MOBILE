<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Daftar Relawan</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item
          v-for="volunteer in volunteersData"
          :key="volunteer.id"
          :href="volunteer.urlProfile"
        >
          <ion-avatar>
            <img src="../image/user.svg" />
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <h2>{{ volunteer.volunteer.username }}</h2>
                </ion-col>
                <ion-col>
                  <h2 class="gol">{{ volunteer.volunteer.gol_darah }}</h2>
                </ion-col>
              </ion-row>
            </ion-grid>
            <p>{{ volunteer.volunteer.alamat }}</p>
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
  IonLabel,
  IonRow,
  IonGrid,
  IonCol,
  IonAvatar,
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  name: "Tab2",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonLabel,
    IonRow,
    IonGrid,
    IonCol,
    IonAvatar,
    IonList,
    IonItem,
  },
  data() {
    return {
      volunteersData: [],
    };
  },
  created() {
    this.getVolunteersData();
  },
  methods: {
    getVolunteersData() {
      const API = process.env.VUE_APP_API;
      fetch(`${API}/v1/volunteers`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let temp = [];
          data.data.forEach((element) => {
            const tempData = {
              volunteer: element,
              urlProfile: `/tabs/details-volunteer/${element.id}`,
            };
            temp.push(tempData);
          });

          this.volunteersData = temp;
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
  margin: 20px;
  border-radius: 5px;
}
.gol {
  text-align: end;
}
p {
  margin-left: 10px;
}
</style>
