import Colors from '@/src/constants/Colors';
import { Image, StyleSheet, Text, View } from 'react-native';

const ProductListItem = ({product}) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
}

export default ProductListItem;


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 12,
      borderRadius: 12,
      margin: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      marginVertical: 10,
    },
    price: {
      color: Colors.light.tint,
      fontWeight: 'bold',
    },
    image: {
      width: '100%',
      aspectRatio: 1
    }
  });
  