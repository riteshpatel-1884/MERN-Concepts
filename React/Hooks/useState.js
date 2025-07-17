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
