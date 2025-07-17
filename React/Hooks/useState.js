1. useState is a React Hook that lets you add state to functional components. 
2. Syntax: const [state, setState] = useState(initialValue);
        -> initialValue: The initial value of the state can be a primitive (number, string, boolean), array, object, 
          or even a function.
        -> state: It is a variable that stores current state value = initialValue.
        -> setState: It is a function used to update the state.

3. // String
const [name, setName] = useState("Ritesh");
// Boolean
const [isVisible, setIsVisible] = useState(false);
// Object
const [user, setUser] = useState({ name: "Ritesh", age: 22 });
// Array
const [todos, setTodos] = useState([]);




Example 1:
import React, { useState } from 'react';
export default function App() {
{
  const [count, setCount] = useState(0); 
  const increment = () => {
    setCount(count + 1); 
  };
  return <>
           <p>Count: {count} </p>
           <button onClick={increment}>Increase</button> 
                          //OR
           <button onClick={()=>{ setCount(count+1) }}>Increase</button>
     </>
}
}


Example 2: 
 import React, { useState } from 'react';
export default function App() {
{
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    password: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };


  return <>
          <input name="name" onChange={handleChange} placeholder="Name" />
          <input name="email" onChange={handleChange} placeholder="Email" />
          <input name="password" onChange={handleChange} placeholder="Password" />
          <h1>{form.name}</h1>
          <h1>{form.email}</h1>
          <h1>{form.password}</h1>
        </>
}
}
//Explanation: 
1. const handleChange = (e) => { }: This is an event handler for the onChange event on an input.
2. e is the event object automatically passed by React when a user types in the input.
3. e.target refers to the input element.
4. From the input element, we extract:
    -> name: the name of the input field ("name", "email", or "password")
    -> value: the current value typed in that input
5. prev => 
This is the functional form of updating state. It gives you the previous state to safely build the new one.
6. { ...prev } 
This copies the existing state object. So you don’t lose previous values like name or password when updating email.
7. [name]: value 
This uses computed property names (ES6 feature) to dynamically update the key based on the input's name.
8. So for name = "email" and value = "abc@example.com", it becomes:
   setForm(prev => ({
            ...prev,
            email: "abc@example.com"
           }));
It updates only the email field of the form state without overwriting the others.



Example 3: 
 import React, { useState } from 'react';
const items = [
  { title: "HTML", content: "HyperText Markup Language" },
  { title: "CSS", content: "Cascading Style Sheets" },
  { title: "JS", content: "JavaScript" }
];

export default function App() {
 const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };
  return <>
    {items.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => toggle(index)}>{item.title}</h3>
          {openIndex === index && <p>{item.content}</p>}
        </div>
      ))}
     </>
}

Explanation:
1. openIndex: Tracks which item is currently open. null means no item is open.
2. toggle: This function handles the open/close logic: If the clicked item is already open (prev === index), 
   then close it by setting openIndex to null. Otherwise, open the clicked item by updating openIndex to 
   that item's index.
3. When the title is clicked, toggle(index) runs.
    -> If openIndex === index, that means the current item is open, so its <p> content is shown.
    -> Otherwise, the content is hidden.
4. index is the second parameter of the .map() function in JavaScript which starts from 0. It tells the 
   toggle() function which item was clicked based on its index.
5. It means HTML's index is 0, CSS's index is 1 and JS's index is 2.
6. {openIndex === index && <p>{item.content}</p>}
checks: is the currently open item the same as this one? If yes → show the content.
