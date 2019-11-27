import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Constants from '../../../constants/Constants'

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
})

const slides = [
  {
    key: 'somethun',
    title: 'Bem vindo ao Devezinho',
    text: 'Seu ponto de contato com a tecnologia',
    image: require('../../../assets/1.png'),
    backgroundColor: '#59b2ab',
    imageStyle: [{ height: 400, width: Constants.MAX_WIDTH }],
  },
  {
    key: 'somethun-dos',
    title: 'Aprenda programação se divertindo',
    text: 'E outras coisas legais',
    image: require('../../../assets/2.png'),
    backgroundColor: '#febe29',
    imageStyle: [{ height: 400, width: Constants.MAX_WIDTH }],
  },
  {
    key: 'somethun1',
    title: 'Leve suas skills para outro nível',
    text: 'Comece agora!',
    image: require('../../../assets/3.png'),
    backgroundColor: '#22bcb5',
    imageStyle: [{ height: 400, width: Constants.MAX_WIDTH }],
  },
]

export default class App extends React.Component {
  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    )
  }
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    )
  }
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={setTimeout(() => {
          this.props.navigation.push('SignUp')
        }, 5000)}
      />
    )
  }
}
