const ButtonClose = ({ closeModal }) => {
  return (
    <span className="btn-close" onClick={closeModal}>
      <i className="fas fa-times close"></i>
    </span>
  );
};

export default ButtonClose;
