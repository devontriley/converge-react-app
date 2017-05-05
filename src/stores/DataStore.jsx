import alt from './../alt/alt';
import DataActions from './../actions/DataActions';

class DataStore {
  constructor() {
    this.data = {};

    this.bindListeners({
      handleSuccess: DataActions.GET_SUCCESS
    });

    this.exportPublicMethods({
      getAll: this.getAll,
      getPages: this.getPages,
      getPageBySlug: this.getPageBySlug,
      getEntrepreneurs: this.getEntrepreneurs,
      getMenu: this.getMenu
    });
  }

  handleSuccess(data) {
    this.setState({ data });
  }

  getAll() {
    return this.getState().data;
  }

  getPages(id = []) {
    const pages = this.getState().data.pages;
    if(id.length <= 0) {
      return pages
    }
    return pages.filter((page, i) => {
      return id.indexOf(page.id) !== -1
    })
  }

  getAllPosts() {
    return this.getState().posts;
  }

  getPageBySlug(slug) {
    const pages = this.getState().data.pages;
    return pages[Object.keys(pages).find((page, i) => {
      return pages[page].slug === slug;
    })] || {};
  }

  getEntrepreneurs(id = []) {
    const entrepreneurs = this.getState().data.entrepreneurs;
    if(id.length <= 0) {
      return entrepreneurs
    }
    return entrepreneurs.filter((el, i) => {
      return id.indexOf(el.ID) !== -1
    })
  }

  getMenu(slug) {
    let menu = this.getState().data.menu;
    return menu.filter((el, i) => {
      return el.slug == slug
    })
  }
}

export default alt.createStore(DataStore, 'DataStore');
