import PTT from 'ptt-client-local';
export const CONNECTION = 'CONNECTION';

const connect = (pttConfig = {}) => dispatch => {
  dispatch({ type: CONNECTION, status: 'connecting' });
  const ptt = new PTT(pttConfig);
  if (process.env.NODE_ENV !== 'production') {
    window.ptt = ptt;
  }
  ptt.once('connect', () => {
    dispatch({ type: CONNECTION, status: 'connected', ptt: ptt});
  });
};

export default connect;
