import PTT from 'ptt-client-local';
export const CONNECTION = 'CONNECTION';

const connect = (pttConfig = {}) => dispatch => {
  dispatch({ type: CONNECTION, status: 'connecting' });
  const ptt = new PTT(pttConfig);
  ptt.once('connect', () => {
    dispatch({ type: CONNECTION, status: 'connected', ptt: ptt});
  });
};

export default connect;
