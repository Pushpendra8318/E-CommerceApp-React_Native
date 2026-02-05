import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import CartItem from '../common/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {addToWishlist, removeFromCart} from '../redux/actions/Actions';
import CommonButton from '../common/CommonButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
     <SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
    <View style={{flex: 1}}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <CartItem
                onAddWishlist={x => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        //   <Text>No Items Added in Cart</Text>
        // </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../images/no_cart.png')}
                style={{
                  width: 500,
                  height: 600,
                  borderRadius: 50,
                  resizeMode: 'center',
                }}
              />
            </View>
      )}
      {cartData.length > 0 ? (
        <View style={{marginBottom: 80}}>
          <CommonButton
            bgColor={'green'}
            textColor={'#fff'}
            title={'Checkout'}
            onPress={() => {
            

              navigation.navigate('Checkout');
            }}
          />
        </View>
      ) : null}
    </View>
    </SafeAreaView>
  );
};

export default Cart;