import { useState } from 'react';
import { useGetGoodsQuery, useAddGoodsMutation, useDeleteGoodsMutation } from './redux/goodsAPI';
import Spinner from "./components/Spinner/Spinner";

export const App = () => {
  const [count, setCount] = useState('');
  const [newProduct, setNewProduct] = useState('');
  const { data = [], isLoading } = useGetGoodsQuery(count);
  const [addProduct, { isError }] = useAddGoodsMutation();
  const [deleteProduct] = useDeleteGoodsMutation();

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct('');
    }
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id).unwrap();
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <button onClick={ handleAddProduct }> Add Product </button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value ="" >all</option>
          <option value ="1" >1</option>
          <option value ="2" >2</option>
          <option value ="3" >3</option>
        </select>
      </div>
      <ul>
        {data.map(item => (
          <li key={item.id} onClick={() => handleDeleteProduct(item.id)}>
            { item.name }
          </li>
        ))}
        { isLoading &&  <h3 className='spinner'><Spinner className='spinner-icon'/></h3>}
      </ul>
    </div>
  )
}
