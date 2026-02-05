

import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import CartItem from '../common/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  addItemToCart,
  removeFromWishlist,
} from '../redux/actions/Actions';

const Wishlist = () => {
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
      <View style={{flex: 1}}>

        {cartData.length > 0 ? (
          <FlatList
            data={cartData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => {
              return (
                <CartItem
                  isWishlist={'swe'}
                  item={item}
                  onRemoveFromWishlist={() => {
                    dispatch(removeFromWishlist(index));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(x));
                  }}
                />
              );
            }}
          />
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              NO WISHLIST CARD ADDED
            </Text>
          </View>
        )}

      </View>
    </SafeAreaView>
  );
};

export default Wishlist;
