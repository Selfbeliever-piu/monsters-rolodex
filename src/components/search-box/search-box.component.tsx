import { Component, ReactNode } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
      return (
        <input
          placeholder={this.props.placeholder}
          className='search-box'
          type='search'
          onChange={this.props.onChangeHandler}
        />
      )
    }
}

export default SearchBox;