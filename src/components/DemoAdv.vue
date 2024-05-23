<template>
<div class="advanceview">
	<h1 class="demo-title">{{ title }}</h1>
	<div id="main-player" class="playerWrapper">
		<ZwPlayer 
			v-if="playerOpen"
			ref="zwplayerRef"
			nodeid="main-playerxxx" 
			:murl="movieUrl" 
			@onready="onPlayerReady" 
			@onmediaevent="onPlayerMediaEvent"
			:snapshotButton="true"
			:optionButton="true"
			:thumbnails="thumbnails"
			:sendDanmu="sendDanmu"
			:infoButton="true"
			:enableDanmu="true"
			:chapterButton="true"
			danmuBarId="danmu-controlbar"
			zwplayerlib="http://192.168.1.202/rtcplayer/zwplayer/zwplayer.js?v=3.38"
		/>
	</div>
	<div class="danmubar" id="danmu-controlbar">
		<div class="danmubar-left-fill">
			<button v-on:click="playerOpen = true">打开</button>
			<button v-on:click="playerOpen = false">销毁</button>
		</div>
	</div>
	<div class="toolbar" id="main-controlbar">
		<button v-on:click="refTest">Ref 测试</button>
		<button v-on:click="playerPause">Pause</button>
		<button v-on:click="playerResume">Resume</button>
		<button v-on:click="playerSubtitles">Subtitles</button>
		<button v-on:click="playerRemoveSubtitles">Remove Subtitles</button>
		<button v-on:click="playerChapters">Chapters</button>
		<button v-on:click="playerRemoveChapters">Remove Chapters</button>
		<button v-on:click="playerPlayMovie2">Play Video 2</button>
		<button v-on:click="playerChangeUrl">Change Url</button>
		<button v-on:click="playerAppendDanmu">Append Danmu</button>
	</div>
</div>
</template>

<script>
import { zwplayer } from 'zwplayervue3'

var live_url = { // eslint-disable-line no-unused-vars
	murls: {
		"FULL_HD1": "http://pull-flv-f11.douyincdn.com/media/stream-691614469030412972.flv",
		"HD1": "http://pull-flv-f11.douyincdn.com/media/stream-691614469030412972_hd.flv",
		"SD1": "http://pull-flv-f11.douyincdn.com/media/stream-691614469030412972_ld.flv",
		"SD2": "http://pull-flv-f11.douyincdn.com/media/stream-691614469030412972_sd.flv"
	},
	multistream: 3			
};
		
