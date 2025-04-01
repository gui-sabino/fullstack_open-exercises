const Header = (course) => {
  console.log(course)
  return (
    <>
      <h1>
        Course name: {course.course}
      </h1>                     
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <h3>
        {props.part1} {props.exercises1}
      </h3>
      <h3>
        {props.part2} {props.exercises2}
      </h3>
      <h3>
        {props.part3} {props.exercises3}
      </h3>
    </>
  )
}

const Total = (num) => {
  return (
    <>
      <h4>
        The total is: {num.exercises1 + num.exercises2 + num.exercises3}
      </h4>
    </>
  )
}

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} 
      part2={part2} exercises2={exercises2} 
      part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

export default App