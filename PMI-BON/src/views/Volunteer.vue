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
        <ion-item href="/tabs/tab3">
          <ion-avatar>
            <img src="../../public/assets/icon/user.svg"/>
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col><h2>Nama Relawan</h2></ion-col>
                <ion-col><h2 class="gol">A</h2></ion-col>
              </ion-row>
            </ion-grid>
            <p>relawan001@gmail.com</p>
            <p>Jl.Malioboro no 23 Bondowoso</p>
          </ion-label>
        </ion-item>
        <ion-item href="/tabs/tab3">
          <ion-avatar>
            <img src="../../public/assets/icon/user.svg"/>
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col><h2>Nama Relawan</h2></ion-col>
                <ion-col><h2 class="gol">A</h2></ion-col>
              </ion-row>
            </ion-grid>
            <p>relawan001@gmail.com</p>
            <p>Jl.Malioboro no 23 Bondowoso</p>
          </ion-label>
        </ion-item>
        <ion-item href="/tabs/tab3">
          <ion-avatar>
            <img src="../../public/assets/icon/user.svg"/>
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col><h2>Nama Relawan</h2></ion-col>
                <ion-col><h2 class="gol">A</h2></ion-col>
              </ion-row>
            </ion-grid>
            <p>relawan001@gmail.com</p>
            <p>Jl.Malioboro no 23 Bondowoso</p>
          </ion-label>
        </ion-item>
        <ion-item href="/tabs/tab3">
          <ion-avatar>
            <img src="../../public/assets/icon/user.svg"/>
          </ion-avatar>
          <ion-label>
            <ion-grid>
              <ion-row>
                <ion-col><h2>Nama Relawan</h2></ion-col>
                <ion-col><h2 class="gol">A</h2></ion-col>
              </ion-row>
            </ion-grid>
            <p>relawan001@gmail.com</p>
            <p>Jl.Malioboro no 23 Bondowoso</p>
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
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
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