import React from 'react'

class ButtonGenderize extends React.Component {
    constructor (props){
        super(props);

    this.hendleClick = this.hendleClick.bind(this)
    }

    hendleClick (e){
        e.preventDefault()
        console.log('Click done..')
    }

    render (){
        return <button onClick={this.hendleClick} className="button"></button>
    }
}

export default ButtonGenderize