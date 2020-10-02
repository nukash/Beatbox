<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />-->
        Beatbox
      </div>

      <v-spacer></v-spacer>
      <v-btn text v-if="updateExists" @click="refreshApp">
        <v-icon>mdi-restart-alert</v-icon>New Version Avairable
      </v-btn>
      <v-btn text @click="unregisterSW">
        <!-- <span class="mr-2">Latest Release</span> -->
        <v-icon>mdi-reload</v-icon>
        <!-- <v-icon>{{reloadSvg}}</v-icon> -->
      </v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <div :v-for="item in playList">
        <v-btn fab x-large >{{item.id}}</v-btn>
      </div>-->
      <v-container>
        <v-row justify="start" align-content="center">
          <v-col cols="4" sm="1" v-for="item in playList" :key="item.id">
            <!-- <audio
              :src="item.url"
              preload="none"
              crossorigin="anonymous"
            ></audio> -->
            <v-btn
              block
              x-large
              @touchstart.prevent="playSound(item, true, true)"
              @mousedown="playSound(item, true, true)"
              >{{ item.id }}</v-btn
            >
          </v-col>
        </v-row>

        <v-row justify="start" align-content="center">
          <v-col cols="4" sm="1" v-for="item in bgmList" :key="item.id">
            <v-btn
              block
              color="primary"
              x-large
              @touchstart.prevent="playSound(item, true)"
              @mousedown="playSound(item, true)"
              >{{ item.id }}</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import { mdiReload } from "@mdi/js";

export default {
  name: "App",

  components: {
    // HelloWorld,
  },
  methods: {
    playSound(item, singleton = false, isSE = false) {
      if (item.url) {
        if (singleton) {
          var aud = isSE ? this.seAudio : this.bgmAudio;
          if (!aud.paused && !isSE) {
            aud.pause();
          } else {
            aud.src = item.url;
            aud.currentTime = 0;
            aud
              .play()
              .then((_) => console("bgm stopped."))
              .catch((error) => console.error(error));
          }
        } else {
          if (!item.audio) {
            item.audio = new Audio(item.url);
            item.audio.crossOrigin = "anonymous";
          }

          if (!item.audio.paused) {
            item.audio.currentTime = 0;
          }
          item.audio
            .play()
            .then((_) => console("se stopped."))
            .catch((error) => console.error(error));
        }
      }
    },
    unregisterSW() {
      window.location.reload(true);
    },

    showRefreshUI(e) {
      this.registration = e.detail;
      this.updateExists = true;
    },
    refreshApp() {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) {
        return;
      }
      this.registration.waiting.postMessage("skipWaiting");
    },
  },
  data: () => ({
    playList: [
      {
        id: "1",
        url: "./audio/se/01/drum-japanese2.mp3",
      },
      {
        id: "2",
        url: "./audio/se/02/trumpet1.mp3",
      },
      {
        id: "3",
        url: "./audio/se/03/kotsudumi1.mp3",
      },
      {
        id: "4",
        url: "./audio/se/04/tin1.mp3",
      },
      {
        id: "5",
        url: "./audio/se/05/costume-drama1.mp3",
      },
      {
        id: "6",
        url: "./audio/se/06/boyon1.mp3",
      },
      {
        id: "7",
        url: "./audio/se/07/Motion-Fracture03-1.mp3",
      },
      {
        id: "8",
        url: "./audio/se/08/Cut04-1.mp3",
      },
      {
        id: "9",
        url: "./audio/se/09/tirin1.mp3",
      },
    ],
    seAudio: undefined,
    bgmAudio: undefined,
    bgmList: [
      {
        id: 1,
        url: "./audio/bgm/01/shuffle_shuffle.mp3",
      },
      {
        id: 2,
        url: "./audio/bgm/02/sunday-afternoon.mp3",
      },
      {
        id: 3,
        url: "./audio/bgm/03/pokan.mp3",
      },
      {
        id: 4,
        url: "./audio/bgm/04/n74.mp3",
      },
      {
        id: 5,
        url: "./audio/bgm/05/natsu-is-summer!!.mp3",
      },
      {
        id: 6,
        url: "./audio/bgm/06/Fickle.mp3",
      },
      {
        id: 7,
        url: "./audio/bgm/07/party.mp3",
      },
      {
        id: 8,
        url: "./audio/bgm/08/Dies_irae.mp3",
      },
      {
        id: 9,
        url: "./audio/bgm/09/Crystal_thorn.mp3",
      },
    ],
    refreshing: false,
    registration: null,
    updateExists: false,
    // reloadSvg: mdiReload,
  }),
  created() {
    this.bgmAudio = new Audio();
    this.seAudio = new Audio();

    // ここからPWAアップデート用ロジック
    document.addEventListener("swUpdated", this.showRefreshUI, { once: true });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload(true);
    });
  },
};
</script>
