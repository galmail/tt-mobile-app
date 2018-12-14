import React, { Component } from "react";
import {
  Header, Left, Container, Button, Body, Title, Right, Icon, Text, Content } from "native-base";
import { StatusBar } from "react-native";
import styles from "./styles";

export default class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <StatusBar translucent={false}/>
        <Header
          noShadow
          iosBarStyle={"dark-content"}
          androidStatusBarColor={"#fff"}
          style={{ borderBottomWidth: 1 }}>
          <Left style={styles.headerLeft}>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" style={{ color: "#000" }}/>
            </Button>
          </Left>
          <Body style={styles.headerBody}>
          <Title style={styles.textBody}>Settings</Title>
          </Body>
          <Right style={styles.headerRight}/>
        </Header>
        <Content>
          <Text style={{ alignSelf: "center", marginTop: 10}}>Here goes the settings screen</Text>
        </Content>
      </Container>
    );
  }
}
