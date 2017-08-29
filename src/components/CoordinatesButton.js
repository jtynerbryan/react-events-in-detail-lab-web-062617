import React from 'react'

class CoordinatesButton extends React.Component {
	
  handleClick = (event) => {
  	return this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render(){
    return (
      <button onClick={this.handleClick}>Button</button>
    )
  } 

}


export default CoordinatesButton