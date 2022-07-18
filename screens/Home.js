import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity

} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import * as Animatable from 'react-native-animatable';
import {Icon, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { Dropdown } from 'react-native-element-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingLabelInput } from 'react-native-floating-label-input';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
const { width, height } = Dimensions.get("screen");


const data = [
  { label: 'Farmer', value: 'farmer' },
  { label: 'Farmer aggregator', value: 'farmer_aggregator' },
  { label: 'Fpo', value: 'fpo' },
  { label: 'Source market - Private', value: 'source_market_private' },
  { label: 'Source market suppliers', value: 'source_market_suppliers' },
  { label: 'Apmc registered suppliers', value: 'apmc_registered_suppliers' },
  { label: 'Regional market vendor', value: 'regional_market_vendor' },
];



class Home extends React.Component {

  initialstate = {
   
    farmer: false,
    farmer_aggregator: false,
    fpo: false,
    source_market_private: false,
    source_market_suppliers: false,
    apmc_registered_suppliers: false,
    regional_market_vendor: false,
    inValidMobile:false,

    name: '',
    address: '',
    location: '',
    mobnumber: '',
    altnumber: '',
    tos: '',
    ref_market_name: '',
    product_name: '',
    variety_of_product: '',
    current_price: '',
    current_selling_market: '',
    product_grown_areas: '',
    yield_prediction: '',
    product_photos_videos: '',
    nearest_market: '',
    products_regularly_grown_in_your_land: '',
    seasonal_data_of_product_grown_in_your_area: '',
    additional_information: '',
    working_experience: '',
    market_name: '',
    shop_name: '',
    mark: '',
    apmc_name: '',
    apmc_license_no: '',
    no_of_farmers_in_hand: '',
    source_data_of_a_product: '',
    arrival_season: '',
    season: '',
    specialised_products: ''


  }
  state = {
    animating: true,
    fieldmand:false,
    farmer: false,
    farmer_aggregator: false,
    fpo: false,
    source_market_private: false,
    source_market_suppliers: false,
    apmc_registered_suppliers: false,
    regional_market_vendor: false,
    inValidMobile:false,

    name: '',
    address: '',
    location: '',
    mobnumber: '',
    altnumber: '',
    tos: '',
    ref_market_name: '',
    product_name: '',
    variety_of_product: '',
    current_price: '',
    current_selling_market: '',
    product_grown_areas: '',
    yield_prediction: '',
    product_photos_videos: '',
    nearest_market: '',
    products_regularly_grown_in_your_land: '',
    seasonal_data_of_product_grown_in_your_area: '',
    additional_information: '',
    working_experience: '',
    market_name: '',
    shop_name: '',
    mark: '',
    apmc_name: '',
    apmc_license_no: '',
    no_of_farmers_in_hand: '',
    source_data_of_a_product: '',
    arrival_season: '',
    season: '',
    specialised_products: ''


  }
  componentDidMount = () => this.setState({
    animating: false
  })

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
    if(key=='mobnumber'){
      if (val.trim().length <= 10) {
        this.setState({ inValidMobile: true })
    }else{
      this.setState({ inValidMobile: false })
    }
  }

  }

  resetState = () => {
    this.setState(this.initialstate)
    console.log("State resetted")
  };

  displayfields = (text) => {
    // console.log(text)
    switch (text) {
      case 'farmer':
        return (
          this.setState({ farmer: true }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: false })
        );
      case 'farmer_aggregator':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: true }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: false })

        );
      case 'fpo':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: true }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: false })

        );
      case 'source_market_private':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: true }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: false })

        );
      case 'source_market_suppliers':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: true }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: false })

        );
      case 'apmc_registered_suppliers':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: true }),
          this.setState({ regional_market_vendor: false })

        );
      case 'regional_market_vendor':
        return (
          this.setState({ farmer: false }),
          this.setState({ farmer_aggregator: false }),
          this.setState({ fpo: false }),
          this.setState({ source_market_private: false }),
          this.setState({ source_market_suppliers: false }),
          this.setState({ apmc_registered_suppliers: false }),
          this.setState({ regional_market_vendor: true })

        );

      default:
        return undefined;
    }
  };

  submithandle = () => {
 
    // console.log('Submit')
    if (this.state.name=='' || this.state.mobnumber==''  || this.state.location==''  ) {
           this.setState({ fieldmand: true })
           Alert.alert("Please fill mandatory Fields","* Name \n* Mobile Number \n* Location *")
          
          // console.log(this.state.fieldmand)
    } else {
      this.setState({ fieldmand: false })
    const url = "http://192.168.1.12:5000/";
    const options = {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        address: this.state.address,
        location: this.state.location,
        mobnumber: this.state.mobnumber,
        altnumber: this.state.altnumber,
        tos: this.state.tos,
        ref_market_name: this.state.ref_market_name,
        product_name: this.state.product_name,
        variety_of_product: this.state.variety_of_product,
        current_price: this.state.current_price,
        current_selling_market: this.state.current_selling_market,
        product_grown_areas: this.state.product_grown_areas,
        yield_prediction: this.state.yield_prediction,
        product_photos_videos: this.state.product_photos_videos,
        nearest_market: this.state.nearest_market,
        products_regularly_grown_in_your_land: this.state.products_regularly_grown_in_your_land,
        seasonal_data_of_product_grown_in_your_area: this.state.seasonal_data_of_product_grown_in_your_area,
        additional_information: this.state.additional_information,
        working_experience: this.state.working_experience,
        market_name: this.state.market_name,
        shop_name: this.state.shop_name,
        mark: this.state.mark,
        apmc_name: this.state.apmc_name,
        apmc_license_no: this.state.apmc_license_no,
        no_of_farmers_in_hand: this.state.no_of_farmers_in_hand,
        source_data_of_a_product: this.state.source_data_of_a_product,
        arrival_season: this.state.arrival_season,
        season: this.state.season,
        specialised_products: this.state.specialised_products,

      })
    
    };


    fetch(url, options)
      .then((response) => response.json())
      .then((apidata) => {

        if (apidata.Status == 'Success') {
          Alert.alert("Success","Data Submitted Successfull!")
          this.resetState()
        } else {
          Alert.alert("Failed!"," Data Submission Failed!  Please retry")
 
        }
      })
      .catch((error) => {
        console.log(error);

        Alert.alert('Network Failed', 'Please check your connection and try again', [
          {
            text: 'Retry',
            onPress: () => {
              console.log("Retry Clicked");
            }
          }
        ]);
      })


    }


  }

  render() {
    const fieldmand = this.state.fieldmand
    //console.log(this.state.fieldmand)
    const farmer = this.state.farmer
    const inValidMobile = this.state.inValidMobile
    const farmer_aggregator = this.state.farmer_aggregator
    const fpo = this.state.fpo
    const source_market_private = this.state.source_market_private
    const source_market_suppliers = this.state.source_market_suppliers
    const apmc_registered_suppliers = this.state.apmc_registered_suppliers
    const regional_market_vendor = this.state.regional_market_vendor

    const name = this.state.name
    const address = this.state.address
    const location = this.state.location
    const mobnumber = this.state.mobnumber
    const altnumber = this.state.altnumber
    const tos = this.state.tos
    const ref_market_name = this.state.ref_market_name
    const product_name = this.state.product_name
    const variety_of_product = this.state.variety_of_product
    const current_price = this.state.current_price
    const current_selling_market = this.state.current_selling_market
    const product_grown_areas = this.state.product_grown_areas
    const yield_prediction = this.state.yield_prediction
    const product_photos_videos = this.state.product_photos_videos
    const nearest_market = this.state.nearest_market
    const products_regularly_grown_in_your_land = this.state.products_regularly_grown_in_your_land
    const seasonal_data_of_product_grown_in_your_area = this.state.seasonal_data_of_product_grown_in_your_area
    const additional_information = this.state.additional_information
    const working_experience = this.state.working_experience
    const market_name = this.state.market_name
    const shop_name = this.state.shop_name
    const mark = this.state.mark
    const apmc_name = this.state.apmc_name
    const apmc_license_no = this.state.apmc_license_no
    const no_of_farmers_in_hand = this.state.no_of_farmers_in_hand
    const source_data_of_a_product = this.state.source_data_of_a_product
    const arrival_season = this.state.arrival_season
    const season = this.state.season
    const specialised_products = this.state.specialised_products

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    //console.log(name)
    return (

      <ScrollView>
         <StatusBar backgroundColor='green' barStyle="light-content" />
        <Block middle>
          <StatusBar barStyle="light-content" />
          <ImageBackground
            source={Images.RegisterBackground}
            style={{ width, height: height * 0.818 }}
          >

            <Block middle>
              <Block style={styles.registerContainer}>

                <Block >
                  <ScrollView>
                    <Block center>
                      <KeyboardAvoidingView behaviour="position" enabled={true} >
                        <Block row style={styles.textt}>

                          <Text size={12} color={argonTheme.COLORS.MUTED}>
                            Supplier registration:
                          </Text>


                        </Block>



                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>

                          <FloatingLabelInput
                            containerStyles={styles.floatinput}
                            value={name}
                            label="Name *"
                            leftComponent={
                              <MaterialCommunityIcons name="account" size={16} />
                            }
                            rightComponent={
                              fieldmand &&
                                <MaterialCommunityIcons color='red' name="exclamation-thick" size={16} />
                            }
                            customLabelStyles={{
                              colorFocused: 'green',
                              fontSizeFocused: 12,
                            }}
                           r
                            onChangeText={value => this.onChangeText('name', value)}
                          />
                        </Block>
                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                          <FloatingLabelInput
                            containerStyles={styles.floatinput}
                            label="Address"
                            value={address}
                            leftComponent={
                              <MaterialCommunityIcons name="card-text" size={16} />
                            }

                            onChangeText={val => this.onChangeText('address', val)}
                          />
                        </Block>

                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                          <FloatingLabelInput
                            containerStyles={styles.floatinput}
                            label="Location *"
                            hint="City, District, ..."
                            value={location}
                            rightComponent={
                              fieldmand &&
                                <MaterialCommunityIcons color='red' name="exclamation-thick" size={16} />
                            }
                            leftComponent={
                              <MaterialCommunityIcons name="map" size={16} />
                            }

                            onChangeText={val => this.onChangeText('location', val)}
                          />
                        </Block>

                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                          <FloatingLabelInput
                            containerStyles={styles.floatinput}
                            label="Mobile Number *"
                           
                            value={mobnumber}
                            hintTextColor={'#aba'}
                            hint="99999-99999"
                            mask="99999-99999"
                            keyboardType="numeric"
                            rightComponent={
                              fieldmand &&
                                <MaterialCommunityIcons color='red' name="exclamation-thick" size={16} />
                            }
                            leftComponent={
                              <MaterialCommunityIcons name="phone" size={16} />
                            }
                            labelStyles={{
                              backgroundColor: '#fff',
                              paddingHorizontal: 5,
                              borderRadius: 3
                            }}

                            onChangeText={val => this.onChangeText('mobnumber', val)}
                          />
                           {inValidMobile &&
                              <Animatable.View animation="fadeInLeft" duration={500}>
                                  <Text style={{color:'red'}}>Mobile Number should be 10 digits</Text>
                              </Animatable.View>
                          }
                        </Block>

                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                          <FloatingLabelInput
                            containerStyles={styles.floatinput}
                            label="Alternate Mobile"
                            value={altnumber}
                           
                            hintTextColor={'#aba'}
                            hint=" 99999-99999"
                            mask="99999-99999"
                            keyboardType="numeric"
                            leftComponent={
                              <MaterialCommunityIcons name="phone" size={16} />

                              
                            }
                            labelStyles={{
                              backgroundColor: '#fff',
                              paddingHorizontal: 5,
                              borderRadius: 3
                            }}

                            onChangeText={val => this.onChangeText('altnumber', val)}
                          />
                        </Block>
                        <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                          <Dropdown

                            style={styles.floatinput}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            label=" Select "
                            value={this.state.tos}
                            onChange={item => {
                              this.onChangeText('tos', item.value);
                              this.displayfields(item.value);


                            }}
                            renderLeftIcon={() => (
                              <MaterialCommunityIcons name="arrow-down-circle" size={16} />
                            )}
                          />
                        </Block>

                        {/*  id="common" */}
                        <Block id="common">
                          {(farmer || farmer_aggregator ||
                            fpo) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                value={ref_market_name}
                                label='Ref market name' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                onChangeText={val => this.onChangeText('ref_market_name', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            source_market_private ||
                            regional_market_vendor
                          ) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                value={product_name}
                                label='Product name' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                onChangeText={val => this.onChangeText('product_name', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            source_market_private ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Variety of product'
                                value={variety_of_product}
                                leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                onChangeText={val => this.onChangeText('variety_of_product', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            source_market_private ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Current price'
                                value={current_price}
                                leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                onChangeText={val => this.onChangeText('current_price', val)} />
                            </Block>
                          }
                          {(farmer || farmer_aggregator || fpo) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Current selling market' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={current_selling_market}
                                onChangeText={val => this.onChangeText('current_selling_market', val)} />
                            </Block>
                          }
                          {farmer &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                value={product_grown_areas}
                                label='Product grown areas'
                                leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                onChangeText={val => this.onChangeText('product_grown_areas', val)} />
                            </Block>
                          }
                          {farmer &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Yield prediction' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={yield_prediction}
                                onChangeText={val => this.onChangeText('yield_prediction', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            source_market_private ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Product photos & videos' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={product_photos_videos}
                                onChangeText={val => this.onChangeText('product_photos_videos', val)} />
                            </Block>
                          }
                          {(farmer || farmer_aggregator
                            ||
                            fpo) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Nearest market' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={nearest_market}
                                onChangeText={val => this.onChangeText('nearest_market', val)} />
                            </Block>
                          }
                          {farmer &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Products regularly grown in your land' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={products_regularly_grown_in_your_land}
                                onChangeText={val => this.onChangeText('products_regularly_grown_in_your_land', val)} />
                            </Block>
                          }
                          {(farmer_aggregator ||
                            fpo ||
                            source_market_private ||
                            source_market_suppliers ||
                            apmc_registered_suppliers) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Season' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={season}
                                onChangeText={val => this.onChangeText('season', val)} />
                            </Block>
                          }
                          {(
                            farmer_aggregator ||
                            fpo ||
                            source_market_private ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Specialised Products' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={specialised_products}
                                onChangeText={val => this.onChangeText('specialised_products', val)} />
                            </Block>
                          }

                          {(

                            source_market_private ||
                            source_market_suppliers ||

                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Market name' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={market_name}
                                onChangeText={val => this.onChangeText('market_name', val)} />
                            </Block>
                          }
                          {(

                            source_market_private ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Shop name' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={shop_name}
                                onChangeText={val => this.onChangeText('shop_name', val)} />
                            </Block>
                          }
                          {(

                            source_market_private ||

                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Mark' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={mark}
                                onChangeText={val => this.onChangeText('mark', val)} />
                            </Block>
                          }
                          {
                            apmc_registered_suppliers
                            &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Apmc name' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                }
                                value={apmc_name}
                                onChangeText={val => this.onChangeText('apmc_name', val)} />
                            </Block>
                          }
                          {
                            apmc_registered_suppliers
                            &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Apmc license no' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={apmc_license_no}
                                onChangeText={val => this.onChangeText('apmc_license_no', val)} />
                            </Block>
                          }
                          {(
                            farmer_aggregator ||
                            fpo
                          ) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='No of farmers in hand' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={no_of_farmers_in_hand}
                                onChangeText={val => this.onChangeText('no_of_farmers_in_hand', val)} />
                            </Block>
                          }
                          {
                            regional_market_vendor &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Source data of a product' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={source_data_of_a_product}
                                onChangeText={val => this.onChangeText('source_data_of_a_product', val)} />
                            </Block>
                          }
                          {regional_market_vendor &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Arrival season' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={arrival_season}
                                onChangeText={val => this.onChangeText('arrival_season', val)} />
                            </Block>
                          }

                          {/**  End offf Seperate */}

                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_private ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Seasonal data of product grown in your area' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={seasonal_data_of_product_grown_in_your_area}
                                onChangeText={val => this.onChangeText('seasonal_data_of_product_grown_in_your_area', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_private ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            regional_market_vendor) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <FloatingLabelInput
                                containerStyles={styles.floatinput}
                                label='Additional information' leftComponent={
                                    <MaterialCommunityIcons name="text" size={16} />
                                } value={additional_information}
                                onChangeText={val => this.onChangeText('additional_information', val)} />
                            </Block>
                          }
                          {(farmer ||
                            farmer_aggregator ||
                            fpo ||
                            source_market_private ||
                            source_market_suppliers ||
                            apmc_registered_suppliers ||
                            regional_market_vendor
                          ) &&
                            <Block width={width * 0.8} style={{ marginBottom: 25 }}>
                              <KeyboardAvoidingView behaviour="padding" enabled={true}>
                                <FloatingLabelInput
                                  containerStyles={styles.floatinput}
                                  label='Working experience' leftComponent={
                                      <MaterialCommunityIcons name="text" size={16} />
                                  } value={working_experience}
                                  onChangeText={val => this.onChangeText('working_experience', val)} />
                              </KeyboardAvoidingView>
                            </Block>
                          }

                        </Block>

                        <Block middle>

                          <Pressable style={styles.button} title="Submit" onPress={() => this.submithandle()}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                              Submit
                            </Text>
                          </Pressable>
                        </Block>



                      </KeyboardAvoidingView></Block>

                  </ScrollView>
                </Block>
              </Block>
            </Block>

          </ImageBackground>
        </Block>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  dropdown: {

    padding: 7,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
    borderRadius: 4,
    borderColor: argonTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF'
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  registerContainer: {

    width: '90%',
    height: '98%',
    backgroundColor: "#F4F5F7",
    borderRadius: 4,



  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 18,
    marginLeft: 12
  },
  textt: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 10
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  },
  floatinput: {
    borderWidth: 0.2,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderColor: 'blue',
    borderRadius: 8,
    height: 50
  }
});


export default Home;
