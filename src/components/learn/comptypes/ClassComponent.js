import React, { Component } from 'react'
import CodeBlock from '../../../utility/CodeBlock'
import { Badge } from 'react-bootstrap';

class ClassComponent extends Component {
  render() {
    let code=`import React, { Component } from 'react'
    class ClassComponent extends Component {
      render() {
        return (
            <>        
                <div>Class Component</div>
            </>
        )
      }
    }    
    export default ClassComponent`;
    let callcode=`function App() {
        return (
            <>
            <ClassComponent/>
            </>
        );
    }
    export default App;`;
    return (
        <> 
            <div>Class Component</div>
            <p>As per React definition <b>Components are one of the core concepts of React. They are the foundation upon which you build user interfaces (UI), which makes them the perfect place to start your React journey!</b></p>
            <p>So let create first component,first create a file inside src name ClassComponent.js and paste below snippet into it</p>
            <CodeBlock code={code}></CodeBlock>
            <p>Now include the <Badge>ClassComponent</Badge> into <Badge>App.js</Badge> like below snippet to get call <Badge>ClassComponent</Badge></p>
            <CodeBlock code={callcode}></CodeBlock>
        </>
    )
  }
}

export default ClassComponent