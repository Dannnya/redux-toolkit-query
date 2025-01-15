import { useGetGoodsQuery } from './redux/goodsAPI';
import Spinner from "./components/Spinner/Spinner";

export const App = () => {
  const { data = [], isLoading } = useGetGoodsQuery(1);
  return (
    <div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            { item.name }
          </li>
        ))}
        { isLoading &&  <h3 className='spinner'><Spinner className='spinner-icon'/></h3>}
      </ul>
    </div>
  )
}
