<template>
  <div>
    <video class="video" ref="myvideo" muted autoplay loop>
      <source src="..\assets\homebackground\building.mp4" type="video/mp4" />
      <strong>Your browser does not support the video tag.</strong>
    </video>
    <div class="mypageform">
      <Auth></Auth>
      <div class="container mypageContainer">
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-card>
              <v-card-title class="cyan darken-1">
                <span class="headline white--text">{{
                  currentUser.username ? currentUser.username : "Not Existed"
                }}</span>
                <v-spacer></v-spacer>
                <v-btn dark icon>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </template>
                  <!--  -->
                  <v-card>
                    <v-card-title>
                      <span class="headline">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              label="Name*"
                              required
                              disabled
                              v-model="user.username"
                            ></v-text-field>
                          </v-col>
                          <!-- <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            label="Legal middle name"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            label="Legal last name*"
                            hint="example of persistent helper text"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col> -->
                          <v-col cols="12">
                            <v-text-field
                              label="Email*"
                              required
                              disabled
                              class="value"
                              v-model="user.email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              label="Password*"
                              type="password"
                              v-model="user.password"
                              required
                            ></v-text-field>
                          </v-col>
                          <!-- <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="Age*"
                            required
                            :value= "currentUser.age"

                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Interests"
                            multiple
                             :value= "currentUser.age"
                          ></v-autocomplete>
                        </v-col> -->
                        </v-row>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="blue darken-1"
                        text
                        class="close"
                        @click="dialog = false"
                      >
                        Close
                      </v-btn>
                      <v-btn color="blue darken-1" text @click="save">
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <!--  -->
                </v-dialog>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index">
                      <v-list-item-title>
                        <v-bottom-sheet v-model="removesheet" inset>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn color="orange" dark v-bind="attrs" v-on="on">
                              {{ item.title }}
                            </v-btn>
                          </template>
                          <v-sheet class="text-center" height="200px">
                            <v-btn
                              class="mt-6"
                              text
                              color="error"
                              @click="remove"
                            >
                              OK
                            </v-btn>
                            <v-btn
                              class="mt-6"
                              text
                              color="error"
                              @click="removesheet = !removesheet"
                            >
                              close
                            </v-btn>
                            <div class="my-3">계정이 삭제됩니당</div>
                          </v-sheet>
                        </v-bottom-sheet>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-title>
              <v-list>
                <!-- <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-account-outline</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>(650) 555-1234</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-phone</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>(323) 555-6789</v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-action>
                </v-list-item> -->
                <!-- <v-divider inset></v-divider> -->
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-email</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ currentUser.email }}
                    </v-list-item-title>
                    <v-divider></v-divider>
                    <!-- <v-container
    id="input-usage"
    fluid
  >
    <v-row>
      <v-col cols="12">
        <v-input
          :messages="['Messages']"
          append-icon="mdi-close"
          prepend-icon="mdi-phone"
        >
          Default Slot
          
        </v-input>
      </v-col>
    </v-row>
  </v-container> -->
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-map-marker</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>SSAFY Daejeon, 5th</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-basketball</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Sports, BasketBall</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-action>
                    <v-icon>mdi-briefcase-outline</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>Developer</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-img
                src="https://picsum.photos/700?image=996"
                height="200px"
              ></v-img>
            </v-card>
          </v-col>
        </v-row>
        <!-- <header class="jumbotron">
          <h2>
            <strong>{{currentUser.username}}</strong> Profile
          </h2>
        </header>
        <p>
          <strong>Token:</strong>
          {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
        </p>
        <p>
          <strong>Id:</strong>
          {{currentUser.id}}
        </p>
        <p>
          <strong>Email:</strong>
          {{currentUser.email}}
        </p>
        <strong>Authorities:</strong>
        <ul>
          <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
        </ul> -->
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Auth from "./Auth";

export default {
  data() {
    return {
      dialog: false,
      user: {
        username: "",
        email: "",
        password: "",
      },
      items: [{ title: "계정 삭제" }],
      removesheet: false,
    };
  },

  components: {
    Auth,
  },
  created() {
    this.user = { ...this.$store.state.auth.user, password: "" };
  },
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
  },
  methods: {
    save() {
      let properties = ["username", "email", "password"];

      let object = {};
      properties.forEach((item) => {
        object[item] = this.user[item];
      });
      console.log(object);
      this.$store.dispatch("auth/changePassword", object).then(
        (data) => {
          // this.message = data.message;
          this.successful = true;
        },
        (error) => {
          // this.message =
          //   (error.response && error.response.data) ||
          //   error.message ||
          //   error.toString();
          this.successful = false;
        }
      );
      this.dialog = false;
    },
    remove() {
      let properties = ["username", "email", "password"];

      let object = {};
      properties.forEach((item) => {
        object[item] = this.user[item];
      });
      console.log(object);
      this.$store.dispatch("auth/deleteUser", object);
      this.$router.push("/login");
      this.removesheet = !this.removesheet;
    },
  },
};
</script>

<style scoped>
video {
  object-fit: cover;
  z-index: 1;
  width: 100%;
  height: 100vh;
}

.mypageform {
  position: relative;
  z-index: 2;
  /* opacity: 0.8; */
}

</style>