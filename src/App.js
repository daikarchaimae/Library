import React,{useState} from "react";
import BookList from './components/BookList';   
import Footer from "./Footer";                           
import './App.css';
const books = [
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, rating: 4.8,img:'1984.jpeg' },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", year: 1960, rating: 4.9,img:'img2.jpeg' },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", year: 1925, rating: 4.4 ,img:'img3.jpeg'},
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813, rating: 4.7 ,img:'img4.jpeg'},
  { title: "Moby-Dick", author: "Herman Melville", genre: "Adventure", year: 1851, rating: 4.1 ,img:'img5.jpeg'},
  { title: "War and Peace", author: "Leo Tolstoy", genre: "Historical", year: 1869, rating: 4.5,img:'img6.jpeg'},
  { title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophical", year: 1988, rating: 4.7 ,img:'img7.jpeg'},
  { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", year: 1932, rating: 4.6 ,img:'img8.jpeg'},
  { title: "Jane Eyre", author: "Charlotte Bronte", genre: "Romance", year: 1847, rating: 4.5 ,img:'img9.jpeg'},
  { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic", year: 1951, rating: 4.3 ,img:'img10.jpeg'},
];


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="divlogo">
     
          <h1 className="library" style={{ textAlign: "left",paddingLeft:"55px" }}>Library</h1>
        
       
       
       
    

      </div>
      <BookList books={books} />
      <Footer/>
    </div>
  
  );
}

export default App;