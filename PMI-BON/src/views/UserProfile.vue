<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="4">
                <ion-avatar>
                  <img src="../image/user.svg" />
                </ion-avatar>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1.3">
                <ion-icon :icon="person" />
              </ion-col>
              <ion-col>
                <ion-label class="ion-label-custom">Name</ion-label>
              </ion-col>
              <ion-col size="10">
                <ion-label class="ion-label name">{{ name }}</ion-label>
                <p style="font-size:12px; padding-right:10px;">
                  This is not your username or pin. This name will be visible to
                  your account
                </p>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1.3">
                <ion-icon :icon="mail" />
              </ion-col>
              <ion-col>
                <ion-label class="ion-label-custom">Email</ion-label>
              </ion-col>
              <ion-col size="10">
                <ion-label class="ion-label">{{ email }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1.3">
                <ion-icon :icon="call" />
              </ion-col>
              <ion-col>
                <ion-label class="ion-label-custom">Phone</ion-label>
              </ion-col>
              <ion-col size="10">
                <ion-label class="ion-label">{{ phone }}</ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1.3">
                <ion-icon :icon="informationCircle" />
              </ion-col>
              <ion-col>
                <ion-label class="ion-label-custom">Update</ion-label>
              </ion-col>
              <ion-col size="10">
                <ion-label class="ion-label"
                  >Update your information here</ion-label
                >
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col size="1.3">
                <ion-icon :icon="logOut" />
              </ion-col>
              <ion-col>
                <a @click="logOutUser">
                  <ion-label class="ion-label-custom"
                    >Log out from this account</ion-label
                  >
                </a>
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
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonLabel,
  IonAvatar,
} from "@ionic/vue";
import { mail, call, person, logOut, informationCircle } from "ionicons/icons";
import { Storage } from "@ionic/storage";

export default {
  name: "profile",
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
    // IonButton,
    IonAvatar,
  },
  data() {
    return {
      mail,
      call,
      person,
      logOut,
      informationCircle,
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    async getUserData() {
      try {
        const store = new Storage();
        await store.create();
        const token = await store.get("accessUser");

        const API = process.env.VUE_APP_API;
        const response = await fetch(`${API}/v1/user`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer  ${token}`,
          },
        });

        if (response.status == 401) {
          this.$router.push("/tabs/login");
          return;
        }

        const result = await response.json();
        this.name = result.data.username;
        this.email = result.data.email;
        this.phone = result.data.no_hp;
        return result;
      } catch (error) {
        console.log(error);
        this.$router.push("/tabs/login");
        return;
      }
    },
    async logOutUser() {
      const API = process.env.VUE_APP_API;
      const store = new Storage();
      await store.create();
      const token = await store.get("accessUser");
      const response = await fetch(`${API}/v1/auth/user/logout`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer  ${token}`,
        },
      });

      if (response.status == 200) {
        await store.remove("accessUser");
        this.name = "";
        this.email = "";
        this.phone = "";
        this.$router.push("/tabs/home");
      }
    },
  },
  mounted() {
    this.getUserData()
  },
};
</script>

<style scoped>
ion-list {
  padding: 5px 0px 0px 0px;
}

ion-avatar {
  height: 72px;
  width: 72px;
  border: 1px solid white;
  margin: 5px 15px 5px;
}

ion-grid {
  padding: 5px;
}

ion-col {
  margin: auto;
}

ion-icon {
  font-size: 18px;
}

ion-title {
  font-weight: bold;
  font-family: sans-serif;
}

p {
  margin-left: 5px;
  color: dimgrey;
}

.name {
  text-transform: capitalize;
}
.ion-label-custom {
  font-family: sans-serif;
  font-size: 13px;
  color: grey;
}
.ion-label {
  font-family: sans-serif;
  font-size: 14px;
  margin-left: 7px;
}
</style>
