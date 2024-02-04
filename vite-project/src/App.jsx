import { useState } from 'react'
import './App.css'

// 7.1 7.2 7.3
// function App() {
// 	return <div>
//     <div className='text1'>абзац 1</div>
//     <div className='text2'>абзац 2</div>
//     <div className='text3'>абзац 3</div>
// 	</div>;
// }


// 8
// function App() {
// 	return <ul>
//     <li>r</li>
//     <li>d</li>
//     <li>s</li>
//     <li>f</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
//     <li>ps</li>
// 	</ul>;
// }


// 9
// function App() {
// 	return (
//     <ul>
// 			<li>text1</li>
// 			<li>text2</li>
// 			<li>text3</li>
// 		</ul>
//     );
// }


//  10
// function App() {
// 	return (
//   <>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </>
//     )
// }
// function App() {
// 	return (
//   <div>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     <ul>
//       <li>text1</li>
//       <li>text2</li>
//       <li>text3</li>
//     </ul>
//     </div>
//     )
// }



// 11
// function App() {
// 	return <input />;
// }



// 12
// function App() {
// 	return ( <>
//   <input /><input /><input />
//   </>);
// }



// 13
// function App() {
// 	const str1 = 'text1';
// 	const str2 = 'text1';
	
// 	return <div>
// 		<p>{str1}</p>
// 		<p>{str2}</p>
// 	</div>;
// }



// 14
// function App() {
// 	const name = 'user';
// 	const age  = '30';
	
// 	return <div>
// 		name: {name}
//     <br></br>
// 		age:  {age}
// 	</div>;
// }



// 15
// function App() {
// 	const arr = [1, 2, 3, 4, 5];
//   return (
//     <ul>
// 			<li>{arr[0]}</li>
// 			<li>{arr[1]}</li>
// 			<li>{arr[2]}</li>
//       <li>{arr[3]}</li>
// 			<li>{arr[4]}</li>
// 		</ul>
//   )
// }



// 16
// function App() {
// 	const obj = {name: 'john', surname: 'smit'};
//   return (<div>
//     <p>name: {obj.name}
//     <br></br>
//     surname: {obj.surname}</p>
//   </div>)
// }


// 17
// function App() {
// 	const attr = 'block';
	
// 	return <div id={attr}>
// 		text
// 	</div>;
// }



// 19
// function App() {
// 	const li1 = <div><li>text1</li><li>text2</li><li>text3</li></div>;

//   return <main>
//   {li1}
//   </main>;
// }



// 20
// function App() {
// 	const items = <div><li>text1</li>
//   <li>text2</li>
//   <li>text3</li>
//   </div>
	
// 	return <ul>
// 		{items}
// 	</ul>
// }



// 22
// function App() {
// 	return <div>
// 		<input />
//     <br />
//     <input />
//     <br />
//     <input />
//     <br />
//     <input />
// 	</div>;
// }




// 23.1 23.2
// function App() {
// 	return <div>
// 		<ul>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//       <li>12</li>
//     </ul>
// 	</div>;
// }

// function App() {
// 	return <div>
// 		<tbody>
// 			<tr>
// 				<td>1</td>
// 				<td>2</td>
//         <td>3</td>
// 			</tr>
// 			<tr>
// 				<td>4</td>
// 				<td>5</td>
//         <td>6</td>
// 			</tr>
//       <tr>
// 				<td>7</td>
// 				<td>8</td>
//         <td>9</td>
// 			</tr>
// 		</tbody>
// 	</div>;
// }




// 24.1 
// function App() {
// 	const num1 = 3;
// 	const num2 = 2;
	
// 	return <div>
// 		result: {num1 ** num2}
// 	</div>;
// } 
// HTML: result: 9

// 24.2
// function App() {
// 	const name = 'john';
// 	const surname = 'smit';
	
// 	return <div>
// 		result: {name + ' ' + surname}
// 	</div>;
// }
// HTML: result: john smit



// 24.3
function App() {
	const num = 4;
	
	return <div>
		result: {Math.sqrt(num)}
	</div>;
}
HTML: result: 2

export default App
