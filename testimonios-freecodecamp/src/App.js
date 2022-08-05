import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal' >
      <h1>FAVORITE LYRICS</h1>
      <Testimonio 
        nombre = 'Kim Jonghyun'
        pais = 'Corea del Sur'
        imagen = 'primero'
        cargo = 'Cantante'
        empresa = 'SHINee'
        testimonio = ' A warm winter has come again Coats, scarves, sweaters, mittens Even without those things, Im not cold Because youre always by my side   Lets be honest now, youve been disappointed in me, right? Yes, Ive been hurt by you too But like the snow melts in warm winters All of those things became memories now   Grateful feelings keep remaining Your words keep lingering in my ears So its not cold at all today, on this warm winter Because youre always by my side ' />
      <Testimonio
        nombre = 'Tom Odell'
        pais = 'Reino Unido'
        imagen = 'segundo'
        cargo= 'Cantante'
        empresa = 'Solista'
        testimonio = 'Oh, shut my eyes Lose myself in teenage lies If I fell in love a thousand times Would it all make sense? Cause I Ive been feeling pretty small Sometimes Feel like Im slipping down walls And every line I ever get a hold It seems to break Ca-call you up I can tell you just how much No, no maybe Ill just get drunk And it will all make sense Or if I werent so nice I convince my friends that you were right I can promise you my heart dont cry Would it all make sense?' />
      <Testimonio
        nombre = 'Lee Jin ki'
        pais = 'Corea del Sur'
        imagen = 'tercero'
        cargo = 'Cantante'
        empresa = 'SHINee'
        testimonio = 'If you always frown like youre serious, Youll eat half-heartedly I wanna tell you (something important) I was going to bump into someone again Luckily I could get out of the way (be careful) Im getting nervous (always) Put that phone away Listen to me Look at me Well It’s not always blue sky But I want to look up at the sky Smiling with you (Life goes on) Always smiling with you (Life goes on) Even if we dont know 1 second ahead and are worried Smiling with you' />
     
     </div>
    </div>
  );
}

export default App;
