import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Rahul Sharma',
      status: 'just an extra ordinary software engineer',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAbEMyOhKVfUizcuOOZ4p8i0FqmKO8MpbNA&s',
    },
    {
      uid: 2,
      name: 'Rohit Sharma',
      status: 'just an extra ordinary doctor',
      imageUrl:
        'https://images.herzindagi.info/image/2024/Jul/doctors-day-quotes.jpg',
    },
    {
      uid: 3,
      name: 'Tripti Sharma',
      status: 'just an extra ordinary software engineer',
      imageUrl:
        'https://i.insider.com/4fc6850e6bb3f79b4500000a?width=600&format=jpeg&auto=webp',
    },
    {
      uid: 4,
      name: 'Rameshwar Sharma',
      status: 'just an extra ordinary software engineer',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGIh-5JDVofSSzrr4zKp4iFdEyiVDKrKcqmvMmB8wM1P2HwFk6vvKmqZcnKIjXJbdhto&usqp=CAU',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <>
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 9,
  },
  Container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 4,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 12,
    // color: '#FFF'
  },
});
