function BurningPointVerdict(props){
	
	if(props.cTemp >= 233){
		return(
			<h1>The temperature is at a point where it will turn paper into fire</h1>
		)
	}else{
		return(
			<h1>The temperature is not quite there yet. Turn up the heat!</h1>
		)
	}
	
}

function convertMeToFahrenheit(celsius){
	var convertedNumber = (celsius * 9 / 5 ) + 32	
	return convertedNumber;
}

function convertMeToCelsius(fahrenheit){
	var convertedNumber = (fahrenheit-32) * (5/9); 
	return convertedNumber;
}

var TemperatureDisplay = React.createClass({
	handleChange: function(event){
		
		
		{/*need to call parent function using this.props and pass it a parameter in order to change the state */}
		this.props.onChange(event.target.value);
	},

	render: function(){
				
		return(
			<form>
				<label> Please enter the temperature in {this.props.unitType} </label>
				<input type="text" placeholder="Current Temperature" onChange={this.handleChange} />

			</form>
		)
	}
})




var Calculator = React.createClass({
	getInitialState: function(){
		return(
			{
				temperature: 0, 
				tempType: 'celsius'
			}
		)
		
	},

	
	handleCelsiusChange: function(temperatureValue){
		this.setState({
			temperature: temperatureValue,
			tempType: 'celsius'	
		})
		
	},

	handleFahrenheitChange: function(temperatureValue){
		this.setState({
			temperature: temperatureValue, 
			tempType: 'fahrenheit'	
		})
		
	},

	render: function(){
		var tempType = this.state.tempType; 
		var temp = this.state.temperature; 

		if(tempType === 'celsius'){
			var cTemp = temp; 
			var fTemp = convertMeToFahrenheit(temp);
			console.log(tempType);
		}else if(tempType ==='fahrenheit'){
			var cTemp = convertMeToCelsius(temp);
			var fTemp = temp;
			console.log(tempType);
			
		}

		return(
			<div>
				<TemperatureDisplay onChange={this.handleCelsiusChange} unitType="celsius"/>
				<TemperatureDisplay onChange={this.handleFahrenheitChange} unitType="fahrenheit" />
				<BurningPointVerdict cTemp={Number(cTemp)}/>
			</div>

		)
	}
})

ReactDOM.render(
	<Calculator />,
	document.getElementById('container')
)