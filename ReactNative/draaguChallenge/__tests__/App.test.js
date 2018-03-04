import 'react-native';
import React from 'react';
import { ListView } from 'react-native'
import ButtonAdd from '../src/app/components/ButtonAdd'
import CardPost from '../src/app/components/CardPost'
import HomeView from '../src/app/components/HomeView'
import ListViewApp from '../src/app/components/ListViewApp'
//Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import "isomorphic-fetch"

it('render correctly component ButtonAdd', () => {
  const button = renderer.create(
    <ButtonAdd />
  );
});
it('rendering component CardPost', () => {
  const postForCard = {
    id: 1,
    title: "testeando Card",
    body: "texto card body"
  }

  const card = renderer.create(
    <CardPost content={postForCard} />
  );

});

it('rendering component HomeView', () => {
  const home = renderer.create(
    <HomeView screenProps={{
      dataSourceList: new ListView.DataSource({
        rowHasChanged: (r1, r2) => {
          r1 !== r2
        }
      })
    }} />
  );

});

it('rendering component ListViewApp', () => {
  const list = renderer.create(
    <ListViewApp screenProps={{
      dataSourceList: new ListView.DataSource({
        rowHasChanged: (r1, r2) => {
          r1 !== r2
        }
      })
    }} />
  );
  expect(list).toMatchSnapshot();
});