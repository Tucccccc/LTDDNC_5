import React, { Component } from 'react'
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import image1 from "./img/images.jpg"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 1, price: 150000 }
  }

  onPressPlus = () => {
    this.setState({
      count: this.state.count + 1,
      price: this.state.price + 150000,
    })
  }

  onPressMinus = () => {
    this.setState({
      count: this.state.count - 1,
      price: this.state.price - 150000,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewHeader}>
          <View style={styles.viewHeader1}>
            <Image source={image1} style={styles.imageHeader}></Image>
          </View>

          <View style={styles.viewHeader2}>
            <Text style={styles.textHeader}>Nguyen Ham Tich Phan Va Ung Dung</Text>
            <Text style={styles.textHeader1}>Cung cap boi Tiki</Text>
            <Text style={styles.textPrice}>{this.state.price}</Text>

            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.btnMinus} onPress={this.onPressMinus}><Text>-</Text></TouchableOpacity>
              <Text style={styles.txtButtonNumber}>{this.state.count}</Text>
              <TouchableOpacity style={styles.btnPlus} onPress={this.onPressPlus}><Text>+</Text></TouchableOpacity>
              <Text style={styles.txtMuaSau}>Mua sau</Text>
            </View>
          </View>
        </View>

        <View style={styles.viewText}>
          <Text>Ma giam gia da luu</Text>
          <Text style={styles.txtXemTaiDay}>Xem tai day</Text>
        </View>

        <View style={styles.viewContainBorder}>
          <View style={styles.viewBorder}>
            <View style={[{ height: 25, width: 35, alignSelf: 'center', marginLeft: 10 }]}>
              <Button style={styles.btnYellow} color='#fffacd' title=''></Button>
            </View>
            <Text style={styles.txtMaGiamGia}>Ma giam gia</Text>
            <View style={[{ marginLeft: 80, alignSelf: 'center' }]}>
              <Button title='Ap dung'></Button>
            </View>
          </View>
        </View>

        <View style={[{ backgroundColor: '#d3d3d3', height: 10, marginLeft: '-10%', marginTop: '5%' }]}></View>

        <View style={[{ marginTop: '3%', display: 'flex', flexDirection: 'row' }]}>
          <Text>Ban co phieu qua tang Tiki/Got It/UrBox?</Text>
          <Text style={[{ marginLeft: 10, color: '#00bfff' }]}>Nhap tai day</Text>
        </View>

        <View style={[{ backgroundColor: '#d3d3d3', height: 10, marginLeft: '-10%', marginTop: '5%' }]}></View>

        <View style={[{ marginTop: '3%', display: 'flex', flexDirection: 'row' }]}>
          <Text style={[{ fontSize: 25, fontWeight: 'bold' }]}>Tam tinh</Text>
          <Text style={[{ marginLeft: '38%', alignSelf: 'center', fontSize: 25, fontWeight: 'bold', color: '#ff7f50', }]}>{this.state.price}</Text>
        </View>

        <View style={[{ backgroundColor: '#d3d3d3', height: '20%', marginLeft: '-10%', marginTop: '5%' }]}></View>

        <View style={[{ marginTop: '3%', display: 'flex', flexDirection: 'row' }]}>
          <Text style={[{ fontSize: 25, fontWeight: 'bold' }]}>Thanh tien</Text>
          <Text style={[{ marginLeft: '32%', alignSelf: 'center', fontSize: 25, fontWeight: 'bold', color: '#ff7f50', }]}>{this.state.price}</Text>
        </View>

        <View style={[{ marginRight: '5%', alignItems: 'center', marginTop: 15, height: '6%', backgroundColor: '#ff0000'}]}>
          <Pressable style={[{marginBottom: 'auto', marginTop: 'auto'}]}>
            <Text style={[{color: '#f0f8ff', fontSize: 20}]}>TIEN HANH DAT HANG</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: '5%',
  },

  viewHeader: {
    display: 'flex',
    flexDirection: 'row',
  },

  viewHeader1: {
    width: '65%',
  },

  imageHeader: {
    width: '50%',
  },

  textHeader: {
    width: '95%',
    fontWeight: 'bold',
  },

  textHeader1: {
    display: 'flex',
    paddingTop: 10,
  },

  viewHeader2: {
    width: '60%',
    marginLeft: -100,
  },

  textPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff7f50',
    paddingTop: 10,
  },

  viewButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },

  btnMinus: {
    backgroundColor: "#f5f5dc",
    width: 20,
    alignItems: 'center',
  },

  txtButtonNumber: {
    marginLeft: 10,
  },

  btnPlus: {
    backgroundColor: "#f5f5dc",
    marginLeft: 10,
    width: 20,
    alignItems: 'center',
  },

  txtMuaSau: {
    color: '#00bfff',
    fontWeight: 'bold',
    marginLeft: '30%',
  },

  viewText: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
  },

  txtXemTaiDay: {
    marginLeft: '6%',
    color: '#00bfff',
    fontWeight: 'bold',
  },

  viewContainBorder: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },

  viewBorder: {
    borderWidth: 1,
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  },

  txtMaGiamGia: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },

  btnYellow: {
    width: 100,
  },
});