import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>

        <Route>

        </Route>
        
        <Route>

        </Route>

      </Switch>
    </div>
  );
};

export default App;
