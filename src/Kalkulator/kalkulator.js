import React, {Component} from 'react';

class kalkulator extends Component {
	constructor(){
		super()
		this.state = {
			number_1: {
				angka: '',
				check: false
			},
			number_2: {
				angka: '',
				check: false
			},
			number_3: {
				angka: '',
				check: false
			},
			hasil: 0
		}
	}

	handelInput(value) {
			this.setState({[value.target.name]: {angka: parseInt(value.target.value), check: value.target.checked}})
	}
	handelInputCheck1(value) {

		this.setState({[value.target.name]: {angka: this.state.number_1.angka, check: value.target.checked}})
	}

	handelInputCheck2(value) {

		this.setState({[value.target.name]: {angka: this.state.number_2.angka, check: value.target.checked}})
	}

	handelInputCheck3(value) {

		this.setState({[value.target.name]: {angka: this.state.number_3.angka, check: value.target.checked}})
	}

	tambah() {
		var n_1 = 0
		var n_2 = 0
		var n_3 = 0
		var length = 0
		if(this.state.number_1.check === true){
			n_1 = this.state.number_1.angka
			length ++
		}
		if(this.state.number_2.check === true){
			n_2 = this.state.number_2.angka
			length ++
		}
		if(this.state.number_3.check ===true){
			n_3 = this.state.number_3.angka
			length++
		}
		if(length <= 1){
			alert('error')
		}else {
			var hasil = n_1 + n_2 + n_3
			this.setState({hasil: hasil})
		}
	}

	kurang() {
		var n_1 = 0
		var n_2 = 0
		var n_3 = 0
		var length = 0
		if(this.state.number_1.check === true){
			n_1 = this.state.number_1.angka
			length ++
		}
		if(this.state.number_2.check === true){
			n_2 = this.state.number_2.angka
			length ++
		}
		if(this.state.number_3.check === true){
			n_3 = this.state.number_3.angka
			length++
		}
		if(length <= 1){
			alert('error')
		}else {
			var hasil = n_1 - n_2 - n_3
			this.setState({hasil: hasil})
		}

	}

	kali() {
		var n_1;
		var n_2; 
		var n_3; 
		var length = 0
		if(this.state.number_1.check === true){
			n_1 = this.state.number_1.angka
			length ++
		}else {
			n_1 = 1
		}
		if(this.state.number_2.check === true){
			n_2 = this.state.number_2.angka
			length ++
		}else {
			n_2 = 1
		}
		if(this.state.number_3.check === true){
			n_3 = this.state.number_3.angka
			length++
		}else {
			n_3 = 1
		}

		if(length <= 1){
			alert('error')
		}else {
			var hasil = n_1 * n_2 * n_3
			this.setState({hasil: hasil})
		}

	}

	bagi() {
		var n_1;
		var n_2;
		var n_3;
		var length = 0
		if(this.state.number_1.check == true){
			n_1 = this.state.number_1.angka
			length ++
		}else {
			n_1 = 1
		}
		if(this.state.number_2.check == true){
			n_2 = this.state.number_2.angka
			length ++
		}else {
			n_2 = 1
		}
		if(this.state.number_3.check== true){
			n_3 = this.state.number_3.angka
			length++
		}else {
			n_3 = 1
		}
		if(length <= 1){
			alert('error')
		}else {
			var hasil = n_1 / n_2 / n_3
			this.setState({hasil: hasil})
		}
	}

	render() {
		return (
			<div>
				<div className="row justify-content-center">
					<div className="col-5">
						<div className="card p-5 m-5">
							<div className="mb-3 border-bottom p-2">
								<h4>Kalkulator ReactJs</h4>
							</div>
							<div className="input-group mb-3">
								<input className="form-control" placeholder="0" name="number_1" onChange={this.handelInput.bind(this)} />
								<div className="input-group-prepend">
							    	<div className="input-group-text">
							    		<input type="checkbox" name="number_1" onChange={this.handelInputCheck1.bind(this)}/>
							    	</div>
								</div>
							</div>

							<div className="input-group mb-3">
								<input className="form-control" placeholder="0" name="number_2" onChange={this.handelInput.bind(this)} />
								<div className="input-group-prepend">
							    	<div className="input-group-text">
							    		<input type="checkbox" name="number_2" onChange={this.handelInputCheck2.bind(this)} />
							    	</div>
								</div>
							</div>

							<div className="input-group mb-3">
								<input className="form-control" placeholder="0" name="number_3" onChange={this.handelInput.bind(this)}/>
								<div className="input-group-prepend">
							    	<div className="input-group-text">
							    		<input type="checkbox" name="number_3" onChange={this.handelInputCheck3.bind(this)} />
							    	</div>
								</div>
							</div>
							<div className="row m-0 mb-3">
								<button type="button" className="btn btn-outline-secondary col" onClick={()=> this.tambah()}>+</button>
								<button className="btn btn-outline-secondary col" onClick={()=> this.kurang()}>-</button>
								<button className="btn btn-outline-secondary col" onClick={()=> this.kali()}>*</button>
								<button className="btn btn-outline-secondary col" onClick={()=> this.bagi()}>%</button>
							</div>
							<div className="form-group text-left">
								<label className="m-0">Hasil :</label>
								<input placeholder={this.state.hasil} className="form-control" />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default kalkulator