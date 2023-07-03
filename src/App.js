import './App.css';
import Simpsons from "./components/Simpsons/Simpsons";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";

function App() {
  return (
    <div className="App">

            <h1>Simpsons</h1>
          <Simpsons name={'Lisa'} surname={'Simpson'} age={'8'} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
          <Simpsons name={'Homer'} surname={'Simpson'} age={'45'} gender={'Male'} photo={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
          <Simpsons name={'March'} surname={'Simpson'} age={'43'} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
          <Simpsons name={'Bart'} surname={'Simpson'} age={'10'} gender={'Male'} photo={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>
          <Simpsons name={'Maggy'} surname={'Simpson'} age={'2'} gender={'Female'} photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>

            <h1>Rick and Morty</h1>
        <RickAndMorty id={'451'} name={'Roys Son'} status={'Alive'} species={'Human'}  gender={'Male'} photo={"https://rickandmortyapi.com/api/character/avatar/451.jpeg"}/>
        <RickAndMorty id={'123'} name={'Fat Morty'} status={'Alive'} species={'Human'}  gender={'Male'} photo={"https://rickandmortyapi.com/api/character/avatar/123.jpeg"}/>
        <RickAndMorty id={'633'} name={'Train Cops'} status={'Alive'} species={'Human'}  gender={'Female'} photo={"https://rickandmortyapi.com/api/character/avatar/633.jpeg"}/>
        <RickAndMorty id={'720'} name={'Eddie'} status={'Alive'} species={'Human'}  gender={'Male'} photo={"https://rickandmortyapi.com/api/character/avatar/720.jpeg"}/>
        <RickAndMorty id={'292'} name={'Rick K-22'} status={'Alive'} species={'Human'}  gender={'Male'} photo={"https://rickandmortyapi.com/api/character/avatar/292.jpeg"}/>
        <RickAndMorty id={'300'} name={'Roger'} status={'Alive'} species={'Human'}  gender={'Male'} photo={"https://rickandmortyapi.com/api/character/avatar/300.jpeg"}/>
    </div>
  );
}

export default App;
