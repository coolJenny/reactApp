import React from 'react';

class App extends React.Component {
   render() {
   		var i = 1;
   		var myStyle = {
   			font-size: 100,
   			color: '#FF0000'
   		}
      return (
      	<div>         
            <h1 style={myStyle}>Header</h1>
            {//Single line comment...}
          	{/*Multi line comment...*/}
            <h2>Content</h2>
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <p>Math: 1+1 = {1+1}</p>
            <p>{i == 1 ? 'true!' : 'false!'}</p>
        </div>
      );
   }
}
export default App;