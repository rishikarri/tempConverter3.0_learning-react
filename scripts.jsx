//create a function that convers temperature from celsius to fahrenheit
function convertMeToFahrenheit(cTemp){
	var convertedNumber = cTemp * 1.8 + 32;
	return convertedNumber; 
}

function convertMeToCelsius(fTemp){
	var convertedNumber = (fTemp - 32)/1.8
	return convertedNumber
}


function PaperBurningVerdict(props){
	if(props.ctemp >= 233){
		return(
			<h1>You are at a temperature where you can turn paper into fire!  </h1>
		)
	}else{
		return(
			<h1>You are not there yet, keep cranking up the heat! </h1>
		)
	}
}

var TemperatureForm = React.createClass({
	handleChange: function(event){
		{/* print the event so that you know what is happening everytime the texxt is changing*/}
	{/* now we have what the user inputted - the user inputs event.target.value where event.target is the input box, value is what the user entered */}
		this.props.changeCalculatorState(event.target.value);
	},
	render: function(){
		return(
			<form>
				<label>Please enter the temperature in {this.props.tempType} </label>
				<input type="text" placeholder="temperature" onChange={this.handleChange}/>
			</form>
		)
		
	}
});

var Calculator = React.createClass({
	getInitialState: function(){
		return({
			temperature: 0, 
			tempUnit: 'celsius'
			}		
		)
		
	},
	celsiusChange: function(temperatureValue){
		{/*this function currently doesn't have a parameter, need to pass this function through temperature form so that we can get a parameter and update*/}
		{/*set state is simply rewriting an object*/}
		{/*Once we have reset the state, react will automaticaly rerender this class which will in turn, update the DOM to the correct value*/}
		this.setState({
			temperature: temperatureValue,
			tempUnit: 'celsius'
		})					
	},

	fahrenheitChange: function(temperatureValue){
		this.setState({
			temperature: temperatureValue,
			tempUnit: 'fahrenheit'
		})
	},	
	render: function(){
		var temperature = this.state.temperature;
		var tempUnit = this.state.tempUnit;

		if (tempUnit = 'celsius'){
			var cTemp = temperature;
			var fTemp = convertMeToFahrenheit(temperature); 
		}else{
			var cTemp = convertMeToCelsius(temperature);
			var fTemp = temperature;
		}

		return(
			<div>
				<TemperatureForm tempType="celsius" changeCalculatorState={this.celsiusChange}/>
				<TemperatureForm tempType="fahrenheit" changeCalculatorState={this.fahrenheitChange}/>
				<PaperBurningVerdict ctemp={cTemp} />
			</div>
		)
	}
})


ReactDOM.render(
	<Calculator />,
	document.getElementById('container')
)