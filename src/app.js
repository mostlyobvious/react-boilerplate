import ReactDOM from 'react-dom';
import r from 'r-dom';

const Root = (props) => r.div(props.message);

ReactDOM.render(r(Root, { message: 'No siema.' }),
  document.getElementById('app'));
