<template>
  <div class="hello">
    <zwplayer 
		v-if="playerOpen"
		ref="zwplayerRef"
		nodeid="main-playerxxx" 
		:murl="movieUrl" 
		@onready="onPlayerReady" 
		@onmediaevent="onPlayerMediaEvent"
		:snapshotButton="true"
		:optionButton="true"
		:sendDanmu="sendDanmu"
		:infoButton="true"
		:enableDanmu="true"
		:chapterButton="true"
		danmuBar="danmu-controlbar"
	/>
  </div>
</template>

<script>

import { zwplayer } from 'zwplayervue3'

export default {
  name: 'HelloWorld',
  components: {
    zwplayer
  },
  data() {
	return {
		movieUrl: 'http://192.168.1.202:8088/vod/mp4/VMAP9RxJk5Fon5g83BxAmB1gmh8$hktnmQ04jMZ112.mp4',
		playerOpen: true
	};
  },
  props: {
    msg: String
  },
  methods: {
    onPlayerReady() {
      console.log('player ready event.');
    },
    onPlayerMediaEvent(event) {
      console.log('media event:', event.type);
    },
	sendDanmu: function(danmu) {
      console.log('sendDanmu:', danmu);
      // 调用websocket等方法将弹幕实际发送出去
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	width: 1280px;
	height: 720px;
	box-sizing: border-box;
	margin: 0 auto;
	background-color: #222;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
