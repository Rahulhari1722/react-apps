import { useState } from 'react'

import './App.css'

const FaqItem=({question,answer})=>{
  const[show,setShow]=useState(false)

  const toggleShow=()=>{
    setShow(!show)
  }

  return(
    <div className={`faq-item ${show?'active':""}`}>
      <div className="faq-item-header" onClick={toggleShow}>{question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqAccordion=({data})=>{
return(
  <div className="faq-accordion">
     <h2>FAQs</h2>
     {data.map((item)=>(
      <FaqItem key={item.id} question={item.question} answer={item.answer} />
     ))}
  </div>
)
}

const data=[
  { id:1,question:"What is react?",answer:"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
  },
  {
   id:2,question:"What are the benefits of using React?",answer:"some benefits of using React are:it is easy to learn and use, it is fast and efficient, it is flexible and scalable, it is widely used and supported by a large community of developers"
  },
  {
    id:3,question:"How can I contribute to React?",answer:"You can contribute to React by reporting bugs, improving documentation, or writing new features. You can also help by finding and fixing bugs in the React codebase or by contributing to the community by answering questions on Stack Overflow or by writing blog posts and tutorials."
  }
]

function App() {
 
  return (
    <>
      <div className="app">
        <FaqAccordion data={data}/>
      </div>
    </>
  )
}

export default App
