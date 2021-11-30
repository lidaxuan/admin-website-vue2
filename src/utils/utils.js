/* jshint esversion: 6 */
/*
 * @Description: 
 * @Author: 李大玄
 * @Date: 2021-11-29 15:06:21
 * @FilePath: /admin-website-vue2/src/utils/utils.js
 */
export const readFile = function (files) {
  let comMap = {};
  
  // 根据文件名组织模块对象
  files.keys().map((src) => {
    const match = src.match(/\/(.+)\./);
    if (match && match.length >= 1) {
      const moduleValue = files(src);
      if (moduleValue.default) {
        comMap[match[1]] = moduleValue.default;
      }
    }
  });
  return comMap;
}