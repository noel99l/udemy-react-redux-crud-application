import React from 'react';

// クラスcomponent
// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={() => {console.log("clicked")}} />
//             </React.Fragment>
//         )
//     }
// }


// 関数component
const App = () => {
    return (
        <div>
            <Cat />
            <Cat />
            <Cat />
            <Cat />
            <Cat />
        </div>
    )
}

const Cat =() => {
    return <div>Meaw!</div>
}

export default App;