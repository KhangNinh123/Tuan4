import React, { useState } from 'react';
import {
  View,
  Text,
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';

<<<<<<< HEAD
=======
=======
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { AntDesign, Ionicons, Feather } from '@expo/vector-icons';



>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
const sectionsData = [
  {
    id: '1',
    title: 'I - Introduction',
    lessons: [
      { id: '01', title: 'Amet adipiscing consectetur', duration: '01:23 mins', completed: true },
      { id: '02', title: 'Culpa est incididunt enim id adi', duration: '01:23 mins', playing: true },
    ],
  },
  {
    id: '2',
    title: 'III - Plan for your UX Research',
    lessons: [
      { id: '01', title: 'Exercitation elit incididunt esse', duration: '01:23 mins' },
      { id: '02', title: 'Duis esse ipsum laboru', duration: '01:23 mins' },
      { id: '03', title: 'Labore minim reprehenderit pariatur', duration: '01:23 mins' },
    ],
  },
  {
    id: '3',
    title: 'III - Conduct UX research',
    lessons: [],
  },
  {
    id: '4',
    title: 'IV - Articulate findings',
    lessons: [],
  },
];

const App = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (id) => {
    if (expandedSections.includes(id)) {
<<<<<<< HEAD
      setExpandedSections(expandedSections.filter((sectionId) => sectionId !== id));
=======
<<<<<<< HEAD
      setExpandedSections(expandedSections.filter((sectionId) => sectionId !== id));
=======
      setExpandedSections(expandedSections.filter(sectionId => sectionId !== id));
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    } else {
      setExpandedSections([...expandedSections, id]);
    }
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
  return (
    <View style={styles.container}>
      <ScrollView>
        {sectionsData.map((section) => (
          <View key={section.id}>
            <TouchableOpacity
              onPress={() => toggleSection(section.id)}
              style={styles.sectionHeader}
            >
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <AntDesign
                name={expandedSections.includes(section.id) ? 'up' : 'down'}
                size={18}
                color="black"
              />
            </TouchableOpacity>
            {expandedSections.includes(section.id) &&
              section.lessons.map((lesson) => (
                <View key={lesson.id} style={styles.lessonContainer}>
                  <View>
                    <Text>{lesson.id}</Text>
                  </View>
                  <View style={styles.lessonInfo}>
                    <Text style={styles.lessonTitle}>{lesson.title}</Text>
                    <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                  </View>
                  <View style={styles.lessonIcon}>
                    {lesson.completed ? (
                      <Ionicons name="checkmark" size={24} color="blue" />
                    ) : lesson.playing ? (
                      <Feather name="play" size={20} color="blue" />
                    ) : (
                      <Feather name="play" size={20} color="black" />
                    )}
                  </View>
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
<<<<<<< HEAD
=======
=======
  const renderLesson = ({ item }) => (
    <View style={styles.lessonContainer}>
      <View>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.lessonInfo}>
        <Text style={styles.lessonTitle}>{item.title}</Text>
        <Text style={styles.lessonDuration}>{item.duration}</Text>
      </View>
      <View style={styles.lessonIcon}>
        {item.completed ? (
          <Ionicons name="checkmark" size={24} color="blue" />
        ) : item.playing ? (
          <Feather name="play" size={20} color="blue" />
        ) : (
          <Feather name="play" size={20} color="black" />
        )}
      </View>
    </View>
  );

  const renderSection = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => toggleSection(item.id)} style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{item.title}</Text>
        <AntDesign
          name={expandedSections.includes(item.id) ? 'up' : 'down'}
          size={18}
          color="black"
        />
      </TouchableOpacity>
      {expandedSections.includes(item.id) && (
        <FlatList
          data={item.lessons}
          renderItem={renderLesson}
          keyExtractor={(lesson) => lesson.id}
          nestedScrollEnabled
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sectionsData}
        renderItem={renderSection}
        keyExtractor={(section) => section.id}
      />
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    marginBottom: 5,
    borderRadius: 8,
  },
  lessonInfo: {
    flexDirection: 'column',
  },
  lessonTitle: {
    fontSize: 14,
    color: '#333',
  },
  lessonDuration: {
    fontSize: 12,
    color: '#666',
  },
  lessonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
