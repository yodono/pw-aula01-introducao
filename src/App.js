import React, { Component } from 'react';
import './App.css';

import IndirectParent from './components/basic/IndirectParent';
import State from './components/basic/State';
import FamilyClone from './components/basic/FamilyClone';
import FamilyMemberClone from './components/basic/FamilyMemberClone';
import Family from './components/basic/Family';
import Card from './components/layout/Card';
import Properties from './components/basic/Properties';
import HelloWorld from './components/basic/HelloWorld';

class App extends Component {
  render() {
    return (
        <div className="app">
          <h1>React Examples</h1>

          <div className="cards">
            <Card title="Comunicação Indireta (de filho para pai)" color="#f7673b">
              <IndirectParent />
            </Card>

            <Card title="Estado" color="#ffb400">
              <State />
            </Card>

            <Card title="Componentes aninhados (CloneElement)" color="#82212e">
              <FamilyClone lastName="Yodono">
                <FamilyMemberClone name="Valter Massatoshi" />
                <FamilyMemberClone name="Walter" />
                <FamilyMemberClone name="Victor" />
                <FamilyMemberClone name="Vinicius Massatoshi" />
              </FamilyClone>
            </Card>

            <Card title="Componentes aninhados (Comunicação direta)" color="#d1495b">
              <Family lastName="Yodono" />
            </Card>

            <Card title="Propriedades" color="#91cb3e">
              <Properties name="Valter" lastName="Massatoshi Yodono" age={45} />
            </Card>

            <Card title="Olá Mundo!" color="#226ce0">
              <HelloWorld />
            </Card>
          </div>
        </div>
      );
  }
}

export default App;
