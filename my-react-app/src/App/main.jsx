import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '../Components/form/form.css'
import { TextInput } from "../Components/input/input"
import { Button } from "../Components/button/button"


const root = ReactDOM.createRoot(
  document.getElementById('root')
)

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handlerChangeInput = this.handlerChangeInput.bind(this);
    this.handlerSubmitForm = this.handlerSubmitForm.bind(this);
    this.state = {value: ''};
  }

  handlerChangeInput(event) {
    this.setState({
			value: event.target.value
		});
  }

  async handlerSubmitForm(event) {
      event.preventDefault();
      const firstName = this.state.value;
      const serverUrl = 'https://api.genderize.io';
      const url = `${serverUrl}?name=${firstName}`;
    
        try {
          const responce = await fetch(url);
          const responceJSON = await responce.json();
          console.log('responceJSON: ', responceJSON);
          this.setState({
            gender: responceJSON.gender,
            name: responceJSON.name,
            value: "",
            nameLength: responceJSON.name.length,
          });
        } catch(error) {
          alert(error);
        }
  }

  render() {
    return (
      <div>
          <h1 className='headerGenderize'>Узнай пол по имени</h1>          
          <div className='container'>
              <form onSubmit={this.handlerSubmitForm} className='formGenderize'>
                  <TextInput valueInput={this.state.value} onChange={this.handlerChangeInput} textInputClassName="inputNameGenderize"/>
                  <Button onClick={this.handlerSubmitForm} buttonClassName="buttonSubmitGenderize"/>
              </form>

              {
                this.state.nameLength < 2 && 
                <div className="error">Ошибка, введите больше двух символов!</div>
              }
                  <div className="enteredName">Введенное имя: {this.state.name} </div>
              {
                this.state.gender === null 
                 ? <div className="notFoundGender">К сожалению информация не найденна. Попробуйте ввести своё имя на английском</div>
                 : <div className='resultGender'>Твой гендер: {this.state.gender}</div>
              }                  
          </div>
      </div>
    );
  } 
}

root.render(<Main/>)

export {Main}