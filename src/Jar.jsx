import Water from './Water';
import PropTypes from 'prop-types';

function Jar({ waterLevel }) {
  return (
    <div className="border-2 border-t-0 rounded-b-2xl max-w-[400px] h-[60vh] overflow-hidden mx-auto grid content-stretch mt-10">
      <Water waterLevel={waterLevel} />
    </div>
  );
}
Jar.propTypes = {
  waterLevel: PropTypes.number.isRequired,
};

export default Jar;
