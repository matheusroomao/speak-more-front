import React from "react";
import { Link } from 'react-router-dom';
import CalculateService from "./CalculateService";

class Calculate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cal: [],
            origin: '',
            destiny: '',
            time: '',
            plan_id: '',
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.calculate = this.calculate.bind(this)
    }

   
    refreshCalculates() {
        CalculateService.calculate()
            .then(
                response => {
                    console.log(response.data.model)
                    this.setState({ cal: response.data.model });
                }
            )
    }
    calculate(event) {
        event.preventDefault()

        const cal = {
            origin: this.state.origin,
            destiny: this.state.destiny,
            time: this.state.time,
            plan_id: this.state.plan_id
        }
        CalculateService.calculate(cal)
            .then(
                response => {
                    if (response.data.model == "Impossível para essa região") {
                        alert(response.data.model)
                    }
                    this.setState({ cal: response.data.model });
                }
            )
    }
    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return (
            <div class="row">
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">FaleMais</h3>

                            <form onSubmit={this.calculate}>
                                <div class="row">
                                    <div class="col-sm-6 mb-2">
                                        <label for="origin">Origem <b class="text-danger">*</b></label>
                                        <select name="origin" class="form-control bg-light" onChange={this.handleFieldChange}>
                                            <option value="0" id="origin">Selecione</option>
                                            <option value="1" id="origin">011</option>
                                            <option value="2" id="origin">016</option>
                                            <option value="3" id="origin">017</option>
                                            <option value="4" id="origin">018</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <label for="destiny">Destino <b class="text-danger">*</b></label>
                                        <select name="destiny" class="form-control bg-light" onChange={this.handleFieldChange}>
                                            <option value="0" id="destiny">Selecione</option>
                                            <option value="1" id="destiny">011</option>
                                            <option value="2" id="destiny">016</option>
                                            <option value="3" id="destiny">017</option>
                                            <option value="4" id="destiny">018</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <label for="time">Tempo/Min<b class="text-danger">*</b></label>
                                        <input class="form-control bg-light" type="number" name="time" id="time" value={this.state.time} onChange={this.handleFieldChange} />
                                    </div>
                                    <div class="col-sm-6 mb-2">
                                        <label for="plan_id">Plano <b class="text-danger">*</b></label>
                                        <select name="plan_id" class="form-control bg-light" onChange={this.handleFieldChange}>
                                            <option value="0" id="plan_id">Selecione</option>
                                            <option value="1" id="plan_id">FaleMais 30</option>
                                            <option value="2" id="plan_id">FaleMais 60</option>
                                            <option value="3" id="plan_id">FaleMais 120</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block">Calcular </button>
                            </form>
                            {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                            <h3>Com FaleMais: {this.state.cal.With_Speak_more}</h3>
                            <h3>Sem FaleMais: {this.state.cal.Without_Speak_more}</h3>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default Calculate;