import axios from 'axios';
import alt from './../alt/alt';

class DataActions {
  constructor() {
    const appUrl = 'http://known-development.com/converge';

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
    this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`;
    this.entrepreneursEndPoint = `${appUrl}/wp-json/custom/v1/entrepreneurs`;
    this.menusEndPoint = `${appUrl}/wp-json/menus/v1/menus`;
  }

  api(endPoint) {
    return new Promise((resolve, reject) => {
      axios.get(endPoint).then((response) => {
        resolve(response.data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  getPages(cb) {
    this.api(this.pagesEndPoint).then((response) => {
      let payload = { pages: response };
      this.getPosts(payload, cb);
    });
  }

  getPosts(payload, cb) {
    let p = payload;
    this.api(this.postsEndPoint).then((response) => {
      p.posts = response;
      this.getMenus(p, cb);
    })
  }

  getMenus(payload, cb) {
    let p = payload;
    this.api(this.menusEndPoint).then((response) => {
      p.menus = response;
      this.getEntrepreneurs(p, cb);
    })
  }

  getEntrepreneurs(payload, cb) {
    let p = payload;
    this.api(this.entrepreneursEndPoint).then((response) => {
      p.entrepreneurs = response;
      this.getSuccess(p); // Pass returned data to the store
      cb(payload); // This callback will be used for dynamic rout building
    })
  }

  // This returnes an object with Pages and Posts data together
  // The Alt Store will listen for this method to fire and will store the returned data
  getSuccess(payload) {
    console.log(payload);
    return payload;
  }
}

export default alt.createActions(DataActions);
