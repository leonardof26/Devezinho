import React, { Component, useState } from 'react'
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import Constants from '../../../constants/Constants'
import { GameEngine } from 'react-native-game-engine'
import Head from '../../components/Head'
import Target from '../../components/Target'
// if trouble -> remove {}
import { GameLoop } from '../../components/GameLoop'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.reset = this.reset.bind(this)
    this.submitCommand = this.submitCommand.bind(this)
    this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE
    this.engine = null
    this.state = {
      running: true,
      pause: false,
      command: '',
    }
  }
  onEvent = e => {
    if (e.type === 'game-over') {
      alert('Fim de jogo')
      this.setState({
        running: false,
      })
      this.engine.stop()
      this.props.navigation.navigate('Ranking')
      // this.setState({
      //   running: true
      // });
    }
    if (e.type === 'winner') {
      alert('Parabéns, voce conseguiu!')
      this.setState({
        running: false,
      })
      this.engine.stop()
      this.props.navigation.navigate('Ranking')
      // this.setState({
      //   running: true
      // });
    }
  }
  reset = () => {
    this.engine.swap({
      head: {
        position: [0, 0],
        xspeed: 1,
        yspeed: 0,
        nextMove: 10,
        updateFrequency: 10,
        size: 20,
        renderer: <Head />,
      },
      target: {
        position: [
          this.randomBetween(0, Constants.GRID_SIZE - 1),
          this.randomBetween(0, Constants.GRID_SIZE - 1),
        ],
        size: 20,
        renderer: <Target />,
      },
    })
    this.setState({
      running: true,
    })
  }

  randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) - 1)
  }
  submitCommand() {
    console.log(this.state.command)

    switch (this.state.command) {
      case 'moveUp()':
        console.log('up')
        this.engine.dispatch({ type: 'move-up' })
        break
      case 'moveLeft()':
        console.log('left')
        this.engine.dispatch({ type: 'move-left' })
        break
      case 'moveRight()':
        console.log('right')
        this.engine.dispatch({ type: 'move-right' })
        break
      case 'moveDown()':
        console.log('down')
        this.engine.dispatch({ type: 'move-down' })
        break
      default:
        alert('Comando não permitido! ')
        break
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={ref => {
            this.engine = ref
          }}
          style={{
            width: this.boardSize,
            height: this.boardSize,
            flex: null,
            backgroundColor: '#dddd',
          }}
          systems={[GameLoop]}
          entities={{
            head: {
              position: [1, 0],
              // if zero -> holds until input
              xSpeed: 0,
              ySpeed: 0,
              updateFrequency: 120,
              nextMove: 1,
              size: Constants.CELL_SIZE,
              renderer: <Head />,
            },
            target: {
              position: [
                this.randomBetween(0, Constants.GRID_SIZE - 1),
                this.randomBetween(0, Constants.GRID_SIZE - 1),
              ],

              size: Constants.CELL_SIZE,
              renderer: <Target />,
            },
          }}
          onEvent={this.onEvent}
          running={this.state.running}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Digite aqui o próximo passo do seu devinho"
            onChangeText={newCommand => this.setState({ command: newCommand })}
            value={this.state.command}
            onSubmitEditing={this.submitCommand}
            blurOnSubmit={true}
          />
        </View>
        <ModalDropdown
          style={{
            width: Constants.MAX_WIDTH,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          dropdownStyle={{
            justifyContent: 'center',
            alignSelf: 'center',
            width: Constants.MAX_WIDTH,
          }}
          options={[
            'moveUp() - Para mover o Devzinho para cima',
            'moveDown() - Para mover o Devzinho para baixo',
            'moveLeft() - Para mover o DevZinho para a esquerda',
            'moveRight() - Para mover o Devzinho para a direita',
          ]}
        >
          <Text>Dicas</Text>
        </ModalDropdown>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddd',
    justifyContent: 'center',
    paddingBottom: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: Constants.MAX_WIDTH,
  },
  inputText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  controls: {
    width: 300,
    height: 300,
    flexDirection: 'column',
  },
  controlRow: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  control: {
    // height: 100,
    // width: 200,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#7159c1',
  },
  functionStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})
