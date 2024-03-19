export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const itemsTotal = items.length;
  const itemsPacked = items.filter((item) => item.packed === true).length;
  const percent = Math.round((itemsPacked / itemsTotal) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You are ready to fly`
          : `You have ${itemsTotal} items on your list, and you already packed ${itemsPacked} items ${percent} %`}
      </em>
    </footer>
  );
}
