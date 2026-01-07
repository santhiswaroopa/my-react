import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome.jsx'
import Welcome2 from './Welcome2.jsx'
import Image from './Logo'
import About from './About.jsx'
import Table from './Table.jsx'
import ContactMe from './ContactMe.jsx'
import GitHubLink from './GitHubLink.jsx';
import Greeting from './Greeting.jsx';
import Greeting2 from './Greeting2.jsx';
import Student from './Student.jsx';
import Welcome3 from './Welcome3.jsx';
import AddNums from './AddNums.jsx';
//import Welcome4 from './assets/Welcome4.jsx'
import Welcomemsg from './Welcomemsg.jsx';
import ProductCard from './ProductCard.jsx';
import Employee from './Employee.jsx';
import GreetingMessage from './GreetingMessage.jsx';
import StudentInfo from './StudentInfo.jsx';
import WelcomeUser from './WelcomeUser.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-right">
        <ContactMe />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Image />
      </div>
      <h1>Vite + React</h1>
      <GitHubLink />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Welcome />
      <Greeting name="santhi" />
      <About />
      <Welcome2 />
      <Greeting2 name="swaroopa" />
      <Table />
      <Student name="santhi" course="React" />
      <Welcome3 />
      <AddNums n1="30" n2="40" />
      {/*<Welcome4 name="SankalpAI" />*/}
      <Welcomemsg name="santhi" city="Hyderabad" />
      <ProductCard product title="Laptop" Brand="Hp" price="55000" /> 
      <Employee name="Swaroopa" department="IT" salary="75000" />  
      <GreetingMessage timeOfDay="Morning" username="santhi" />
      <StudentInfo name="swaroopa" course="React" 
      marks1="85"
      marks2="90" 
      marks3="85" />
      <WelcomeUser fname="santhi" lname="swaroopa"/>
      </>
  )
}

export default App