export default {
  name: 'DemoAdv',
  components: {
    'ZwPlayer': zwplayer
  },
  data() {
    return {
      //movieUrl: live_url
      movieUrl: 'http://192.168.1.202:8088/vod/mp4/VMAP9RxJk5Fon5g83BxAmB1gmh8$hktnmQ04jMZ112.mp4',
      thumbnails: {
        url: 'http://192.168.1.202:8088/images/VMAP9BwumT9ytBsi5DNnlRRkhkUkn5d36k5u50ZjkRFohxBjkwc67wg46R9i7B001wNiml842M9g0wdhmM860w5n1Rc02l01k0o2k0pirktsg5I3j5J2l0.jpg',
        col: 21,
        row: 20,
        width: 128,
        height: 72,
        total: 418
      },
      playerOpen: true,
      title: 'zwplayer for vue3.x advance sample'
    }
  },
  props: {
    msg: String
  },
  methods: {
    onPlayerReady(player) { // eslint-disable-line no-unused-vars
      // player 为一个 ZWPlayer 实例
      console.log('player ready event.');
    },
    onPlayerMediaEvent(event, player) { // eslint-disable-line no-unused-vars
      console.log('media event:', event.type);
    },
    sendDanmu: function(danmu) {
      console.log('sendDanmu:', danmu);
      // 调用websocket等方法将弹幕实际发送出去
    },
    refTest(event) { // eslint-disable-line no-unused-vars
      let isNull = this.$refs.zwplayerRef ? 'exist' : 'none';
      let duration;
      
      if (this.$refs.zwplayerRef)
        duration = this.$refs.zwplayerRef.getDuration();

      console.log('zwplayer ref:', isNull, ' duration:', duration);
    },
	playerPause(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			player.pause();
		}
	},
	playerResume(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			player.resume();
		}
	},
	playerSubtitles(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			let subtitleURL_korean = 'http://192.168.1.202:8088/data/VMAP9RxJk5Fon5g83BxAmB1gmh8$hktnmQ04fyBug5oqhAgl.srt';
			let subtitleURL_japan = 'http://192.168.1.202:8088/data/VMAP9RxJk5Fon5g83BxAmB1gmh8$hktnmQ04fwx1kRQqhAgl.srt';
			
			player.addSubtitle(subtitleURL_korean, '1');
			
			player.addSubtitle(subtitleURL_japan, '2');
		}
	},
	playerRemoveSubtitles(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			player.removeSubtitle();
		}
	},
	playerChapters(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			player.setChapters('http://192.168.1.202/chapters.json?v=236');
		}
	},
	playerRemoveChapters(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			player.setChapters(null);
		}
	},
	playerPlayMovie2(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			let player = this.$refs.zwplayerRef;
			
			var thumbnails = {
				url: 'http://192.168.1.202:8088/images/VMAP9BwumT9ytBsi5DNnlRRkhkUkn5d36k5u50ZjkRFohxBjkwc67wg46R9i7B001wNiml842M9g0wdhmM860w5n1Rc02l01k0o2k0pirktsg5I3j5J2l0.jpg',
				col: 21,
				row: 20,
				width: 128,
				height: 72,
				total: 418
			}
			
			var vod_urls = {
				"type": "dvr",
				"rtmp": "rtmp://192.168.1.202:1936/vod/VMAP9RwuREKpQbHqxbylRUOLTK7xSpSC6ZOvPomkHdqUzxC7Z8znKHrgCYtdogE33daqPoqbFJqVEdfAUtuaJJeSCUjHINNuh01.mp4",
				"http": "http://192.168.1.202:8088/vod/mp4/VMAP9RwuREKpQbHqxbylRUOLTK7xSpSC6ZOvPomkHdqUzxC7Z8znKHrgCYtdogE33daqPoqbFJqVEdfAUtuaJJeSCUjHINNuh01.mp4",
				"hls": "http://192.168.1.202:8088/vod/hls/VMAP9RwuREKpQbHqxbylRUOLTK7xSpSC6ZOvPomkHdqUzxC7Z8znKHrgCYtdogE33daqPoqbFJqVEdfAUtuaJJeSCUjHINNuh01/index.m3u8",
				"dash": "http://192.168.1.202:8088/vod/dash/VMAP9RwuREKpQbHqxbylRUOLTK7xSpSC6ZOvPomkHdqUzxC7Z8znKHrgCYtdogE33daqPoqbFJqVEdfAUtuaJJeSCUjHINNuh01/manifest.mpd",
				thumbnails: thumbnails
			};
					
			player.play(vod_urls, false);
		}
	},
	playerChangeUrl(event) { // eslint-disable-line no-unused-vars
		var movieInfo = {
				"type": "dvr",
				"rtmp": "rtmp://192.168.1.202:1936/vod/VMAP9RwunRN2n5cijmHnBVfsHum7JapK6BRj5M401Mc46Rs00g040NFohB5.mp4",
				"http": "http://192.168.1.202:8088/vod/mp4/VMAP9RwunRN2n5cijmHnBVfsHum7JapK6BRj5M401Mc46Rs00g040NFohB5.mp4",
				"hls": "http://192.168.1.202:8088/vod/hls/VMAP9RwunRN2n5cijmHnBVfsHum7JapK6BRj5M401Mc46Rs00g040NFohB5/index.m3u8",
				"dash": "http://192.168.1.202:8088/vod/dash/VMAP9RwunRN2n5cijmHnBVfsHum7JapK6BRj5M401Mc46Rs00g040NFohB5/manifest.mpd",
				"thumbnails" : {
					url: 'http://192.168.1.202:8088/images/VMAP9BwumT9ytBsi5DNnlRRkhkUkn5d36k5u50ZjkRFohxBjkwc67wg06R5l7wpik5050Bdl0gll0w9hkMg30llm1R07l0dmk0s2kl45rktsg5I3j5J2l0.jpg',
					col: 8,
					row: 8,
					width: 128,
					height: 72,
					total: 60
				}

			}
		// movieUrl 被绑定，如果movieUrl 发生变化，导致zwplayer加载这个url并播放
		this.movieUrl = movieInfo;
	},
	playerAppendDanmu(event) { // eslint-disable-line no-unused-vars
		if (this.$refs.zwplayerRef) {
			// 这仅仅是模拟，真实的弹幕应该是网络转发过来的
			let danmuText = '这是弹幕测试文本' + (new Date).toLocaleString();
			let player = this.$refs.zwplayerRef;
			
			var danmu = {
				text: danmuText
			};
			
			player.appendDanmu(danmu);
		}
	}
  }
}
</script>

<style scoped>
.advanceview {
  width: 1026px;
  height: 708px;
  border: 1px solid #232323;
  box-sizing: border-box;
  margin: 0 auto;
}
	
.demo-title {
  margin: 0px 0 0;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  background-color: #f0f0f0;
}

.playerWrapper {
	width: 100%;
	height: 576px;
	border: 0px solid #f00;
	position: relative;
	background-color: #111;
}

.danmubar {
	height: 50px;
	background-color: #232323;
	padding: 8px;
	box-sizing: border-box;
	display: flex;
}

.danmubar .danmubar-left-fill {
	flex-grow: 1;
	align-items: center;
	justify-content: start;
	display: flex;
}

.danmubar .danmubar-left-fill button {
	background-color: #2b2b2b;
	border: 1px solid #474646;
	margin-right: 10px;
	height: 26px;
	min-width: 60px;
	border-radius: 5px;
	color: #ccc;
}

.danmubar .danmubar-left-fill button:hover {
	background-color: #4d4d4d;
	border-color: #7d7d7d;
	color: #f0f0f0;
}

.danmubar .danmubar-left-fill button:active {
	background-color: #252525;
	border-color: #414040;
	color: #cdcdcd;
}

.danmubar :deep(.zwp_danmu-controlbar) {
	width: 60%;
}

.toolbar {
	padding: 6px;
	text-align: left;
	border: 1px solid #ccc;
}

.toolbar button {
	margin-right: 6px;
}
</style>