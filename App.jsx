import React from 'react';

class App extends React.Component {
   render() {
      return (
      	<div>         
            <h1>Header</h1>
            <h2>Content</h2>
            <p data-myattribute = "somevalue">This is the content!!!</p>
            <p>Math: 1+1 = {1+1}</p>
        </div>         
      );
   }
}
export default App;