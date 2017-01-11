

var TemperatureForm = React.createClass({
	handleChange: function(event){
		{/* print the event so that you know what is happening everytime the texxt is changing*/}
	{/* now we have what the user inputted - the user inputs event.target.value where event.target is the input box, value is what the user entered */}
		console.log(event.target.value);
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
	celsiusChange: function(){
		console.log("hi");
	},
	render: function(){
		return(
			<div>
				<TemperatureForm tempType="celsius" onChange={this.celsiusChange}/>
				<TemperatureForm tempType="fahrenheit"/>
			</div>
		)
	}
})


ReactDOM.render(
	<Calculator />,
	document.getElementById('container')
)