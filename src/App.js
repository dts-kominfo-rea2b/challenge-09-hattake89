import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <main className="main">
        {
          contacts.map((contact) => {
            return <Contact data={contact}/>
          })
        }
        </main>
      </div>
    </div>
  );
}

export default App;
