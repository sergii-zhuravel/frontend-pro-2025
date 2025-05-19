function Button({ className, id, title, onClick }) {
  const handleDeleteClick = () => {
    onClick(id);
  };

  return (
    <button className={className} onClick={handleDeleteClick}>
      {title}
    </button>
  );
}

export default Button;
