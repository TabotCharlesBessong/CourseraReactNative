
import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SectionLists = () => {
  const menuItemsToDisplay = [
    {
      title: "Appetizers",
      data: [
        "Hummus",
        "Moutabal",
        "Falafel",
        "Marinated Olives",
        "Kofta",
        "Eggplant Salad",
      ],
    },
    {
      title: "Main Dishes",
      data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
    },
    {
      title: "Sides",
      data: [
        "Fries",
        "Buttered Rice",
        "Bread Sticks",
        "Pita Pocket",
        "Lentil Soup",
        "Greek Salad",
        "Rice Pilaf",
      ],
    },
    {
      title: "Desserts",
      data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
    },
  ];

  const Item = ({ name, price }) => (
    <View style={styles.innerContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemText}>{price}</Text>
    </View>
  );

   const renderItem = ({ item }) => <Item name={item} />;

   const renderSectionHeader = ({ section: { title } }) => (
     <Text style={styles.sectionHeader}>{title} </Text>
   );

   const Separator = () => <View style={styles.separator} />;

   const Footer = () => (
     <Text style={styles.footerText}>
       All Rights Reserved by Little Lemon 2022
     </Text>
   );
  return (
    <View style={styles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
      ></SectionList>
    </View>
  );
}

export default SectionLists

const styles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: "#333333",
  },
  sectionHeader: {
    backgroundColor: "#fbdabb",
    color: "#333333",
    fontSize: 34,
    flexWrap: "wrap",
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
});
