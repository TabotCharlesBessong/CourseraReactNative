
import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

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

  const [showMenu, setShowMenu] = useState(false)

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
      {!showMenu && (
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={styles.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={styles.buttonText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        ></SectionList>
      )}
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
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
});
