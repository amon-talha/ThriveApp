import React, {useState} from 'react';
import {Image, View, TouchableOpacity, FlatList} from 'react-native';

import {Pargraph} from '../texts';
import OfferingCard from './OfferingCard';
import styles from './offerings.styles';

const Offerings = ({data, navigation}) => {
  const [veg, setVeg] = useState(true);
  const [nonVeg, setNonVeg] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={() => setNonVeg(!nonVeg)}>
          <View style={[styles.filter, nonVeg ? styles.active : {}]}>
            <Image
              style={styles.tag}
              source={require('../../../assets/nonveg.png')}
            />
            <Pargraph
              passedStyles={nonVeg ? styles.tagTextActive : styles.tagText}
              text="Non-veg"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVeg(!veg)}>
          <View style={[styles.filter, veg ? styles.active : {}]}>
            <Image
              style={styles.tag}
              source={require('../../../assets/veg.png')}
            />
            <Pargraph
              passedStyles={veg ? styles.tagTextActive : styles.tagText}
              text="Veg"
            />
          </View>
        </TouchableOpacity>
      </View>
      {/* {data.items.map(ele => {
        return (
          <OfferingCard
            restrauntData={{...data.additionalData, ...data.tax_applicable}}
            data={ele}
            nonVeg={nonVeg}
            veg={veg}
            navigation={navigation}
          />
        );
      })} */}
      <FlatList
        data={data.items}
        renderItem={({item}) => {
          return (
            <OfferingCard
              restrauntData={{...data.additionalData, ...data.tax_applicable}}
              data={item}
              nonVeg={nonVeg}
              veg={veg}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Offerings;
