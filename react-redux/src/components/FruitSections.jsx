import { useDispatch, useSelector } from "react-redux";
import { buyFruit } from './../redux/fruit/fruitAction';

const FruitSections = () => {

  const noOfFruits = useSelector((state) => state.fruit.noOfFruit);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(buyFruit(1));
  }

  return (
    <div>
      <h2>No Of Fruit</h2>
     <div>{noOfFruits}</div>
     <button onClick={handleClick}>Buy Frits</button>
    </div>
  )
}

export default FruitSections;