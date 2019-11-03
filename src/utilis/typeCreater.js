export default function typeCreater(map, key) {
  let obj = {};
  for (let item in map) {
    obj[item] = key + "_" + map[item];
  }
  return obj;
}
