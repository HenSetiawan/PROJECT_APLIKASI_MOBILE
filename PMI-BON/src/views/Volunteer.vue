<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item href="/tabs/tab3" v-for="volunteer in volunteersData" :key="volunteer.id">
          <ion-avatar>
            <img src="../image/user.svg"/>
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col><h2>{{ volunteer.username }}</h2></ion-col>
                <ion-col><h2 class="gol">{{ volunteer.gol_darah }}</h2></ion-col>
              </ion-row>
            </ion-grid>
            <p>{{ volunteer.email }}</p>
            <p>{{ volunteer.alamat }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'Tab2',
  components: { 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage 
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
          this.volunteersData = data.data;
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