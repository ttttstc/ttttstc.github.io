import { Config } from '@remotion/cli/config';

// H.264 编码，GitHub Pages 直接托管，浏览器 <video> 兼容性最好。
// 视频无音轨，关闭音频编码省体积。
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setCodec('h264');
Config.setMuted(true);
// 中文 Noto Serif/Sans SC 体积较大，给字体加载留足超时
Config.setTimeoutInMilliseconds(90_000);
