import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Left,
  Right,
  Text,
  View
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { getBeerByID } from '../apiService';
import Bottom from '../components/Bottom';
function DetailsScreen({ navigation, route }) {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    getBeerByID(route.params.id).then(data => setBeer(data.beer));
  }, []);
  return (
    <Container>
      <Content>
        <Card style={{ justifyContent: 'center' }}>
          <CardItem header>
            <Text>{beer.beer_name}</Text>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: beer.beer_label }}
              style={{
                height: 200,
                width: 100,
                flex: 1,
                borderRadius: 200 / 2,
              }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text numberOfLines={4}>{beer.beer_description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Button
              onPress={() => {
                navigation.navigate('PostReview');
              }}
            >
              <Text>Post A Review</Text>
            </Button>
          </CardItem>
        </Card>
        <View style={styles.reviewBox}>
          <Text style={{ fontSize: 30 }}>Reviews</Text>
        </View>
        <Card>
          <CardItem>
            <Text>
              The review text will show here.....sdasdas dfsdThe review text
              will show here.....
            </Text>
          </CardItem>
          <CardItem>
            <Right>
              <Text>Madhushree Gupta</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Text>
              The review text will show here.....sdasdas dfsdThe review text
              will show here.....
            </Text>
          </CardItem>
          <CardItem>
            <Right>
              <Text>Madhushree Gupta</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <Bottom />
    </Container>
  );
}

const styles = StyleSheet.create({
  reviewBox: {
    paddingTop: 30,
    paddingBottom: 20,
    alignSelf: 'center',
  },
});

export default DetailsScreen;
