<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Blogs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <h4 class="judul">Manfaat dan Efek Samping Donor Darah</h4>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-text>
              <p class="penulis">Nama Penulis</p>
            </ion-text>
          </ion-col>
          <ion-col>
            <ion-text>
              <p class="tanggal">11/04/2021</p>
            </ion-text>
          </ion-col>
        </ion-row>
        <ion-row>
          <img src="../image/blood.jpg" class="img"/>
        </ion-row>
        <ion-row>
          <ion-text>
            <p class="content">Kamu mungkin belum pernah membayangkan sebelumnya bahwa beberapa tetes darah yang kamu sumbangkan bisa menjadi sangat berarti bagi orang lain. Menurut Palang Merah Amerika, satu sumbangan darah dapat menyelamatkan sebanyak tiga nyawa dan setidaknya ada satu orang di Amerika Serikat yang membutuhkan darah setiap dua detik.
            
            Manfaat donor darah ternyata tidak hanya menguntungkan bagi si penerima saja lho, tetapi juga bagi para pendonor. Berikut manfaat donor darah untuk kesehatan.</p>
          </ion-text>
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
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/vue';


export default  {
  name: 'Tab3',
  components: {
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
  },
}
</script>
<style scoped>
.img {
  height: 240px !important;
  width: 100% !important;
  object-fit: cover;
}
.penulis {
  margin: 10px 20px 20px 20px;
}
.tanggal {
  margin: 10px 20px 20px 20px;
  font-style: italic;
  text-align: end;
}
.judul {
  text-transform: uppercase;
  margin: 20px 20px 10px 20px;
}
.content {
  margin: 20px 20px 10px 20px;
  line-height: 150%;
  text-align: justify;
  /* font-weight: inherit;
  font-stretch: semi-expanded; */
}
</style>