import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Colors from '../Colors';
import AppButon from '../components/AppButton';
import Input from '../components/Input';
import metrix from '../metrix';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/action';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartScreen = props => {
  const dispatch = useDispatch();
  const cartCount = useSelector(state => state.cart.cartCount);
  return (
    <ScrollView>
      <View>
        <View style={styles.loginContainer}>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginTextStyle}>Login</Text>
          </View>
          <Input placeholder="E mail" />
          <Input placeholder="Name" />
          <Input placeholder="Password" />
          <View style={styles.contactContainer}>
            <View style={styles.phoneCodeContainer}>
              <Input placeholder="+971" />
            </View>
            <View style={styles.phoneNoContainer}>
              <Input placeholder="Mobile" />
            </View>
          </View>
          <View style={styles.submitButtonContainer}>
            <AppButon text="Submit" />
          </View>
        </View>

        <View style={styles.addCartContainer}>
          <View>
            <View style={styles.cartConUpperRow}>
              <View>
                <Text style={styles.fourThirtyText}>430</Text>
                <Text style={styles.soldText}>SOLD</Text>
                <Text style={styles.outOfText}>OUT OF</Text>
                <Text style={styles.thousandText}>1000</Text>
              </View>
              <View style={styles.sahreAndHeartContainer}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  color="grey"
                  size={23}
                />
                <MaterialCommunityIcons
                  name="heart-outline"
                  color="grey"
                  size={23}
                />
              </View>
            </View>
            <View style={styles.cartConMidTextCon}>
              <View style={styles.getaChnaceTextRow}>
                <Text style={styles.getaChnaceText}>get a chance to</Text>
                <Text style={styles.winText}>{''} WIN</Text>
                <Text style={styles.Atext}> A</Text>
              </View>
            </View>
            <Text style={styles.carConCarNameText}>Bentley Continental</Text>
            <Image
              style={styles.carImageStyle}
              resizeMode="cover"
              source={require('../assets/car.jpg')}
            />
          </View>
          <View style={styles.bottimHoddieRow}>
            <View style={styles.hoddieImageCon}>
              <Image
                style={styles.hoddieImageStyle}
                resizeMode="contain"
                source={require('../assets/blueHoddie.jpg')}
              />
            </View>
            <View>
              <Text style={styles.hoddieConTextBuyBlue}>
                Buy a Blue Cotton Hoddie
              </Text>
              <Text style={styles.AED100}> AED 100</Text>
              <View style={styles.cartAddAndDeleteCon}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(addToCart());
                  }}>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                    }}
                    source={require('../assets/add.png')}
                  />
                </TouchableOpacity>
                <Text style={styles.cartCount}>{cartCount}</Text>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeFromCart());
                  }}>
                  <Image
                    style={{
                      height: 30,
                      width: 30,
                    }}
                    source={require('../assets/minus.jpg')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {},
  loginContainer: {
    alignSelf: 'center',
    width: '90%',
    padding: metrix.VerticalSize(10),
    borderRadius: metrix.VerticalSize(14),
    borderColor: Colors.grey,
    borderWidth: metrix.VerticalSize(0.5),
    marginTop: metrix.VerticalSize(10),
    elevation: 2,
    // alignItems:'center',
    // justifyContent:'center'
  },
  addCartContainer: {
    alignSelf: 'center',
    width: '90%',
    padding: metrix.VerticalSize(10),
    borderRadius: metrix.VerticalSize(14),
    borderColor: Colors.grey,
    borderWidth: metrix.VerticalSize(0.2),
    marginTop: metrix.VerticalSize(10),
    elevation: 2,
    marginBottom: 20,
    // alignItems:'center',
    // justifyContent:'center'
  },
  loginTextContainer: {
    alignSelf: 'center',
  },
  loginTextStyle: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: metrix.VerticalSize(20),
  },
  contactContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  phoneCodeContainer: {
    width: '15%',
  },
  phoneNoContainer: {
    width: '85%',
  },
  submitButtonContainer: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrix.VerticalSize(15),
    marginVertical: metrix.VerticalSize(10),
  },
  cartConUpperRow: {flexDirection: 'row', justifyContent: 'space-between'},
  fourThirtyText: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  soldText: {
    color: Colors.grey,
    fontSize: 8,
    fontWeight: '800',
  },
  outOfText: {
    color: Colors.grey,
    fontSize: 9,
    fontWeight: '800',
  },
  thousandText: {
    color: Colors.greyTwo,
    fontSize: 17,
    fontWeight: '800',
  },
  sahreAndHeartContainer: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  cartConMidTextCon: {
    alignSelf: 'flex-end',
    marginRight: metrix.HorizontalSize(30),
  },
  getaChnaceTextRow: {flexDirection: 'row'},
  getaChnaceText: {
    color: Colors.blue,
    fontSize: metrix.VerticalSize(22),
    fontWeight: 'bold',
  },
  winText: {
    color: 'red',
    fontSize: metrix.VerticalSize(22),
    fontWeight: 'bold',
  },
  Atext: {
    color: Colors.blue,
    fontSize: metrix.VerticalSize(22),
    fontWeight: 'bold',
  },
  carConCarNameText: {
    color: Colors.blue,
    fontSize: metrix.VerticalSize(24),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  carImageStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  bottimHoddieRow: {
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  hoddieImageCon: {
    width: '35%',
  },
  hoddieImageStyle: {
    width: '90%',
    height: 100,
  },
  hoddieConTextBuyBlue: {color: Colors.black, fontWeight: '800', fontSize: 16},
  AED100: {color: Colors.blue, fontSize: 22, fontWeight: 'bold'},
  cartAddAndDeleteCon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrix.VerticalSize(10),
    marginLeft: metrix.HorizontalSize(10),
  },
  cartCount: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 7,
  },
});
export default CartScreen;
