import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { AvatarRequest } from '../../modules/requests/AvatarRequest';

export const Create = () => {
    const [loading, setLoading] = useState(false);
    const [avatars, setAvatars] = useState([]);

    const { token, baseUrl }:any = useContext(AuthContext);

    useEffect(() => {
        const handleAvatar = async() => {
            const data = await AvatarRequest(token, baseUrl)
            setAvatars(data);
        }
        handleAvatar();
    }, []);

    return (
        <View>
            <Text>Create</Text>
            {avatars.map((image:any) => (
                <Image
                key={image.id}
                source={{ uri: image.url }}
                style={styles.image}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 10,
    },
  });