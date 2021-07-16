<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <ion-avatar>
                  <img src="../image/user.svg"/>
                </ion-avatar>
              </ion-col>
              <ion-col>
                <h3>Fajar Nurbayu</h3>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="mail"/>
              </ion-col>
              <ion-col size="4">
                <ion-label>Email</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>contoh@gmail.com</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1">
                <ion-icon :icon="phonePortraitOutline"/>
              </ion-col>
              <ion-col size="4">
                <ion-label>Nomor HP</ion-label>
              </ion-col>
              <ion-col>
                <ion-label>083137612378</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-button color="danger" size="default" slot="end">
          <ion-icon :icon="logOut"/>
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
} from '@ionic/vue';
import { mail, phonePortraitOutline, logOut } from "ionicons/icons";

export default  {
  name: 'profile',
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
      logOut
    };
  },
}
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

</style>