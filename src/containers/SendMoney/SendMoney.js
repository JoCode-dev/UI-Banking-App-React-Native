import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Header} from '../../components/molecules';
import {icons, COLORS, SIZES, FONTS, images} from '../../style';

const SendMoney = ({navigation}) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '0'];
  const [text, onChangeText] = React.useState('');
  const [commission, setCommission] = React.useState(null);
  const renderNumberPad = () => {
    return (
      <>
        {numbers?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.number}
              onPress={() => onChangeText(prev => prev + item)}>
              <Text style={styles.numberElement}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </>
    );
  };
  React.useEffect(() => {
    const amount = parseFloat(text, 10);
    const percent = (20 * amount) / 100;
    setCommission(amount - percent);
  }, [text]);
  return (
    <View style={styles.container}>
      <Header
        title="Send Money"
        icon={icons.arrow}
        onPress={() => navigation.goBack()}
      />

      {/* Image */}
      <View style={styles.imageContainer}>
        <View style={styles.imageStroke}>
          <Image
            source={images.melo}
            resizeMethod="resize"
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>Floyd Miles</Text>
      </View>

      {/* Card Selector */}
      <View style={styles.selectorContainer}>
        <TouchableOpacity style={styles.selector}>
          <View style={styles.leftSelector}>
            <Image
              source={images.visa}
              style={{
                width: 50,
                height: 20,
              }}
            />
            <Text
              style={{
                ...FONTS.h3,
                color: '#999999',
                marginHorizontal: 10,
              }}>
              •••• 1762
            </Text>
          </View>
          <View style={styles.rightSelector}>
            <Image
              source={icons.chevron_down}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.gray,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <View style={styles.textInputContainer}>
          <TextInput
            value={text}
            onChangeText={onChangeText}
            style={styles.textInput}
            placeholder="Amount"
            placeholderTextColor={COLORS.gray}
            keyboardType="numeric"
          />
          <Text style={styles.notice}>
            {commission ? `2% commision. Total amount $${commission}` : null}
          </Text>
        </View>

        <View style={styles.numberPadContainer}>
          {renderNumberPad()}
          <TouchableOpacity
            style={styles.number}
            onPress={() =>
              onChangeText(prev => prev.slice(0, prev?.length - 1))
            }>
            <Image
              source={icons.pludeletes}
              style={{
                tintColor: 'white',
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Send Button */}
        <View style={{flex: 1, padding: 10}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: SIZES.width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStroke: {
    width: 130,
    height: 130,
    borderWidth: 4,
    borderColor: COLORS.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  image: {
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  name: {
    ...FONTS.h3,
    marginVertical: 10,
  },
  selectorContainer: {
    width: SIZES.width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  selector: {
    width: 230,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding,
    flexDirection: 'row',
    padding: 5,
  },
  leftSelector: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightSelector: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    backgroundColor: COLORS.black,
    width: SIZES.width,
    flex: 1,
    borderTopLeftRadius: SIZES.padding * 1.3,
    borderTopRightRadius: SIZES.padding * 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  textInputContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#1f1f1f',
    width: '90%',
    height: 60,
    borderRadius: SIZES.padding * 2,
    textAlign: 'center',
    color: 'white',
    ...FONTS.h1,
  },
  notice: {
    color: '#5b5b5b',
  },
  numberPadContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  number: {
    width: 130,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberElement: {
    color: 'white',
    ...FONTS.body1,
  },
  button: {
    backgroundColor: COLORS.primaryColor,
    width: 350,
    height: 50,
    borderRadius: SIZES.padding,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    ...FONTS.body3,
  },
});

export default SendMoney;
