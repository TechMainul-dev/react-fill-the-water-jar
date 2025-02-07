import PropTypes from 'prop-types';

function Water({ waterLevel }) {
  return (
    <div
      className="self-end bg-blue-300 grid items-center text-3xl font-bold min-h-0 transition-all duration-500"
      style={{ height: `${waterLevel}%` }}
    >
      <span className={waterLevel < 10 ? 'mt-[-35px]' : ''}>{waterLevel}%</span>
    </div>
  );
}

Water.propTypes = {
  waterLevel: PropTypes.number.isRequired,
};

export default Water;
