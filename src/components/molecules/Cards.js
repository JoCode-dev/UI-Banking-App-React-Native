import * as React from 'react';
import {FlatList, View, Animated} from 'react-native';
import {constants} from '../../style';
import {Card} from '../atoms';

const Cards = ({cardNumber, setCardNumber}) => {
  const flatlistRef = React.useRef();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onViewChangeRef = React.useRef(({viewableItems, changed}) => {
    setCurrentIndex(viewableItems[0]?.index);
  });

  return (
    <View style={{height: 350}}>
      <Animated.FlatList
        ref={flatlistRef}
        data={constants.cards}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment={'center'}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item, index}) => (
          <Card
            cc={item.cc}
            color={item.color}
            balance={item.balances}
            image={item.backgroundImage}
            flatlistRef={flatlistRef}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            scrollX={scrollX}
            index={index}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
          />
        )}
      />
    </View>
  );
};

export default Cards;
