import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SignUp from './pages/SignUp'
import Ranking from './pages/Ranking'
import Exercise from './pages/Exercise'
import Intro from './pages/Intro'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Intro,
      SignUp,
      Ranking,
      Exercise,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f1f1f1',
        },
      },
    }
  )
)

export default Routes
