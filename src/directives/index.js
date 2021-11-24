/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-10-11 09:28:36
 * @FilePath: /admin-website-vue2/src/directives/index.js
 */
import utils from "@/utils";

const vueFiles = require.context('./src', true, /\.js$/);
export default utils.readFile(vueFiles)
