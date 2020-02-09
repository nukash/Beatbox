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

      <!-- <v-spacer></v-spacer> -->

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <div :v-for="item in playList">
        <v-btn fab x-large >{{item.id}}</v-btn>
      </div>-->
      <div>
        <v-btn
          v-for="item in playList"
          :key="item.id"
          fab
          x-large
          @touchstart.prevent="playSound(item,true)"
          @mousedown="playSound(item), true"
        >{{item.id}}</v-btn>
      </div>
      <div>
        <v-btn
          v-for="item in bgmList"
          :key="item.id"
          fab
          color="primary"
          x-large
          @touchstart.prevent="playSound(item, true)"
          @mousedown="playSound(item, true)"
        >{{item.id}}</v-btn>
      </div>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },
  methods: {
    playSound(item, singleton = false) {
      if (item.url) {
        if (singleton) {
          if (!this.bgmAudio.paused) {
            this.bgmAudio.pause();
          } else {
            this.bgmAudio.src = item.url;
            this.bgmAudio.currentTime = 0;
            this.bgmAudio.play();
          }
        } else {
          if (!item.audio) {
            item.audio = new Audio(item.url);
          }

          if (!item.audio.paused) {
            item.audio.currentTime = 0;
          }
          item.audio.play();
        }
      }
    }
  },
  data: () => ({
    playList: [
      {
        id: "1",
        url: "./audio/se/01/drum-japanese2.mp3"
      },
      {
        id: "2",
        url: "./audio/se/02/trumpet1.mp3"
      },
      {
        id: "3",
        url: "./audio/se/03/kotsudumi1.mp3"
      },
      {
        id: "4",
        url: "./audio/se/04/tin1.mp3"
      },
      {
        id: "5",
        url: "./audio/se/05/costume-drama1.mp3"
      },
      {
        id: "6",
        url: "./audio/se/06/boyon1.mp3"
      },
      {
        id: "7",
        url: "./audio/se/07/Motion-Fracture03-1.mp3"
      },
      {
        id: "8",
        url: "./audio/se/08/Cut04-1.mp3"
      },
      {
        id: "9",
        url: "./audio/se/09/tirin1.mp3"
      }
    ],
    bgmAudio: undefined,
    bgmList: [
      {
        id: 1,
        url: "./audio/bgm/01/shuffle_shuffle.mp3"
      },
      {
        id: 2,
        url: "./audio/bgm/02/%e6%97%a5%e6%9b%9c%e3%81%ae%e5%8d%88%e5%be%8c.mp3"
      },
      {
        id: 3,
        url: "./audio/bgm/03/%e3%81%bd%e3%81%8b%e3%82%93.mp3"
      },
      {
        id: 4,
        url: "./audio/bgm/04/n74.mp3"
      },
      {
        id: 5,
        url: "./audio/bgm/05/%e5%a4%8f%e3%81%afsummer!!.mp3"
      },
      {
        id: 6,
        url:
          "./audio/bgm/06/%e3%81%90%e3%81%a0%e3%81%90%e3%81%a0%e3%81%aa%e6%84%9f%e3%81%98.mp3"
      },
      {
        id: 7,
        url:
          "./audio/bgm/07/%e3%83%91%e3%83%bc%e3%83%86%e3%82%a3%e3%83%bc%e3%81%af%e3%83%8f%e3%83%81%e3%83%a3%e3%83%a1%e3%83%81%e3%83%a3%e5%a4%a7%e9%a8%92%e3%81%8e.mp3"
      },
      {
        id: 8,
        url:
          "./audio/bgm/08/%e3%83%a2%e3%83%bc%e3%83%84%e3%82%a1%e3%83%ab%e3%83%88%e3%80%8cDies_irae%e3%80%8d.mp3"
      },
      {
        id: 9,
        url: "./audio/bgm/09/Crystal_thorn.mp3"
      }
    ]
  }),
  created() {
    this.bgmAudio = new Audio();
  }
};
</script>
