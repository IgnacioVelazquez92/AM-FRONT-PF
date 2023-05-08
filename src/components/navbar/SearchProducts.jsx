import React , {useState , useEffect}from 'react'
import { ApiClient } from "../api/services";
import '../../styles/navbar.css';

const SearchProducts=() => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiClient = new ApiClient();

  const handleInputChange = async (event) => {
    const searchProd= event.target.value;
    if(searchProd){

      try {
        const response = await apiClient.getUsersName(searchProd);
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(searchProd);
  };



  return (
    <nav className='position-relative'>
      <input type="search"  className="form-control mx-3" onChange={handleInputChange} placeholder="¿Qué producto estas buscando?" id='searchProduct'/>
      {searchResults && (
        <ul className='searchProdName list-group'>
          {searchResults.map((result) => (
            <a key={result.id} className="list-group-item list-group-item-action">{result.name} {result.lastName} cel: {result.cellphone}</a>
          ))}
        </ul>
      )
      }
    </nav>
  );
}

export default SearchProducts;
