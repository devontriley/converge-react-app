import axios from 'axios';
import alt from './../alt/alt';

class DataActions {
  constructor() {
    const appUrl = 'http://known-development.com/converge';

    this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`;
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

  getPages() {
    this.api(this.pagesEndPoint).then((response) => {
      this.handleSuccess(response);
    }).catch((error) => {
      this.handleError(error);
    });
  }

  handleError(error) {
    return error;
  }

  handleSuccess(response) {
    return response;
  }
}

export default alt.createActions(DataActions);
