import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p onClick = {() => this.props.list[this.props.list.length - 1].splice(1, Number.MAX_VALUE) || console.log(this.props.list)}>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);