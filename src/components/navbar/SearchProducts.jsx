import React , {useState , useEffect}from 'react'
import { ApiClient } from "../api/services";
import '../../styles/navbar.css';


const SearchProducts=() => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const apiClient = new ApiClient();

  useEffect(() => {
    const getSearchResults = async () => {
      if (searchTerm && searchTerm.length >= 3) {
        try {
          const response = await apiClient.getProductName(searchTerm);
          setSearchResults(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setSearchResults([]);
      }
    };

    getSearchResults();
  }, [searchTerm]);

  const handleInputChange = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
  };

  return (
    <nav className='position-relative'>
      <input type="search" className="form-control mx-3" onChange={handleInputChange} placeholder="¿Qué producto estás buscando?" id='searchProduct'/>
      {searchResults.length > 0 && (
        <ul className='searchProdName list-group' id='searchProdName'>
          {searchResults.map((result) => (
            <a key={result.id} className="list-group-item list-group-item-action">{result.nombre} ${result.precio}</a>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default SearchProducts;