import React, { useState, useEffect } from 'react';
// import connect from '@vkontakte/vk-connect';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);



  const api = new VKMiniAppAPI();

  // Initializing app
  api.initApp();

  // Using methods
  api.getUserInfo().then(userInfo => {
    setUser(userInfo);
    setPopout(null);
  });




  // connect.subscribe((e) => console.log(e.detail.source));

  // if (connect.supports("VKWebAppResizeWindow")) {
  //   connect.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
  // }

  useEffect(() => {
    // connect.subscribe(({detail: {type, data}}) => {
    //   if (type === 'VKWebAppUpdateConfig') {
    //     const schemeAttribute = document.createAttribute('scheme');
    //     schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
    //     document.body.attributes.setNamedItem(schemeAttribute);
    //   }
    // });
    //
    // async function fetchData() {
    //   const user = await connect.sendPromise('VKWebAppGetUserInfo');
    //   setUser(user);
    //   setPopout(null);
    // }
    //
    // fetchData();

    // connect
    //   .sendPromise('VKWebAppGetUserInfo')
    //   .then(data => {
    //     // Обработка события в случае успеха
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     //Обработка событияв случае ошибки
    //     console.log(error);
    //   });

  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id='home' fetchedUser={fetchedUser} go={go} />
      <Persik id='persik' go={go} />
    </View>
  );
};

export default App;

