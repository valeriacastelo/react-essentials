import './App.css';
import restaurant from "./restaurant.jpg"

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjetive} food around !!</p>

      <img src={restaurant} 
           height={150} 
           alt="napkin and fork on the table"/>

      <ul style={{textAlign : "left"}}>
        { props.dishes.map((dish) => 
            <li key={dish.id}>{dish.title}</li>
        )}
      </ul>
    </section>
  )
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni",
  "Salmon",
  "Tofu with Vegetebles",
  "Fish and Fries"
]

const dishesObj = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjetive="amazing" dishes={dishesObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  )
}

export default App;
