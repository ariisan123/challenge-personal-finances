import '../../sass/Operation_Head.scss';
const OperationHead = ({ title }) => {
  return (
    <div className="operation-head">
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default OperationHead;
