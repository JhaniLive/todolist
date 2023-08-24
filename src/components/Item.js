const Item = ({ item, onDelete, handleChange }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleChange(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
