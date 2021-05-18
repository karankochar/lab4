import Data from './booklist.json';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container">
      { 
        <table className="table table-bordered">
         <thead>
           <tr>
           <th>Book Id</th>
           <th>Book Title</th>
           <th>Book Author</th>
           <th>Book Year of publish</th>
           </tr>
           <tr>
           <th><input type='text' 
                placeholder='Search By Id' 
                onChange={(e)=> {setSearchTerm(e.target.value)}}>
                </input></th>
           <th><input type='text' 
                placeholder='Search By Title' 
                onChange={(e)=> {setSearchTerm(e.target.value)}}>
                </input>
          </th>
           <th><input type='text' 
                placeholder='Search By Author' 
                onChange={(e)=> {setSearchTerm(e.target.value)}}>
                </input></th>
           <th><input type='text' 
                placeholder='Search By Year' 
                onChange={(e)=> {setSearchTerm(e.target.value)}}>
                </input></th>
           </tr>
          </thead>
          <tbody>
            {Data.filter((book)=>{
              if(searchTerm ===''){
                return book
              }
              else if(book.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return book;
              }
              else if(book.author.toLowerCase().includes(searchTerm.toLowerCase())){
                return book;
              }
              else if(book.id == searchTerm){
                return book;
              }
              else if(book.year == searchTerm){
                return book;
              }
            }).map(book=> {
              return(
                <tr>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.year}</td>
              </tr>
              );
              
            })}
          </tbody>
       </table>

      }
    </div>
  );
}

export default App;
