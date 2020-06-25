import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Component } from 'react';

export default class App extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = {
      name: "",
      coordinates: "",
      email: "",
      gender: "",
      age: "",
      username: "",
      password: "",
      cell: ""
    }
  }

  componentDidMount() {
    this._isMounted = true

    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then((data) => {
        this.setState({name: data.results[0].name.first + " " + data.results[0].name.last})
        this.setState({age: data.results[0].registered.age + " yrs old"})
        this.setState({gender: data.results[0].gender})
        this.setState({coordinates: data.results[0].location.coordinates.latitude + ", " + data.results[0].location.coordinates.longitude})
        this.setState({email: data.results[0].email})
        this.setState({username: data.results[0].login.username})
        this.setState({password: data.results[0].login.password})
        this.setState({cell: data.results[0].phone})
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    return(
      <View>
        <View style={header.body}>
          <Text style={header.text}>Random Person Generator</Text>
        </View>
        <Text style={name.text}>{this.state.name}</Text>
        <Text style={data.text}>Age: {this.state.age}</Text>
        <Text style={data.text}>Gender: {this.state.gender}</Text>
        <Text style={data.text}>Coordinates: {this.state.coordinates}</Text>
        <Text style={data.text}>Email: {this.state.email}</Text>
        <Text style={data.text}>Username: {this.state.username}</Text>
        <Text style={data.text}>Password: {this.state.password}</Text>
        <Text style={data.text}>Phone Number: {this.state.cell}</Text>
        <View style={generateButton.body}>
          <Button 
            onPress={() => {
              fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then((data) => {
                  this.setState({name: data.results[0].name.first + " " + data.results[0].name.last})
                  this.setState({age: data.results[0].registered.age + " yrs old"})
                  this.setState({gender: data.results[0].gender})
                  this.setState({coordinates: data.results[0].location.coordinates.latitude + ", " + data.results[0].location.coordinates.longitude})
                  this.setState({email: data.results[0].email})
                  this.setState({username: data.results[0].login.username})
                  this.setState({password: data.results[0].login.password})
                  this.setState({cell: data.results[0].phone})
                })
            }} 
            color="white" 
            title="Generate"
           />
        </View>
      </View>
    )
  }
}

const header = StyleSheet.create({
  body: {
    backgroundColor: "#ed7f18",
    height: 100
  },
  text: {
    color: "white",
    paddingTop: 50,
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 30
  }
})

const name = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 40,
    paddingLeft: 10,
    paddingTop: 10
  }
})

const data = StyleSheet.create({
  text: {
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 20
  }
})

const generateButton = StyleSheet.create({
  body: {
    backgroundColor: "#ed7f18",
    width: 200,
    marginLeft: "25%",
    marginTop: 50
  }
})