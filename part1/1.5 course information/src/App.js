const Header = (props) => {
  return (
    <header>
      <h1>Course name: {props.course}</h1>
    </header>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <footer>
      <h4>The total is: {props.exercises1 + props.exercises2 + props.exercises3}</h4>
    </footer>
  );
};

const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content 
        part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
        part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
        part3={course.parts[2].name} exercises3={course.parts[2].exercises}
      />
      <Total 
        exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;