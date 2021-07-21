<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Debug</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <button @click="getData">Tampilkan token</button>
      <button @click="sendDataApi">Kirim API</button>
      <h1>{{ token }}</h1>
      <h2>{{ data }}</h2>
    </ion-content>
  </ion-page>
</template>

<script>
import { Storage } from "@ionic/storage";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { Http } from "@capacitor-community/http";

export default {
  name: "Tab3",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  data() {
    return {
      token: "",
      data: "",
    };
  },
  created() {
    this.saveData();
  },
  methods: {
    async saveData() {
      try {
        const store = new Storage();
        await store.create();
        await store.set(
          "exampleToken",
          "reht943tj344m3fknreiooegklrmkgvklerkgler"
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getData() {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("exampleToken");
        this.token = token;
      } catch (error) {
        console.log(error);
      }
    },
    async sendDataApi() {
      const options = {
        url: "https://jsonplaceholder.typicode.com/posts",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: { title: "foo", body: "bar", userId: 1 },
      };

      const response = await Http.request({ ...options, method: "POST" });
      this.data = response.data;
    },
  },
};
</script>

<style scoped>
button {
  display: block;
  margin: auto;
  background-color: red;
  width: 90px;
  height: 10%;
  color: white;
  margin-top: 10px;
}

h1 {
  text-align: center;
}
</style>
