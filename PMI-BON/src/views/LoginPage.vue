<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <img src="../image/blood.jpg" alt="" />
      <Form @submit="onSubmit">
        <ion-grid>
          <ion-row>
            <p>Username</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="username"
              as="input"
              placeholder="username"
              :rules="isRequired"
              autocomplete="off"
            >
            </Field>
            <ion-icon :icon="person" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="username"></error-message>
          </ion-row>

          <ion-row>
            <p>Password</p>
          </ion-row>
          <ion-row class="input-login">
            <Field
              name="password"
              as="input"
              placeholder="password"
              :rules="isRequired"
              autocomplete="off"
              type="password"
            >
            </Field>
            <ion-icon :icon="key" />
          </ion-row>
          <ion-row class="error-message">
            <error-message name="password"></error-message>
          </ion-row>

          <ion-row>
            <ion-button type="submit" color="danger" class="btn-login"
              >Login</ion-button
            >
          </ion-row>
          <ion-row>
            <ion-button color="primary" class="btn-login" href="/tabs/register"
              >Registrasi</ion-button
            >
          </ion-row>
        </ion-grid>
      </Form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonGrid,
  IonRow,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { Field, ErrorMessage, Form } from "vee-validate";

import { person, key } from "ionicons/icons";
export default {
  name: "loginPage",
  components: {
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
    IonGrid,
    IonRow,
    IonIcon,
    IonButton,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      person,
      key,
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
      const data = values;
      console.log(data);
    },
    isRequired(value) {
      if (!value) {
        return "This field is required";
      }
      return true;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 12px !important;
  margin-left: 26px;
}
.input-login {
  border-bottom: 1px solid rgb(109, 106, 106);
  margin: auto !important;
  width: 90% !important;
}
.btn-login {
  width: 90% !important;
  margin: 8px auto;
}
img {
  height: 40%;
  margin: auto;
  display: block;
}
.input-login {
  border-bottom: 1px solid rgb(109, 106, 106);
  margin: auto !important;
  width: 90% !important;
}
input {
  border: none;
  outline: none;
  width: 90%;
  padding: 8px !important;
}

input:focus {
  border: none;
  outline: none;
}

.error-message {
  font-size: 12px !important;
  margin-left: 21px;
  color: red !important;
  font-style: italic;
  margin-top: 2px !important;
}
</style>
