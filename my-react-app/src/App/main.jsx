import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './form.css';
import { TextInput } from '../Components/input/input';
import { Button } from '../Components/button/button';
import { getDataGender } from './fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handlerChangeInput = this.handlerChangeInput.bind(this);
        this.handlerSubmitForm = this.handlerSubmitForm.bind(this);
        this.state = { value: '' };
    }

    handlerChangeInput(event) {
        const valueInput = event.target.value.trim();
        this.setState({
            value: valueInput,
        });
    }

    async handlerSubmitForm(event) {
        event.preventDefault();
        const firstName = this.state.value;
        const responceJSON = await getDataGender(firstName);

        this.setState({
            gender: responceJSON.gender,
            name: responceJSON.name,
            value: '',
            nameLength: responceJSON.name.length,
        });
    }

    render() {
        return (
            <div>
                <h1 className="headerGenderize">Узнай пол по имени</h1>
                <div className="container">
                    <form
                        onSubmit={this.handlerSubmitForm}
                        className="formGenderize"
                    >
                        <TextInput
                            valueInput={this.state.value}
                            onChange={this.handlerChangeInput}
                            textInputClassName="inputNameGenderize"
                        />
                        <Button
                            buttonClassName="buttonSubmitGenderize"
                            valueInput={this.state.value}
                        />
                    </form>

                    {this.state.nameLength < 2 && (
                        <div className="error">
                            Ошибка, введите больше двух символов!
                        </div>
                    )}
                    <div className="enteredName">
                        Введенное имя:
                        {this.state.name}
                    </div>

                    {this.state.gender === null ? (
                        <div className="notFoundGender">
                            К сожалению информация не найденна. Попробуйте
                            ввести своё имя на английском
                        </div>
                    ) : (
                        <div className="resultGender">
                            Твой гендер:
                            {this.state.gender}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

root.render(<Main />);

export { Main };
