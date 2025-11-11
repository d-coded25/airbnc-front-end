import './Main.css';

import PropertyGrid from './PropertyGrid';

function Main(props) {
  const { properties } = props;

  return (
    <main className="main">
      <PropertyGrid properties={properties} />
    </main>
  );
}

export default Main;
