import "./Switchbar.scss";

const Switchbar = (props) => {
  const { sort, handleSort } = props;

  return (
    <>
      <input
        checked={sort}
        onChange={handleSort}
        className="react-switch-checkbox"
        id="reactSwitchNew1"
        type="checkbox"
      />

      <label className="react-switch-label" htmlFor="reactSwitchNew1">
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switchbar;
