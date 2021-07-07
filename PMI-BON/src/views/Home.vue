<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-slides pager="true">
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    Keep close to Nature's heart
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                  </ion-card-header>

                  <ion-card-content>
                    Keep close to Nature's heart
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
        <ion-slide>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                  </ion-card-header>

                  <ion-card-content>
                    Keep close to Nature's heart
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>
                <ion-card>
                  <ion-card-header>
                    <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                    <ion-card-title>Card Title</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    Keep close to Nature's heart
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-slide>
      </ion-slides>

      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-text color="dark">
              <h5>Current Blogs</h5>
            </ion-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-list>
        <ion-item href="/tabs/tab3">
          <ion-thumbnail item-start>
            <img src="https://vuejs.org/images/logo.svg">
          </ion-thumbnail>      
          <ion-label>
            <h2>Blogs Title</h2>
            <p>Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies</p>
          </ion-label>
        </ion-item>
        <ion-item href="/tabs/tab3">
          <ion-thumbnail item-start>
            <img src="https://vuejs.org/images/logo.svg">
          </ion-thumbnail>
          <ion-label>
            <h3>Blogs Title</h3>
            <p>Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies</p>
          </ion-label>
        </ion-item>
        <ion-item href="/tabs/tab3">
          <ion-thumbnail item-start>
            <img src="https://vuejs.org/images/logo.svg">
          </ion-thumbnail>      
          <ion-label>
            <h2>Blogs Title</h2>
            <p>Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies</p>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-grid class="container">
        <ion-row class="thead">
          <ion-col>Kategori</ion-col>
          <ion-col>A</ion-col>
          <ion-col>B</ion-col>
          <ion-col>AB</ion-col>
          <ion-col>O</ion-col>
        </ion-row>
        <ion-row v-for="blood in bloodData" :key="blood.id">
          <ion-col>{{ blood.kategori }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_A }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_B }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_AB }}</ion-col>
          <ion-col>{{ blood.jumlah_gol_O }}</ion-col>
        </ion-row>
      </ion-grid>
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
  IonSlides,
  IonSlide,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonText,
  IonList,
  IonItem,
} from "@ionic/vue";

export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonSlides,
    IonSlide,
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCardHeader,
    IonText,
    IonList,
    IonItem,
  },
  data() {
    return {
      bloodData: [],
    };
  },
  created() {
    const API = process.env.VUE_APP_API;
    fetch(`${API}/v1/bloods`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.bloodData = data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container {
  width: 90% !important;
  margin: auto !important;
}
.thead {
  background-color: rgb(206, 197, 197) !important;
  margin: 15px 0 15px 0 !important;
}
/* img {
  width: 150px !important;
  height: 150px !important;
  margin: auto !important;
  display: block;
} */

h5 {
  margin-left: 28px !important;
}

ion-list {
  margin: 20px;
  border-radius: 5px;
}

ion-list ion-label {
  padding: 10px;
}
</style>
