import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';

const jobListings = [
  { id: 1, title: "Software Engineer", company: "ABC Company", location: "New York, NY", description: "We are seeking an experienced software engineer to join our team.",experience: 2,skills:"AB,gv,cd"},
   { id: 2, title: "Marketing Manager", company: "XYZ Inc.", location: "Los Angeles, CA", description: "We are looking for a skilled marketing manager to oversee our marketing department.",experience: 2,skills:"AB,gv,cd" }, 
   { id: 3, title: "Graphic Designer", company: "123 Agency", location: "San Francisco, CA", description: "We need a talented graphic designer to create engaging visuals for our clients.",experience: 2,skills:"AB,gv,cd" },
    { id: 4, title: "Customer Support Representative", company: "ACME Corp", location: "Seattle, WA", description: "We're looking for a friendly and helpful customer support representative to join our team.",experience: 2,skills:"AB,gv,cd" }];

export default function JobListScreen() {
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isApplied, setApplied] = useState(false);
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [about,setAbout] = useState('')
  const [selectedJob, setSelectedJob] = useState({});

  const handleApplyButton = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleSubmitButton = () => {
    // Here you can submit the form data to your server or perform any other necessary actions
    Alert.alert("Success", "Your application has been submitted!");
    setShowModal(false);
    setFormData({
      name: "",
      email: "",
      aboutMe: ""
    });
  };
  const renderItem = ({ item }) => (

    <View style={styles.listitem}>
      <Text style={styles.textsyle}>{item.title}</Text>
      <Text style={styles.textsyle}>Company :{item.company}</Text>
      <Text style={styles.textsyle}>Experience:{item.experience} yrs</Text>
      <Text style={styles.textsyle}>Skills Required :{item.skills}</Text>
      <TouchableOpacity onPress={() => { setShowModal(true) }}>
        <Text style={styles.applyText}>{isApplied ? 'Applied' : 'Apply'}</Text>
      </TouchableOpacity>
    </View>
  );
  const handleSearchChange = (item) => setSearch(item)

  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.outline}
        value={searchText}
        onChangeText={handleSearchChange}
        placeholder='Search'
      />
      <FlatList
        data={jobListings}
        renderItem={renderItem}
      />
       <Modal visible={showModal} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            placeholder="Name"
            style={styles.outline}
            value={name}
            onChangeText={setName}
           
          />
          <TextInput
            placeholder="Email"
            value={email}
            style={styles.outline}
            onChangeText={setEmail}
           
          />
          <TextInput
            placeholder="About Me"
            value={about}
            onChangeText={setAbout}
            style={styles.outline}
           
          />

          <TouchableOpacity onPress={()=> {setApplied(true)
          setShowModal(false)
          }}>
            <Text style={styles.applyText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text style={styles.applyText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listitem: {
    marginVertical: 10,
    padding: 10
  },
  textsyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3
  },
  applyText: {
    fontSize: 17,
    color: 'blue',
    fontWeight: 'bold',
    marginVertical:10
  },
  outline:{
    borderColor:'black',
    borderWidth: 1,
    marginHorizontal:10,
    marginVertical:10,
  }
})
