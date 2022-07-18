import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, View, ScrollView, StyleSheet, Modal, StatusBar, RefreshControl, Alert,
  ActivityIndicator,
  Linking,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableRipple, Avatar, Button, Card, Title } from 'react-native-paper';
import filter from 'lodash.filter'
import SearchInput from 'react-native-search-filter';

export default Reports = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [fullData, setfullData] = useState([]);
  const [query, setquery] = useState('');
  const [ModalisVisible, setModalisVisible] = useState(false);
  const [Modaldata, setModaldata] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);

    wait(1000).then(() => { });
  }, []);


  const url = "http://192.168.1.12:5000/";


  const options = {
    method: "GET",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Content-Type": "application/json;",
    },

  };


  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        //   console.log(json);
        setfullData(json); setData(json)
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Network Failed', 'Please check your connection and try again', [
          {
            text: 'Retry',
            onPress: () => {
              console.log("Retry Clicked");
              onRefresh()
            }

          }

        ]);
        throw error;
      })
      .finally(() => { setLoading(false); setRefreshing(false) });
  }, [isLoading]);
  //console.log(data);
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase()
    const data2 = filter(fullData, data => {
      return contains(data, formattedQuery)
    })
    setData(data2);
    setquery(text);

  }
  const contains = ({ name, location, product_name }, query) => {
    // console.log(name);
    const formattedname = name.toLowerCase()
    const formattedlocation = location.toLowerCase()
    const formattedproduct_name = product_name.toLowerCase()
    if (formattedname.includes(query) || formattedproduct_name.includes(query) || formattedlocation.includes(query)) {
      // console.log(name);
      return true
    }
    return false
  }

 const callnumber = (mobile) => {

 
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:${'+mobile+'}';
    } else {
      number = 'tel:${'+mobile+'}';
    }
    Linking.openURL(number);
  
  };

  return (

    <View>

      <StatusBar backgroundColor='green' barStyle="light-content" />
      <SearchInput

        onChangeText={(term) => { handleSearch(term) }}
        style={styles.searchInput}
        placeholder="Filter by Name / Location/ Product"
        clearIcon={query == '' ? <Icon size={25} name="account-search" /> : <Icon size={22} name="close-circle-outline" />}
      />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>


        {isLoading ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#009387" />

        </View> :
          (

            <TouchableRipple>
              <View >

                <FlatList
                  data={data}
                  keyExtractor={(item, index) => {
                    return item.name;
                  }}

                  renderItem={({ item }) => (


                    <Card style={[styles.card, styles.menuItem]}>

                      <Card.Content >
                        <Title>Name : {item.name}</Title>
                        <Text style={styles.textdesc}><Icon name="map-marker" color="#FF6347" size={15} />  Location : {item.location}</Text>
                        <Text style={styles.textdesc}><Icon name="fruit-grapes" color="#FF6347" size={15} />  Product name : {item.product_name}</Text>
                        <Text style={styles.textdesc}><Icon name="circle-slice-3" color="#FF6347" size={15} />  Season  : {item.season}</Text>
                        <TouchableOpacity
                          onPress={() => callnumber(item.mobnumber)}

                        >
                          <Text style={styles.textdesc}><Icon name="phone" color="#FF6347" size={15} />  Mobile  : {item.mobnumber}</Text>
                          <Text style={{paddingLeft:20,fontSize:10, color:'grey'}} ><Icon name="help-circle" size={10} /> Toch to call directly</Text>
                        </TouchableOpacity>
                      </Card.Content>
                      <Card.Actions  style={styles.cardbutton1} >
                        <Button color="white" style={styles.cardbutton} onPress={() => { setModaldata(item); setModalisVisible(true) }}   >View Details</Button>

                      </Card.Actions>
                    </Card>

                  )}


                />

                <Modal
                  animationType={"slide"}
                  transparent={true}
                  visible={ModalisVisible}
                  backdropOpacity={10}
                  tyle={{ borderRadius: 50 }}
                  onRequestClose={() => { setModaldata([]); setModalisVisible(false) }}>
                  {/*All views of Modal*/}
                  <ScrollView>
                    <View style={styles.modal}>
                      <View style={styles.userInfoSection}>


                        <View style={{ flexDirection: 'row', marginTop: 15, alignItems: 'center' }}>


                          <View style={{ marginLeft: 10 }}>
                            <Title style={[styles.title, {
                              marginTop: 15,
                              marginBottom: 5,
                              width: "100%",
                            }]}>Name: {Modaldata.name}</Title>
                            <View style={[styles.textpro]}>
                              <Icon name='map-marker' color='#FF6347' size={15} />
                              <Title style={styles.menuItemText}>Location: {Modaldata.location}</Title>
                            </View>
                            <TouchableOpacity
                          onPress={() => callnumber(Modaldata.mobnumber)}

                        >
                            <View style={[styles.textpro]}>
                              <Icon name='phone' color='#FF6347' size={15} />
                              <Title style={styles.menuItemText}>Mobile: {Modaldata.mobnumber}</Title>
                            </View>
                            <Text style={{paddingLeft:20,fontSize:10, color:'grey'}} ><Icon name="help-circle" size={10} /> Toch to call directly</Text>
                        </TouchableOpacity>
                            <View style={[styles.textpro]}>
                              <Icon name='fruit-grapes' color='#FF6347' size={15} />
                              <Title style={styles.menuItemText}>product_name: {Modaldata.product_name}</Title>
                            </View>

                          </View>


                        </View>
                        <View
                          style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                          }}
                        />
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>address: {Modaldata.address}</Text>
                        </View>


                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>alternate number: {Modaldata.altnumber}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>Type of Supplier: {Modaldata.tos}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>ref_market_name: {Modaldata.ref_market_name}</Text>
                        </View>

                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>variety_of_product: {Modaldata.variety_of_product}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>current_price: {Modaldata.current_price}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>current_selling_market: {Modaldata.current_selling_market}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>product_grown_areas: {Modaldata.product_grown_areas}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>yield_prediction: {Modaldata.yield_prediction}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>product_photos_videos: {Modaldata.product_photos_videos}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>nearest_market: {Modaldata.nearest_market}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>products_regularly_grown_in_your_land: {Modaldata.products_regularly_grown_in_your_land}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>Seasonal_data_of_product_grown_in_your_area: {Modaldata.seasonal_data_of_product_grown_in_your_area}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>additional_information: {Modaldata.additional_information}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>working_experience: {Modaldata.working_experience}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>market_name: {Modaldata.market_name}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>shop_name: {Modaldata.shop_name}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>mark: {Modaldata.mark}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>apmc_name: {Modaldata.apmc_name}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>apmc_license_no: {Modaldata.apmc_license_no}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>no_of_farmers_in_hand: {Modaldata.no_of_farmers_in_hand}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>source_data_of_a_product: {Modaldata.source_data_of_a_product}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>arrival_season: {Modaldata.arrival_season}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>season: {Modaldata.season}</Text>
                        </View>
                        <View style={[styles.textpro]}>
                          <Icon name='counter' color='#FF6347' size={15} />
                          <Text style={styles.menuItemText}>specialised_products: {Modaldata.specialised_products}</Text>
                        </View>



                      </View>
                      <View style={styles.closemodal}>
                        <Button color="white" onPress={() => { setModalisVisible(false) }}>Close X </Button>

                      </View>
                    </View >

                  </ScrollView>

                </Modal>



              </View>
            </TouchableRipple>

          )}
        <View style={[styles.footer]}>
          <Text style={{ fontStyle: 'italic' }}>{'End of Data!'}</Text>
        </View>

      </ScrollView>
    </View >
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {

    backgroundColor: "#f9f9f9",
    height: '98%',
    width: '95%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 20,
    marginLeft: 10,

    elevation: 20,
    shadowColor: '#52006A',


  },
  closemodal: {
    backgroundColor: "green",
    marginBottom: 35,
    fontStyle: 'italic',
    fontWeight: 'bold',


  },


  card: {
    alignItems: 'center',
    margin: 6,

  },

  footer: {

    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  cardtitle: {
    width: '80%',
    paddingLeft: 20,

  },


  searchInput: {
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    color: 'green'
  },

  textgen: {
    textAlign: 'center',
    fontSize: 12,
  }
  ,


  cards: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#52006A',

  },
  textdate: {
    textAlign: 'right',
  },
  textdesc: {
    width: '90%',
    paddingTop: 10,
  },
  cardbutton: {

    backgroundColor: 'green'


  },
  cardbutton1: {
    paddingTop: 30,
    width:'50%',
    
 
  },


  textcom: {

    paddingTop: 25,
    color: 'grey',
    fontSize: 12,
    fontStyle: 'italic'

  },

  shadowProp: {
    color: '#777777',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 26,

  },
  textpro: {
    marginTop: 30,
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#52006A',
  },
  textpro1: {
    marginTop: 20,
    borderRadius: 8,
    flexDirection: 'row',
    marginVertical: 5,
    shadowColor: '#52006A',
  },


  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: '500',

  },
  labels: {
    marginTop: 4,
    marginLeft: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 10,
    elevation: 10,
    shadowColor: '#52006A',
  },
  menuItemText: {
    color: 'black',
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 16,
    width: 250,
  },


});

