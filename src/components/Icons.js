import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Icons = ({type, ...props}) => {
  switch (type) {
    case 'AntDesign':
      return <AntDesign {...props} />;

    case 'Feather':
      return <Feather {...props} />;

    case 'Entypo':
      return <Entypo {...props} />;

    case 'FontAwesome':
      return <FontAwesome {...props} />;

    case 'FontAwesome5':
      return <FontAwesome5 {...props} />;

    case 'FontAwesome5Pro':
      return <FontAwesome5Pro {...props} />;

    case 'Fontisto':
      return <Fontisto {...props} />;

    case 'EvilIcons':
      return <EvilIcons {...props} />;

    case 'Foundation':
      return <Foundation {...props} />;

    case 'Octicons':
      return <Octicons {...props} />;

    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;

    case 'Ionicons':
      return <Ionicons {...props} />;

    default:
      return <MaterialIcons {...props} />;
  }
};

export default Icons;
