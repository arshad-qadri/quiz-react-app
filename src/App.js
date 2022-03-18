import './App.css';
const data = [
  {
    first_name: "Jacky"
  },
  {
    first_name: "Gus"
  }, {
    first_name: "Lyndy"
  }, {
    first_name: "Kalinda"
  }, {
    first_name: "Dorry"
  }, {
    first_name: "Mead"
  }, {
    first_name: "Robinet"
  }, {
    first_name: "Terrance"
  }, {
    first_name: "Barron"
  }, {
    first_name: "Konstanze"
  }, {
    first_name: "Van"
  }, {
    first_name: "Hobard"
  }, {
    first_name: "Caterina"
  }, {
    first_name: "Candi"
  }, {
    first_name: "Danny"
  }, {
    first_name: "Constancia"
  }, {
    first_name: "Matteo"
  }, {
    first_name: "Hildy"
  }, {
    first_name: "Remington"
  }, {
    first_name: "Godiva"
  }, {
    first_name: "Bernadina"
  }, {
    first_name: "Bronnie"
  }, {
    first_name: "Katerine"
  }, {
    first_name: "Eleanor"
  }, {
    first_name: "Lyndy"
  }, {
    first_name: "Jayme"
  }, {
    first_name: "Rossie"
  }, {
    first_name: "Nalani"
  }, {
    first_name: "Kienan"
  }, {
    first_name: "Vite"
  }, {
    first_name: "Janka"
  }, {
    first_name: "Shelley"
  }, {
    first_name: "Nell"
  }, {
    first_name: "Vaclav"
  }, {
    first_name: "Eric"
  }, {
    first_name: "Joel"
  }, {
    first_name: "Kathrine"
  }, {
    first_name: "Judy"
  }, {
    first_name: "Robyn"
  }, {
    first_name: "Irwin"
  }, {
    first_name: "Ashla"
  }, {
    first_name: "Rad"
  }, {
    first_name: "Sydel"
  }, {
    first_name: "Hanan"
  }, {
    first_name: "Dosi"
  }, {
    first_name: "Dominica"
  }, {
    first_name: "Ara"
  }, {
    first_name: "Norbert"
  }, {
    first_name: "Chadd"
  }, {
    first_name: "Alli"
  }, {
    first_name: "Gregg"
  }, {
    first_name: "Paige"
  }, {
    first_name: "Orella"
  }, {
    first_name: "Shantee"
  }, {
    first_name: "Jo-anne"
  }, {
    first_name: "Tony"
  }, {
    first_name: "Winny"
  }, {
    first_name: "Naoma"
  }, {
    first_name: "Kilian"
  }, {
    first_name: "Ky"
  }, {
    first_name: "Willette"
  }, {
    first_name: "Dukie"
  }, {
    first_name: "Vilhelmina"
  }, {
    first_name: "Linnet"
  }, {
    first_name: "Harriott"
  }, {
    first_name: "Aggie"
  }, {
    first_name: "Sascha"
  }, {
    first_name: "Gladys"
  }, {
    first_name: "Karyn"
  }, {
    first_name: "Biddy"
  }, {
    first_name: "Orella"
  }, {
    first_name: "Callean"
  }, {
    first_name: "Nelle"
  }, {
    first_name: "Joli"
  }, {
    first_name: "Orelie"
  }, {
    first_name: "Berta"
  }, {
    first_name: "Josie"
  }, {
    first_name: "Martguerita"
  }, {
    first_name: "Frannie"
  }, {
    first_name: "Ennis"
  }, {
    first_name: "Goldia"
  }, {
    first_name: "Florian"
  }, {
    first_name: "Blakeley"
  }, {
    first_name: "Joscelin"
  }, {
    first_name: "Travis"
  }, {
    first_name: "Siusan"
  }, {
    first_name: "Marisa"
  }, {
    first_name: "Caesar"
  }, {
    first_name: "Mattias"
  }, {
    first_name: "Evangeline"
  }, {
    first_name: "Roseann"
  }, {
    first_name: "Yvette"
  }, {
    first_name: "Anatollo"
  }, {
    first_name: "Kara-lynn"
  }, {
    first_name: "Waite"
  }, {
    first_name: "Nanny"
  }, {
    first_name: "Erminie"
  }, {
    first_name: "Marys"
  }, {
    first_name: "Andros"
  }, {
    first_name: "Sheri"
  }];
const chars = [
  { char: "A" },
  { char: "B" },
  { char: "C" },
  { char: "D" },
  { char: "E" },
  { char: "F" },
  { char: "G" },
  { char: "H" },
  { char: "I" },
  { char: "J" },
  { char: "K" },
  { char: "L" },
  { char: "M" },
  { char: "N" },
  { char: "O" },
  { char: "P" },
  { char: "Q" },
  { char: "R" },
  { char: "S" },
  { char: "T" },
  { char: "U" },
  { char: "V" },
  { char: "W" },
  { char: "X" },
  { char: "Y" },
  { char: "Z" },
];
function App() {
  return (
   <div className='App'>
   {
     chars.map((item)=>(
       <div>
         {
           data.filter((d)=>d.first_name.toUpperCase().startsWith(item.char)).length>0 &&
           <p style={{color:"red"}}>{item.char}</p>
         }
         {
           data.filter((d)=>d.first_name.toUpperCase().startsWith(item.char)).map(a=>(
             <p>{a.first_name}</p>
           ))
         }
       </div>
     ))
   }
   </div>
  );
}

export default App;