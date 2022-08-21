function importAll(r: any) {
    return r.keys().map(r);
  }
  
const x: RequireContext = require.context('./img', false, /\.jpg$/);

const images = importAll(require.context('./img', false, /\.jpg$/));
export default images;
