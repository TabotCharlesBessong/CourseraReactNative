
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={true} indicatorStyle={"white"} >
      <Text style={styles.text1} >Welcome to the little lemon</Text>
      <Text style={styles.text2} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus saepe earum vitae quod animi iste mollitia illum ipsum. Quae, sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia amet enim voluptates velit quis laudantium sint inventore consequuntur dolore, facilis similique voluptate provident accusantium corrupti sequi et deserunt dignissimos voluptatibus pariatur laboriosam ipsam. Possimus autem voluptatibus, neque quaerat maxime vitae adipisci. Excepturi ad repudiandae veniam perspiciatis cumque sequi repellendus reprehenderit iste consequatur optio, eaque maxime eligendi, dolore dolor. Placeat corporis voluptatum voluptatibus nostrum facilis iusto hic tempora expedita, cumque ipsam atque? Quasi quaerat voluptatibus facere sed nisi architecto, magnam tempore eius modi saepe nostrum iure quod dolorum maxime voluptatum mollitia quam labore eos, vel ex? Ratione, mollitia ipsum et, provident doloribus totam consectetur harum quam voluptatum quod hic praesentium voluptates sunt. Dolorem, tempora fugit delectus provident dolorum assumenda velit ad quaerat quis? Praesentium, at. Nobis est reprehenderit odit, vero quas dolor nam fuga fugiat officiis excepturi praesentium possimus cupiditate libero consectetur ad quos doloribus rem, modi magnam? Animi, dolore molestiae quaerat quo voluptatem quisquam, iste iusto tenetur inventore error, corrupti possimus! Rem deserunt explicabo qui ratione corporis aperiam repellat odit voluptatibus? Quaerat, facilis cumque. Ad, explicabo repellat? Eius temporibus officiis odit unde eligendi nihil rem quod. Dignissimos aperiam temporibus minus, debitis perferendis veritatis similique possimus nostrum adipisci voluptatum doloribus perspiciatis!</Text>
    </ScrollView>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    // bottom:20 ,
    // paddingBottom:20,
    // marginBottom:20
  },
  text1: {
    color: "white",
    marginVertical: 24,
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  text2: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'white'
  }
});