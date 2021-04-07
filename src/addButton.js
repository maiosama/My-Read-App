import React, {Component} from 'react'
import PropTypes from 'prop-types'


class addButton extends Component{
    render(){
        return(
            <div className="open-search">
            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
          </div>
      

        )
    }


}

export default addButton;


