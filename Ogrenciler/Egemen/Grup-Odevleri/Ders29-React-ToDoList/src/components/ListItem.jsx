const ListItem = ({ item, removeTask, setTask }) => {
  // const date = new Date();
  return (
    <>
      <div>
        <input type="checkbox" />
        <h4>{item.task}</h4>
        <p>{item.desc}</p>
        <p>{item.addDate}</p>
        <p>{item.updateDate}</p>
        <button onClick={() => removeTask(item.id)}>Sil</button>
        <button onClick={() => setTask(item)}>Güncelle</button>
      </div>
    </>
  );
};

export default ListItem;
