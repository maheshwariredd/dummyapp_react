

// function App() {
//   let userName="Maheshwari"
//   return (
//     <div> 
//      <h1>{userName}</h1>
//     </div>
//   );
// }

// export default App;
// component composition

// 
import React, { Component } from 'react'
import CBCPropEx from './propsex/CBCPropEx'
import FBCPropsEx from './propsex/FBCPropsEx'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <CBCPropEx
        username="maheshwari"
        age={20}
        hobbies={["playing","dancing","singing"]}
        address={{city:"nalgonda",area:"bodaldhinna"}}
        sendFun={function(){alert("hi iam maheshwari here")
        }}
        /> */}
        <FBCPropsEx
        username="maheshwari"
        isMarried={true}
        hobbies={["playing",""]}
        />
          </div>
    )
  }
}


