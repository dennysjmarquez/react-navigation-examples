import React from 'react';
import Menu from './navigators/Menu';

class App extends React.Component {
  render() {
    return (
      <Menu
        onNavigationStateChange={() => ({ /* don't show navigation change logs */ })}
      />
    );
  }
}

export default App;
