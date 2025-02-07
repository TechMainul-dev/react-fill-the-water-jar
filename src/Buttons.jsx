import PropTypes from 'prop-types';

function Buttons({ onWaterMotor }) {
  const btnClass =
    'border-2 bg-blue-300 text-4xl px-10 py-1 rounded-4xl transition-all duration-200 cursor-pointer';
  return (
    <div className="flex gap-3 mx-auto w-max my-5">
      <button
        className={`${btnClass} bg-red-500 pb-2 hover:bg-red-700`}
        onClick={() => onWaterMotor(false)}
      >
        -
      </button>
      <button
        className={`${btnClass} bg-green-500 hover:bg-green-700`}
        onClick={() => onWaterMotor(true)}
      >
        +
      </button>
    </div>
  );
}

Buttons.propTypes = {
  onWaterMotor: PropTypes.func.isRequired,
};

export default Buttons;
