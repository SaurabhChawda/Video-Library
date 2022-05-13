import "./modal.css";
import { useAuth } from "../../Contexts/Index";
export const Modal = ({ value }) => {
  const { isOpen, setIsOpen } = value;
  const { logoutCredentials } = useAuth();
  return (
    <div className="overlay">
      <div className="modal">
        <h3 className="modal__text">Are you sure you want Logout ?</h3>
        <div className="modal__btn--container">
          <button
            className="modal__btn--demo modal__btn--yes"
            onClick={() => {
              setIsOpen(!isOpen);
              logoutCredentials();
            }}
          >
            Yes
          </button>
          <button className="modal__btn--demo modal__btn--no" onClick={() => setIsOpen(!isOpen)}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};
