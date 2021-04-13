import '../../sass/Balance.scss';
import NewButton from './NewButton';

const Balance = ({ total }) => {
  const { pathname } = window.location;

  return (
    <div className="balance-container">
      <h2 className="balance">
        {(pathname === '/dashboard' &&
          `Balance dispobible: $${
            total && total < 0 ? 0 : total.toFixed(2)
          }`) ||
          (pathname === '/received' &&
            `Total recibido: $${total && total.toFixed(2)}`) ||
          (pathname === '/sent' &&
            `Total enviado: $${total && total.toFixed(2)}`)}
      </h2>
      <NewButton />
    </div>
  );
};

export default Balance;
