import alt from './../alt/alt';
import DataActions from './../actions/DataActions';

class DataStore {
  constructor() {
    this.state = {
      pages: [],
      error: null
    }

    this.bindListeners({
      handleUpdatePages: DataActions.HANDLE_SUCCESS,
      handleGetPages: DataActions.GET_PAGES,
      handleError: DataActions.HANDLE_ERROR
    });
  }

  handleUpdatePages(pages) {
    this.setState({
      pages: pages,
      error: null
    });
    console.log(this.state);
  }

  handleGetPages() {
    this.setState({
      pages: [],
      error: null
    }) // reset array so we can display a loader while data is being fetched and array is empty
    console.log(this.state);
  }

  handleError(error) {
    this.setState({
      error: error
    })
  }
}

export default alt.createStore(DataStore, 'DataStore');
