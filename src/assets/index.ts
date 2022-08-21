function importAll(r: __WebpackModuleApi.RequireContext) {
    let res: Map<string, any> = new Map<string, any>;
    r.keys().map((item, index) => {
      let name = item.replace('./', '')
      name = name.split('.', 1)[0]
      res.set(name, r(item));
    });
    return res;
  }

const context = require.context('./img', false, /\.jpg$/);
const images = importAll(context);
export default images;
