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
          <ion-card>
            <img src="https://vuejs.org/images/logo.svg" />
            <ion-card-header>
              <ion-card-subtitle>Destination</ion-card-subtitle>
              <ion-card-title>Madison, WI</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Founded in 1829 on an isthmus between Lake Monona and Lake
              Mendota, Madison was named the capital of the Wisconsin Territory
              in 1836.
            </ion-card-content>
          </ion-card>
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
};
</script>

<style scoped>
img {
  width: 150px !important;
  height: 150px !important;
  margin: auto !important;
  display: block;
}
</style>
