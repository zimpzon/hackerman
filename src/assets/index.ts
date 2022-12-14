function importAll(r: __WebpackModuleApi.RequireContext) {
  let res: Map<string, any> = new Map<string, any>();
  r.keys().map((item, index) => {
    let name = item.replace("./", "");
    name = name.split(".", 1)[0];
    res.set(name, r(item));
    return name; // lint
  });
  return res;
}

const contextImg = require.context("./img", false, /\.jpg$/);
export const images = importAll(contextImg);

const contextIcons = require.context("./icons", false);
export const icons = importAll(contextIcons);

const contextPics = require.context("./pics", false);
export const pics = importAll(contextPics);

const contextCharacters = require.context("./characters", false);
export const characters = importAll(contextCharacters);

export default images;
