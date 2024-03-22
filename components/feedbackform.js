import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // You can add logic here to handle the feedback submission
    console.log('Feedback submitted:', feedback);
    // Optionally, you can clear the input field after submission
    setFeedback('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Feedback Form</Text>
      <TextInput
        placeholder="Enter your feedback"
        onChangeText={text => setFeedback(text)}
        value={feedback}
        multiline
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FeedbackForm;