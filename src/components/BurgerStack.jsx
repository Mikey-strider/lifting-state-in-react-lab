

const BurgerStack = (props) => {
  return (
    props.stack.length > 0 ?
    <ul>
      {props.stack.map((ingredient, idx) => (
        <div key={idx}>
          <li style={{ backgroundColor: ingredient.color}}>
            {ingredient.name}
          </li>
          <button onClick={() => props.removeFromBurger(idx)}>-</button>
        </div>
      ))}
    </ul> :
    <p>No Ingredients</p>
  )
};

export default BurgerStack;
