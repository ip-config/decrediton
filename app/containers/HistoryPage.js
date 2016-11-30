// @flow
import { connect } from 'react-redux';
import History from '../components/History';

function mapStateToProps(state) {
  return {
    client: state.login.client,
  };
}

export default connect(mapStateToProps)(History);